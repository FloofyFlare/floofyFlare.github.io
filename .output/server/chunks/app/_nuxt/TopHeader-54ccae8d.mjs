import { _ as __nuxt_component_0$1 } from './nuxt-link-6bdec6f5.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<nav${ssrRenderAttrs(mergeProps({ class: "bg-slate-100 h-20 w-full flex justify-center items-center" }, _attrs))}><div><h1 class="font-bold font-mono text-xl">Raymond&#39;s Web Portfolio</h1><div class="w-full flex gap-20">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/projects" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h1 class="text-start font-bold font-mono text-lg"${_scopeId}>My Projects</h1>`);
      } else {
        return [
          createVNode("h1", { class: "text-start font-bold font-mono text-lg" }, "My Projects")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h1 class="text-end font-bold font-mono text-lg"${_scopeId}>Home</h1>`);
      } else {
        return [
          createVNode("h1", { class: "text-end font-bold font-mono text-lg" }, "Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></nav>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TopHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=TopHeader-54ccae8d.mjs.map
