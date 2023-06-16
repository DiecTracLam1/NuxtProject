<template>
  <div>
    <div class="bg-[#F3F2EE]">
      <div class="xl:max-w-[1170px] px-[15px] mx-auto">
        <div class="py-10">
          <div class="text-center">
            <p class="text-sm mb-[30px]">Home > maha > detail</p>
          </div>

          <div class="grid grid-cols-12 gap-[30px]">
            <div class="col-span-4">
              <ul class="flex flex-col items-center">
                <li class="mb-2">
                  <span class="">
                    <img src="~/assets/images/thumb-1.png" alt="" />
                  </span>
                </li>
                <li class="mb-2">
                  <span class="">
                    <img src="~/assets/images/thumb-1.png" alt="" />
                  </span>
                </li>
                <li class="mb-2">
                  <span class="">
                    <img
                      src="https://preview.colorlib.com/theme/malefashion/img/shop-details/thumb-3.png"
                      alt=""
                    />
                  </span>
                </li>
                <li></li>
              </ul>
            </div>
            <div class="col-span-8">
              <img src="~/assets/images/product-big-2.png" alt="" />
              <!-- ~/assets/images/product-big-2.png -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="xl:max-w-[1170px] px-[15px] mx-auto">
      <div class="mt-[100px] text-center">
        <h4 class="font-bold leading-7 text-2xl">Hooded thermal anorak</h4>

        <!-- Rate & Favorite -->
        <div class="flex justify-center items-center my-2">
          <a-rate />
          <span class="mx-2"> - </span>
          <span class="font-bold">
            <Icon
              class="text-lg hover:cursor-pointer peer"
              name="uil:heart"
              color="black"
            />
            ADD TO WISHLIST
          </span>
        </div>

        <!-- Price -->
        <div class="flex justify-center items-center">
          <p class="font-bold leading-9 text-3xl mr-3 my-0">$270.00</p>
          <p class="text-xl text-blur-grey line-through my-0">70.00</p>
        </div>

        <!-- Description -->
        <p class="text-base leading-7 mb-6">
          Coat with quilted lining and an adjustable hood. Featuring long
          sleeves with adjustable cuff tabs, adjustable asymmetric hem with
          elastic side tabs and a front zip fastening with placket
        </p>

        <!-- Size & Color -->
        <form class="flex justify-center items-center mb-[30px]">
          <div class="flex mr-[50px]">
            <span class="text-base">Size: </span>
            <ul class="flex items-center m-0 ml-[10px]">
              <li class="mr-[10px]">
                <input class="hidden peer" type="radio" name="size" id="XXL" />
                <label
                  class="border-blur-grey border-[1px] font-bold text-[15px] py-2 px-[17px] peer-checked:text-white peer-checked:bg-black hover:cursor-pointer"
                  for="XXL"
                  >XXL</label
                >
              </li>

              <li class="mr-[10px]">
                <input class="hidden peer" type="radio" name="size" id="XL" />
                <label
                  class="border-blur-grey border-[1px] font-bold text-[15px] py-2 px-[17px] peer-checked:text-white peer-checked:bg-black hover:cursor-pointer"
                  for="XL"
                  >XL</label
                >
              </li>

              <li class="mr-[10px]">
                <input class="hidden peer" type="radio" name="size" id="L" />
                <label
                  class="border-blur-grey border-[1px] font-bold text-[15px] py-2 px-[17px] peer-checked:text-white peer-checked:bg-black hover:cursor-pointer"
                  for="L"
                  >L</label
                >
              </li>

              <li class="mr-[10px]">
                <input class="hidden peer" type="radio" name="size" id="M" />
                <label
                  class="border-blur-grey border-[1px] font-bold text-[15px] py-2 px-[17px] peer-checked:text-white peer-checked:bg-black hover:cursor-pointer"
                  for="M"
                  >M</label
                >
              </li>
            </ul>
          </div>

          <div class="flex items-center">
            <span class="leading-6 text-base">Color: </span>
            <ul class="flex items-center m-0 ml-[10px]">
              <li class="mr-[10px]">
                <input
                  class="hidden peer"
                  type="radio"
                  name="color"
                  id="yellow"
                />
                <label
                  class="inline-block w-[30px] h-[30px] p-[1px] rounded-full border-[#e3e1e8] border-[1px] peer-checked:scale-[1.2] peer-checked:border-black hover:cursor-pointer"
                  for="yellow"
                >
                  <span
                    class="inline-block bg-yellow-500 w-full h-full rounded-full"
                  />
                </label>
              </li>

              <li class="mr-[10px]">
                <input
                  class="hidden peer"
                  type="radio"
                  name="color"
                  id="yellow"
                />
                <label
                  class="inline-block w-[30px] h-[30px] p-[1px] rounded-full border-[#e3e1e8] border-[1px] peer-checked:scale-[1.2] peer-checked:border-black hover:cursor-pointer"
                  for="yellow"
                >
                  <span
                    class="inline-block bg-yellow-500 w-full h-full rounded-full"
                  />
                </label>
              </li>

              <li class="mr-[10px]">
                <input
                  class="hidden peer"
                  type="radio"
                  name="color"
                  id="yellow"
                />
                <label
                  class="inline-block w-[30px] h-[30px] p-[1px] rounded-full border-[#e3e1e8] border-[1px] peer-checked:scale-[1.2] peer-checked:border-black hover:cursor-pointer"
                  for="yellow"
                >
                  <span
                    class="inline-block bg-yellow-500 w-full h-full rounded-full"
                  />
                </label>
              </li>

              <li class="mr-[10px]">
                <input
                  class="hidden peer"
                  type="radio"
                  name="color"
                  id="yellow"
                />
                <label
                  class="inline-block w-[30px] h-[30px] p-[1px] rounded-full border-[#e3e1e8] border-[1px] peer-checked:scale-[1.2] peer-checked:border-black hover:cursor-pointer"
                  for="yellow"
                >
                  <span
                    class="text- inline-block bg-yellow-500 w-full h-full rounded-full"
                  />
                </label>
              </li>
            </ul>
          </div>
        </form>

        <!-- Amount  -->
        <div class="flex justify-center items-center mb-10">
          <input
            type="number"
            class="border-blur-grey border-[1px] font-bold text-center py-[13px] px-[15px] mr-6 outline-none"
            min="1"
            max="20"
            value="1"
          />
          <Button text="+ADD TO CART" size="xl" />
        </div>

        <!-- Checkout -->
        <div
          class="relative mb-5 before:absolute before:w-[460px] before:h-[1px] before:bg-blur-grey before:top-3 before:left-1/2 before:translate-x-[-50%] before:z-[-1]"
        >
          <span class="bg-white text-xl font-bold px-3"
            >Guaranteed Safe Checkout</span
          >
        </div>
        <img class="mx-auto" src="~/assets/images/details-payment.png" alt="" />
      </div>

      <!-- Nav Tab -->
      <div class="pt-[60px]">
        <ul class="flex justify-center border-b-[1px] border-blur-grey">
          <li
            class="cursor-pointer pb-[10px] mr-[50px]"
            :class="dtailTab === 'des' ? 'border-b-[2px] border-red-600' : ''"
            @click="handleChangeDtailTab('des')"
          >
            <p class="font-bold text-xl text-blur-grey">Description</p>
          </li>
          <li
            class="cursor-pointer pb-[10px] mr-[50px]"
            :class="dtailTab === 'cus' ? 'border-b-[2px] border-red-600' : ''"
            @click="handleChangeDtailTab('cus')"
          >
            <p class="font-bold text-xl text-blur-grey">Customer Previews(5)</p>
          </li>
          <li
            class="cursor-pointer pb-[10px] mr-[50px]"
            :class="dtailTab === 'add' ? 'border-b-[2px] border-red-600' : ''"
            @click="handleChangeDtailTab('add')"
          >
            <p class="font-bold text-xl text-blur-grey">
              Additional information
            </p>
          </li>
        </ul>

        <div class="pt-[35px]">
          <div v-if="dtailTab === 'des'">
            <p class="font-bold text-lg mb-6">
              Nam tempus turpis at metus scelerisque placerat nulla deumantos
              solicitud felis. Pellentesque diam dolor, elementum etos lobortis
              des mollis ut risus. Sedcus faucibus an sullamcorper mattis
              drostique des commodo pharetras loremos .
            </p>

            <div class="mb-[30px]">
              <h5 class="font-bold text-xl">Products Infomation</h5>
              <p class="text-[#3d3d3d]">
                A Pocket PC is a handheld computer, which features many of the
                same capabilities as a modern PC. These handy little devices
                allow individuals to retrieve and store e-mail messages, create
                a contact file, coordinate appointments, surf the internet,
                exchange text messages and more. Every product that is labeled
                as a Pocket PC must be accompanied with specific software to
                operate the unit and must feature a touchscreen and touchpad.
              </p>
              <p class="text-[#3d3d3d]">
                As is the case with any new technology product, the cost of a
                Pocket PC was substantial during it’s early release. For
                approximately $700.00, consumers could purchase one of
                top-of-the-line Pocket PCs in 2003. These days, customers are
                finding that prices have become much more reasonable now that
                the newness is wearing off. For approximately $350.00, a new
                Pocket PC can now be purchased.
              </p>
            </div>

            <div>
              <h5 class="font-bold text-xl">Material used</h5>
              <p class="text-[#3d3d3d]">
                Polyester is deemed lower quality due to its none natural
                quality’s. Made from synthetic materials, not natural like wool.
                Polyester suits become creased easily and are known for not
                being breathable. Polyester suits tend to have a shine to them
                compared to wool and cotton suits, this can make the suit look
                cheap. The texture of velvet is luxurious and breathable. Velvet
                is a great choice for dinner party jacket and can be worn all
                year round.
              </p>
            </div>
          </div>

          <div v-else-if="dtailTab === 'cus'">
            <h5 class="font-bold text-xl">Products Infomation</h5>
            <p class="text-[#3d3d3d]">
              A Pocket PC is a handheld computer, which features many of the
              same capabilities as a modern PC. These handy little devices allow
              individuals to retrieve and store e-mail messages, create a
              contact file, coordinate appointments, surf the internet, exchange
              text messages and more. Every product that is labeled as a Pocket
              PC must be accompanied with specific software to operate the unit
              and must feature a touchscreen and touchpad.
            </p>
            <p class="text-[#3d3d3d]">
              As is the case with any new technology product, the cost of a
              Pocket PC was substantial during it’s early release. For
              approximately $700.00, consumers could purchase one of
              top-of-the-line Pocket PCs in 2003. These days, customers are
              finding that prices have become much more reasonable now that the
              newness is wearing off. For approximately $350.00, a new Pocket PC
              can now be purchased.
            </p>
          </div>

          <div v-else>
            <p class="font-bold text-lg mb-6">
              Nam tempus turpis at metus scelerisque placerat nulla deumantos
              solicitud felis. Pellentesque diam dolor, elementum etos lobortis
              des mollis ut risus. Sedcus faucibus an sullamcorper mattis
              drostique des commodo pharetras loremos .
            </p>

            <div class="mb-[30px]">
              <h5 class="font-bold text-xl">Products Infomation</h5>
              <p class="text-[#3d3d3d]">
                A Pocket PC is a handheld computer, which features many of the
                same capabilities as a modern PC. These handy little devices
                allow individuals to retrieve and store e-mail messages, create
                a contact file, coordinate appointments, surf the internet,
                exchange text messages and more. Every product that is labeled
                as a Pocket PC must be accompanied with specific software to
                operate the unit and must feature a touchscreen and touchpad.
              </p>
              <p class="text-[#3d3d3d]">
                As is the case with any new technology product, the cost of a
                Pocket PC was substantial during it’s early release. For
                approximately $700.00, consumers could purchase one of
                top-of-the-line Pocket PCs in 2003. These days, customers are
                finding that prices have become much more reasonable now that
                the newness is wearing off. For approximately $350.00, a new
                Pocket PC can now be purchased.
              </p>
            </div>

            <div>
              <h5 class="font-bold text-xl">Material used</h5>
              <p class="text-[#3d3d3d]">
                Polyester is deemed lower quality due to its none natural
                quality’s. Made from synthetic materials, not natural like wool.
                Polyester suits become creased easily and are known for not
                being breathable. Polyester suits tend to have a shine to them
                compared to wool and cotton suits, this can make the suit look
                cheap. The texture of velvet is luxurious and breathable. Velvet
                is a great choice for dinner party jacket and can be worn all
                year round.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Related Product -->
      <div class="py-[60px]">
        <h2 class="font-bold text-3xl mx-auto mb-11 w-fit">Related Product</h2>
        <div class="grid grid-cols-12 gap-[30px]">
          <div class="col-span-3">
            <ProductItem/>
          </div>
          <div class="col-span-3">
            <ProductItem/>
          </div>
          <div class="col-span-3">
            <ProductItem/>
          </div>
          <div class="col-span-3">
            <ProductItem/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const dtailTab = ref("des");

function handleChangeDtailTab(value: string) {
  dtailTab.value = value;
}
</script>
