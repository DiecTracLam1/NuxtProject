<template>
  <div class="mb-20 relative h-[500px]">
    <MapboxMap
      map-id="location"
      :options="{
        style: 'mapbox://styles/mapbox/streets-v9',
        center: [106.660172, 10.762622],
        zoom: 12,
        essential: true,
      }"
    >
      <MapboxSource
        source-id="places"
        :source="{
          type: 'geojson',
          data: stores,
        }"
      />

      <MapboxLayer
        :layer="{
          source: 'places',
          id: 'places',
          type: 'circle',
          paint: color,
        }"
      />

      <MapboxGeolocateControl position="top-right" trackUserLocation />
    </MapboxMap>
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
        <FormContact />
      </div>
    </div>
  </div>
</template>
<script setup>
import "mapbox-gl/dist/mapbox-gl.css";

const stores = {
  type: "Feature",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [106.6257, 10.822],
      },
      properties: {
        description:
          "<strong>Capital Pride Parade</strong><p>The annual Capital Pride Parade makes its way through Dupont this Saturday. 4:30 p.m. Free.</p>",
      },
    },
  ],
};

const color = {
  "circle-color": "#4264fb",
  "circle-radius": 6,
  "circle-stroke-width": 2,
  "circle-stroke-color": "#ffffff",
};
</script>
