import { openBlock as r, createElementBlock as a, Fragment as i, createElementVNode as s, toDisplayString as l } from "vue";
const p = (t, e) => {
  const c = t.__vccOpts || t;
  for (const [o, n] of e)
    c[o] = n;
  return c;
}, m = { class: "text" }, _ = ["src"], d = {
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
  setup(t) {
    const e = t;
    return (c, o) => (r(), a(i, null, [
      s("div", m, l(e.title), 1),
      s("img", {
        src: e.image,
        alt: ""
      }, null, 8, _)
    ], 64));
  }
}, h = /* @__PURE__ */ p(d, [["__scopeId", "data-v-0d7c66b0"]]);
export {
  h as FirstTest
};
