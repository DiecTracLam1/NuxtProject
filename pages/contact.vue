<template>
  <div class="mb-20">
    <div ref="mapDiv" class="h-[500px]"></div>
  </div>
  <div
    class="xs:max-w-[540px] sm:max-w-[720px] md:max-w-[960px] xl:max-w-[1170px] mx-auto my-[100px]"
  >
    <div class="grid grid-cols-12 gap-[30px]">
      <div class="col-span-12 sm:col-span-6">
        <p class="font-semibold text-red-500 tracking-widest mb-[15px]">
          INFORMATION
        </p>
        <div class="mb-10">
          <h2 class="font-bold text-5xl">Contact Us</h2>
          <p class="text-[#707070]">
            As you might expect of a company that began as a high-end interiors
            contractor, we pay strict attention.
          </p>
        </div>
        <div class="mb-10">
          <h2 class="font-bold text-2xl">America</h2>
          <p class="text-[#707070] m-0">
            195 E Parker Square Dr, Parker, CO 801
          </p>
          <p class="text-[#707070] m-0">+43 982-314-0958</p>
        </div>
        <div class="mb-10">
          <h2 class="font-bold text-2xl">France</h2>
          <p class="text-[#707070] m-0">109 Avenue Léon, 63 Clermont-Ferrand</p>
          <p class="text-[#707070] m-0">+12 345-423-9893</p>
        </div>
      </div>
      <div class="col-span-12 sm:col-span-6">
        <form action="">
          <div class="grid grid-cols-12 gap-[30px]">
            <div class="col-span-12 md:col-span-6">
              <InputText placeholder="Name" />
            </div>
            <div class="col-span-12 md:col-span-6">
              <InputText placeholder="Email" />
            </div>
            <div class="col-span-12">
              <a-textarea :rows="6" placeholder="Message" />
            </div>
            <div class="col-span-12">
              <Button size="xl" text="Send message" />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Loader } from "@googlemaps/js-api-loader";
const openedMarkerID = null;
const center = { lat: 48.8773406, lng: 2.327774 };
const markers = [
  {
    description: "Google France",
    id: "1",
    position: {
      lat: 48.8773406,
      lng: 2.327774,
    },
  },
];

const loader = new Loader({ apiKey: process.env.GOOGLE_MAP_API_KEY });
const mapDiv = ref(null)
onMounted(async () => {
  await loader.load();
  new google.maps.Map(mapDiv.value,{
    center:{
      lat:0,
      lng:0
    },
    zoom:7
  });
});
</script>
