import primary_button from "./components/buttons/primary_button.vue";

export { primary_button };

function install(Vue) {
  Vue.component("primary_button", primary_button);
}

export default { install: install };

// const componentsList = components?.default;
// const insidesComponents = {
//   install(Vue) {
//     Object.keys(componentsList).forEach((name) => {
//       Vue.component(name, componentsList[name]);
//     });
//   },
// };

// export default insidesComponents;
