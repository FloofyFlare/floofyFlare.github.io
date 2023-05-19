import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_0 } from './TopHeader-54ccae8d.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import 'vue-bundle-renderer/runtime';
import 'h3';
import 'devalue';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'klona';
import 'defu';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import './nuxt-link-6bdec6f5.mjs';
import 'unctx';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _imports_0 = "" + buildAssetsURL("Screen_Recording_20210906-145727_Flight.2567d6f1.mp4");
const _imports_1 = "" + buildAssetsURL("cardanoCode.4aeffd48.png");
const _imports_2 = "" + buildAssetsURL("webpage.d31b71e0.png");
const _imports_3 = "" + buildAssetsURL("snowQueen.5959918a.png");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TopHeader = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}><header>`);
  _push(ssrRenderComponent(_component_TopHeader, null, null, _parent));
  _push(`</header><body><div class="bg-amber-400 grid md:grid-cols-2 gap-4"><div class="mt-24 md:col-span-2"><div class="flex justify-center items-center p-10"><h1 class="text-3xl font-bold font-mono">My Projects</h1></div></div><div class="col-span-full p-10"><h1 class="font-mono text-xl pb-4">Paperplanes mobile app game (Unity)</h1><h2 class="font-mono text-lg pb-4"><a href=""></a></h2><video class="h-60" controls><source${ssrRenderAttr("src", _imports_0)} type="video/mp4"> Your browser does not support the video tag. </video><p class="p-5 font-mono"> This was a project to create a video game for mobile using Unity I made the art and source code on my own and learned a lot about game development through this endeavor. I also had a chance to gain depth experience with debugging during this project which I learned a lot including perseverance and how to solve problems efficiently. </p></div><div class="col-span-full p-10"><h1 class="font-mono text-xl pb-4">Cardano Smart Contract example</h1><h2 class="font-mono text-lg pb-4"><a href="https://github.com/FloofyFlare/Cardano-Loot-box-Smart-Contract">Github link</a></h2><img class="h-60"${ssrRenderAttr("src", _imports_1)}><p class="p-5 font-mono"> Making a smart contract was a challenging project I had to learn from scratch the Haskell programming language and the Plutus library at the same time while gaining knowledge on how the Cardano blockchain works. I learned how to navigate stack overflow and utilize rapidly changing documentation even at the early stages of a technology. This experience pointed out the flaws in my coding mentality by showing me how to focus on making a working product , not a perfect product. </p></div><div class="col-span-full p-10"><h1 class="font-mono text-xl pb-4">Chat website design (Website)</h1><h2 class="font-mono text-lg pb-4"><a href="https://em-chat.netlify.app/">Website link</a></h2><img class="h-60"${ssrRenderAttr("src", _imports_2)}><p class="p-5 font-mono"> Here I was tasked to create a webpage design that was my choose I enjoyed this project because I learned a lot about website design and why it&#39;s important. Here I learned how to choose a good color palette and what to do to make a good and simple webpage. </p></div><div class="col-span-full p-10"><h1 class="font-mono text-xl pb-4">Class Group project (Website)</h1><h2 class="font-mono text-lg pb-4"><a href="https://6466d1ea0d2f921d63a8e557--ubiquitous-bavarois-3dd7ae.netlify.app/index.html">Website link</a></h2><img class="h-60"${ssrRenderAttr("src", _imports_3)}><p class="p-5 font-mono"> This project was a team website creation challenge I learned a lot about myself and who I work best with in this project. I learned how to find people who are goal focused and how to work with those who are not. I now know how to be a leader from this experience who puts others first. </p></div></div></body></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const projects = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { projects as default };
//# sourceMappingURL=projects-ac22266a.mjs.map
