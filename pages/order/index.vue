<template>
  <div
    class="xs:max-w-[540px] sm:max-w-[720px] md:max-w-[960px] xl:max-w-[1170px] px-[15px] w-full mx-auto h-full"
  >
    <div class="">
      <a-tabs v-model:activeKey="activeKey" centered>
        <a-tab-pane key="1">
          <template #tab>
            <span class="text-base p-4"> All </span>
          </template>
        </a-tab-pane>
        <a-tab-pane key="2" force-render>
          <template #tab>
            <span class="text-base p-4"> Confirm </span>
          </template>
        </a-tab-pane>
        <a-tab-pane key="3" tab="Tab 3">Content of Tab Pane 3</a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
const activeKey = ref("1");
</script>
