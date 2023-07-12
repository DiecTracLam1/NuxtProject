import formidable from "formidable"
import { uploadToCloudinary } from "../../ultis/cloudinary"

export default defineEventHandler(async (event) => {

    const form = formidable({})

    const response = await new Promise((resolve, reject) => {
        form.parse(event.req, (err:any, fields:any, files:any) => {
            if (err) {
                reject(err)
            }
            resolve({ fields, files })
        })
    })

    const { fields, files } = response

    const userId = event.context?.auth?.user?.id

    const filePromises = Object.keys(files).map(async key => {
        const file = files[key]

        await uploadToCloudinary(file.filepath)
    })


    await Promise.all(filePromises)

})