import { c as create_ssr_component, b as subscribe, e as escape } from './ssr-CxO8iSnR.js';
import { w as writable } from './index2-ClvTiG_4.js';

const fade = writable(0);
const opacity = writable(1);
const css = {
  code: ".card-container.svelte-1hfed8k{position:absolute;width:100%;height:100%;display:flex;justify-content:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;user-select:none}.card.svelte-1hfed8k{display:flex;flex-direction:column;gap:0.5rem;align-items:center;background:linear-gradient(\r\n      135deg,\r\n      rgba(0, 0, 0, 0.25) 0%,\r\n      rgba(0, 0, 0, 0.15) 100%\r\n    );border:solid 4px transparent;border-radius:4rem;box-shadow:0px 4px 24px rgba(0, 0, 0, 0.25);-webkit-backdrop-filter:blur(24px);backdrop-filter:blur(24px);background-clip:padding-box, border-box;background-origin:padding-box, border-box;transition:all 0.4s ease}",
  map: `{"version":3,"file":"card.svelte","sources":["card.svelte"],"sourcesContent":["<script>\\r\\n  import { fade, opacity } from '$lib/stores.js';\\r\\n  import { scale } from \\"svelte/transition\\";\\r\\n  export let width;\\r\\n  export let height;\\r\\n  export let style;\\r\\n<\/script>\\r\\n\\r\\n<div class=\\"card-container\\">\\r\\n  <div class=\\"card\\" style=\\"width: {width}; height: {height}; {style};\\" class:fade={$fade == 1} class:opacity={$opacity == 1} transition:scale>\\r\\n    <slot />\\r\\n  </div>\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n  .card-container {\\r\\n    position: absolute;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    -webkit-user-select: none;\\r\\n       -moz-user-select: none;\\r\\n            user-select: none;\\r\\n  }\\r\\n\\r\\n  .card {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    gap: 0.5rem;\\r\\n    align-items: center;\\r\\n    background: linear-gradient(\\r\\n      135deg,\\r\\n      rgba(0, 0, 0, 0.25) 0%,\\r\\n      rgba(0, 0, 0, 0.15) 100%\\r\\n    );\\r\\n    border: solid 4px transparent;\\r\\n    border-radius: 4rem;\\r\\n    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.25);\\r\\n    -webkit-backdrop-filter: blur(24px);\\r\\n            backdrop-filter: blur(24px);\\r\\n    background-clip: padding-box, border-box;\\r\\n    background-origin: padding-box, border-box;\\r\\n    transition: all 0.4s ease;\\r\\n  }</style>\\r\\n"],"names":[],"mappings":"AAeE,8BAAgB,CACd,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,mBAAmB,CAAE,IAAI,CACtB,gBAAgB,CAAE,IAAI,CACjB,WAAW,CAAE,IACvB,CAEA,oBAAM,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,MAAM,CACX,WAAW,CAAE,MAAM,CACnB,UAAU,CAAE;AAChB,MAAM,MAAM,CAAC;AACb,MAAM,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,EAAE,CAAC;AAC7B,MAAM,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,IAAI;AAC9B,KAAK,CACD,MAAM,CAAE,KAAK,CAAC,GAAG,CAAC,WAAW,CAC7B,aAAa,CAAE,IAAI,CACnB,UAAU,CAAE,GAAG,CAAC,GAAG,CAAC,IAAI,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAC5C,uBAAuB,CAAE,KAAK,IAAI,CAAC,CAC3B,eAAe,CAAE,KAAK,IAAI,CAAC,CACnC,eAAe,CAAE,WAAW,CAAC,CAAC,UAAU,CACxC,iBAAiB,CAAE,WAAW,CAAC,CAAC,UAAU,CAC1C,UAAU,CAAE,GAAG,CAAC,IAAI,CAAC,IACvB"}`
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $fade, $$unsubscribe_fade;
  let $opacity, $$unsubscribe_opacity;
  $$unsubscribe_fade = subscribe(fade, (value) => $fade = value);
  $$unsubscribe_opacity = subscribe(opacity, (value) => $opacity = value);
  let { width } = $$props;
  let { height } = $$props;
  let { style } = $$props;
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  $$result.css.add(css);
  $$unsubscribe_fade();
  $$unsubscribe_opacity();
  return `<div class="card-container svelte-1hfed8k"><div class="${[
    "card svelte-1hfed8k",
    ($fade == 1 ? "fade" : "") + " " + ($opacity == 1 ? "opacity" : "")
  ].join(" ").trim()}" style="${"width: " + escape(width, true) + "; height: " + escape(height, true) + "; " + escape(style, true) + ";"}">${slots.default ? slots.default({}) : ``}</div> </div>`;
});

export { Card as C };
//# sourceMappingURL=card-hxoSS0Sz.js.map
