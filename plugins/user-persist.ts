import { PiniaPluginContext } from "pinia";

export default defineNuxtPlugin(({ $pinia }) => {
  return {
    provide: {
      userPluxgin: () => $pinia.use(userPiniaPlugin),
    },
  };
});

async function userPiniaPlugin(context: PiniaPluginContext) {
  if (context.store.$id === "User") {
    if (!process.server) {
      const defaulUser = localStorage.getItem(context.store.$id);
      context.store.$state.data = defaulUser;
      console.log("In Client" , context.store);
    }
  }
  console.log("UserPluxgin", context.store);
  context.store.$subscribe((mutations, state) => {
    console.log(mutations);
  });
}
