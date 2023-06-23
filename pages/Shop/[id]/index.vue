<template>
  <div>
    <div class="bg-[#f6f6f6]">
      <div
        class="xs:max-w-[540px] sm:max-w-[720px] md:max-w-[960px] xl:max-w-[1170px] px-[15px] w-full mx-auto"
      >
        <div class="py-10">
          <div class="text-center">
            <p class="text-sm mb-[30px]">Home > maha > detail</p>
          </div>

          <div class="grid grid-cols-12 sm:gap-[30px]">
            <div class="sm:col-span-4 col-span-12">
              <ul
                class="flex sm:flex-col flex-row sm:items-center justify-center"
              >
                <li v-for="image in product.image" class="cursor-pointer mb-2">
                  <div @click="onChangeBigImg(image)" class="h-[120px]">
                    <img class="w-full h-full" :src="image" alt="" />
                  </div>
                </li>
              </ul>
            </div>
            <div class="sm:col-span-8 col-span-12">
              <div class="mx-auto sm:w-full w-fit h-[533px]">
                <img class="h-full" :src="bigImage" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="xs:max-w-[540px] sm:max-w-[720px] md:max-w-[960px] xl:max-w-[1170px] px-[15px] w-full mx-auto"
    >
      <div class="mt-[100px] text-center">
        <h4 class="font-bold leading-7 text-2xl">{{ product.name }}</h4>

        <!-- Rate & Favorite -->
        <div class="flex flex-col xs:flex-row justify-center items-center my-2">
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
        <div class="flex justify-center items-center my-4">
          <p class="font-bold leading-9 text-3xl mr-3 my-0">
            ${{ product.salePrice }}
          </p>
          <p class="text-xl text-blur-grey line-through my-0">
            ${{ product.price }}
          </p>
        </div>

        <!-- Description -->
        <p class="text-base leading-7 mb-6">
          {{ product.description }}
        </p>

        <FormDetail/>

        <!-- Checkout -->
        <div
          class="relative mb-5 before:absolute xs:before:w-[460px] before:w-[230px] before:h-[1px] before:bg-blur-grey before:top-3 before:left-1/2 before:translate-x-[-50%] before:z-[-1]"
        >
          <span class="bg-white xs:text-xl text-base font-bold px-3"
            >Guaranteed Safe Checkout</span
          >
        </div>
        <img class="mx-auto" src="~/assets/images/details-payment.png" alt="" />
      </div>

      <!-- Nav Tab -->
      <div class="pt-[60px]">
        <ul
          class="flex flex-wrap justify-center border-b-[1px] border-blur-grey"
        >
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
        <!-- <div class="grid grid-cols-12 xs:gap-[30px]">
          <div
            class="xs:col-span-6 sm:col-span-6 md:col-span-4 xl:col-span-3 col-span-12"
          >
            <ProductItem />
          </div>
          <div
            class="xs:col-span-6 sm:col-span-6 md:col-span-4 xl:col-span-3 col-span-12"
          >
            <ProductItem />
          </div>
          <div
            class="xs:col-span-6 sm:col-span-6 md:col-span-4 xl:col-span-3 col-span-12"
          >
            <ProductItem />
          </div>
          <div
            class="xs:col-span-6 sm:col-span-6 md:col-span-4 xl:col-span-3 col-span-12"
          >
            <ProductItem />
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const dtailTab = ref("des");

function handleChangeDtailTab(value: string) {
  dtailTab.value = value;
}

// get product detail
const product: any = ref(null);
const route = useRoute();

const { data } = await useAsyncData("productDetail", () =>
  $fetch(`/api/product/${route.params.id}`)
);
product.value = data?.value.data;

// set big image
const bigImage = ref(product.value.image[0]);
function onChangeBigImg(value: string) {
  bigImage.value = value;
}

// form
function onSubmit(event: any) {
  event.preventDefault();
  console.log(event.value);
}
</script>
