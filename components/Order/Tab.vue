<template>
  <a-tabs :activeKey="activeKey" centered @change="onChangeTabs">
    <a-tab-pane key="1">
      <template #tab>
        <span class="text-base p-4"> All </span>
      </template>
    </a-tab-pane>
    <a-tab-pane key="2" force-render>
      <template #tab>
        <span class="text-base p-4"> To Confirm </span>
      </template>
    </a-tab-pane>
    <a-tab-pane key="3"
      ><template #tab>
        <span class="text-base p-4"> To Receive </span>
      </template>
    </a-tab-pane>
    <a-tab-pane key="4"
      ><template #tab>
        <span class="text-base p-4"> Completed </span>
      </template>
    </a-tab-pane>
    <a-tab-pane key="5"
      ><template #tab>
        <span class="text-base p-4"> Cancelled </span>
      </template>
    </a-tab-pane>
  </a-tabs>
</template>
<script lang="ts" setup>
import { PropType } from 'nuxt/dist/app/compat/capi';

defineProps({
  activeKey: {
    type: String as PropType<string>,
    default: "1",
  },
});

const emit = defineEmits(['changeTabs']);
const onChangeTabs = (key: string) => {
    emit("changeTabs" , key);
};
</script>
