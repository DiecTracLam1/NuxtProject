<template>
  <div
    class="xs:max-w-[540px] sm:max-w-[720px] md:max-w-[960px] xl:max-w-[1170px] px-[15px] w-full mx-auto h-full"
  >
    <div class="">
      <a-tabs v-model:activeKey="activeKey" centered>
        <a-tab-pane key="1" tab="Tab 1">
            <template #tab>
                <p class="mb-0">
                    
                </p>
            </template>
        </a-tab-pane>
        <a-tab-pane key="2" tab="Tab 2" force-render
          >Content of Tab Pane 2</a-tab-pane
        >
        <a-tab-pane key="3" tab="Tab 3">Content of Tab Pane 3</a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
const activeKey = ref("1");
</script>
