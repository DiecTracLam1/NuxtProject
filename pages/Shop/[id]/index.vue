<template>
  <div>
    <div class="bg-[#F3F2EE]">
      <div class="xl:max-w-[1170px] mx-auto">
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

    <div class="xl:max-w-[1170px] mx-auto">
      <div class="mt-[100px] text-center">
        <h4 class="">Hooded thermal anorak</h4>
        <div class="flex justify-center items-center">
          <a-rate />
          <span>-</span>
          <span>
            <Icon
              class="text-lg hover:cursor-pointer"
              name="uil:heart"
              color="black"
            />
            ADD TO WISHLIST
          </span>
        </div>

        <div class="flex justify-center items-center">
          <p class="">$270.00</p>
          <p class="">70.00</p>
        </div>

        <p>
          Coat with quilted lining and an adjustable hood. Featuring long
          sleeves with adjustable cuff tabs, adjustable asymmetric hem with
          elastic side tabs and a front zip fastening with placket
        </p>

        <div class="flex justify-center items-center">
          <div >
            <span>Size: </span>
            <ul>
              <li></li>
            </ul>
          </div>

          <div>
            <span class="">Color: </span>
            <ul></ul>
          </div>
        </div>

        <div class="flex justify-center items-center">
          <input type="number">
          <button>ADD TO CART</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const value = ref<number>(2);
    return {
      value,
    };
  },
});
</script>
