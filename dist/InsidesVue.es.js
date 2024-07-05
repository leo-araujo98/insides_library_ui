import { openBlock, createElementBlock, Fragment, createElementVNode, toDisplayString } from "vue";
var FirstTest_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1 = { class: "text" };
const _hoisted_2 = ["src"];
const _sfc_main = {
  __name: "FirstTest",
  props: {
    title: {
      type: String,
      default: "Oi tudo bem?"
    },
    image: {
      type: String,
      default: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2M2cDhhaWJjaGcxemszYzJjcWkxODI5ZmttOXlpYnB2NHZwYXp1ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l2R0cE5EqO3QHiCoU/giphy.webp"
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createElementVNode("div", _hoisted_1, toDisplayString(props.title), 1),
        createElementVNode("img", {
          src: props.image,
          alt: ""
        }, null, 8, _hoisted_2)
      ], 64);
    };
  }
};
var FirstTest = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0d7c66b0"]]);
export { FirstTest };
