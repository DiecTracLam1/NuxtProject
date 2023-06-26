<template>
  <div class="pt-[60px]">
    <ul class="flex flex-wrap justify-center border-b-[1px] border-blur-grey">
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
        <p class="font-bold text-xl text-blur-grey">Additional information</p>
      </li>
    </ul>

    <div class="pt-[35px]">
      <div v-if="dtailTab === 'des'">
        <p class="font-bold text-lg mb-6">
          Nam tempus turpis at metus scelerisque placerat nulla deumantos
          solicitud felis. Pellentesque diam dolor, elementum etos lobortis des
          mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des
          commodo pharetras loremos .
        </p>

        <div class="mb-[30px]">
          <h5 class="font-bold text-xl">Products Infomation</h5>
          <p class="text-[#3d3d3d]">
            A Pocket PC is a handheld computer, which features many of the same
            capabilities as a modern PC. These handy little devices allow
            individuals to retrieve and store e-mail messages, create a contact
            file, coordinate appointments, surf the internet, exchange text
            messages and more. Every product that is labeled as a Pocket PC must
            be accompanied with specific software to operate the unit and must
            feature a touchscreen and touchpad.
          </p>
          <p class="text-[#3d3d3d]">
            As is the case with any new technology product, the cost of a Pocket
            PC was substantial during it’s early release. For approximately
            $700.00, consumers could purchase one of top-of-the-line Pocket PCs
            in 2003. These days, customers are finding that prices have become
            much more reasonable now that the newness is wearing off. For
            approximately $350.00, a new Pocket PC can now be purchased.
          </p>
        </div>

        <div>
          <h5 class="font-bold text-xl">Material used</h5>
          <p class="text-[#3d3d3d]">
            Polyester is deemed lower quality due to its none natural quality’s.
            Made from synthetic materials, not natural like wool. Polyester
            suits become creased easily and are known for not being breathable.
            Polyester suits tend to have a shine to them compared to wool and
            cotton suits, this can make the suit look cheap. The texture of
            velvet is luxurious and breathable. Velvet is a great choice for
            dinner party jacket and can be worn all year round.
          </p>
        </div>
      </div>

      <div v-else-if="dtailTab === 'cus'">
        <h5 class="font-bold text-xl">Products Infomation</h5>
        <p class="text-[#3d3d3d]">
          A Pocket PC is a handheld computer, which features many of the same
          capabilities as a modern PC. These handy little devices allow
          individuals to retrieve and store e-mail messages, create a contact
          file, coordinate appointments, surf the internet, exchange text
          messages and more. Every product that is labeled as a Pocket PC must
          be accompanied with specific software to operate the unit and must
          feature a touchscreen and touchpad.
        </p>
        <p class="text-[#3d3d3d]">
          As is the case with any new technology product, the cost of a Pocket
          PC was substantial during it’s early release. For approximately
          $700.00, consumers could purchase one of top-of-the-line Pocket PCs in
          2003. These days, customers are finding that prices have become much
          more reasonable now that the newness is wearing off. For approximately
          $350.00, a new Pocket PC can now be purchased.
        </p>
      </div>

      <div v-else>
        <p class="font-bold text-lg mb-6">
          Nam tempus turpis at metus scelerisque placerat nulla deumantos
          solicitud felis. Pellentesque diam dolor, elementum etos lobortis des
          mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des
          commodo pharetras loremos .
        </p>

        <div class="mb-[30px]">
          <h5 class="font-bold text-xl">Products Infomation</h5>
          <p class="text-[#3d3d3d]">
            A Pocket PC is a handheld computer, which features many of the same
            capabilities as a modern PC. These handy little devices allow
            individuals to retrieve and store e-mail messages, create a contact
            file, coordinate appointments, surf the internet, exchange text
            messages and more. Every product that is labeled as a Pocket PC must
            be accompanied with specific software to operate the unit and must
            feature a touchscreen and touchpad.
          </p>
          <p class="text-[#3d3d3d]">
            As is the case with any new technology product, the cost of a Pocket
            PC was substantial during it’s early release. For approximately
            $700.00, consumers could purchase one of top-of-the-line Pocket PCs
            in 2003. These days, customers are finding that prices have become
            much more reasonable now that the newness is wearing off. For
            approximately $350.00, a new Pocket PC can now be purchased.
          </p>
        </div>

        <div>
          <h5 class="font-bold text-xl">Material used</h5>
          <p class="text-[#3d3d3d]">
            Polyester is deemed lower quality due to its none natural quality’s.
            Made from synthetic materials, not natural like wool. Polyester
            suits become creased easily and are known for not being breathable.
            Polyester suits tend to have a shine to them compared to wool and
            cotton suits, this can make the suit look cheap. The texture of
            velvet is luxurious and breathable. Velvet is a great choice for
            dinner party jacket and can be worn all year round.
          </p>
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
