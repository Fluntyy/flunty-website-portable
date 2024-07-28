import { c as create_ssr_component, b as subscribe, e as escape, v as validate_component, g as getContext } from './ssr-CxO8iSnR.js';
import './exports-DuWZopOC.js';
import { C as Card } from './card-hxoSS0Sz.js';
import './index2-ClvTiG_4.js';

function get(key, parse = JSON.parse) {
  try {
    return parse(sessionStorage[key]);
  } catch {
  }
}
const SNAPSHOT_KEY = "sveltekit:snapshot";
const SCROLL_KEY = "sveltekit:scroll";
get(SCROLL_KEY) ?? {};
get(SNAPSHOT_KEY) ?? {};
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const css = {
  code: ".button.svelte-1nlwj0l{background-color:var(--button-color);padding:0.75rem 2rem;border-radius:18px;cursor:pointer;box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);font-size:1rem !important;text-align:center;text-shadow:none;text-decoration:none;transition:all 0.25s;margin-top:2rem}@media(max-width: 39rem){.card{width:100% !important;max-width:100%;margin:1.5rem}.header-container>.montserrat-bold.svelte-1nlwj0l{font-size:min(8.5vw, 2.5rem) !important}.card>.montserrat-semibold.svelte-1nlwj0l{font-size:min(3.5vw, 1.25rem) !important}}",
  map: `{"version":3,"file":"+error.svelte","sources":["+error.svelte"],"sourcesContent":["<script>\\n  import { page } from \\"$app/stores\\";\\n  import Card from \\"../components/card/card.svelte\\";\\n<\/script>\\n\\n<svelte:head>\\n  <title>{$page.status} - Flunty's Website</title>\\n</svelte:head>\\n\\n<Card width=\\"37.5rem\\" height=\\"22.5rem\\" style=\\"justify-content: center;\\">\\n  <div class=\\"header-container\\">\\n    <span\\n      class=\\"montserrat-bold\\"\\n      style=\\"font-size: 3rem; text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\\"\\n      >{$page.status} - {$page.error?.message}</span\\n    >\\n  </div>\\n  {#if $page.status === 404}\\n    <span\\n      class=\\"montserrat-semibold\\"\\n      style=\\"font-size: 1.5rem; text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\\"\\n      >The page you're looking for doesn't exist.</span\\n    >\\n  {:else}\\n    <span\\n      class=\\"montserrat-semibold\\"\\n      style=\\"font-size: 1.5rem; text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\\"\\n      >An error has encountered when loading this page.</span\\n    >\\n  {/if}\\n  <a href=\\"/\\" class=\\"button montserrat-bold\\">Back to Home</a>\\n</Card>\\n\\n<style>\\n  .button {\\n    background-color: var(--button-color);\\n    padding: 0.75rem 2rem;\\n    border-radius: 18px;\\n    cursor: pointer;\\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\\n    font-size: 1rem !important;\\n    text-align: center;\\n    text-shadow: none;\\n    text-decoration: none;\\n    transition: all 0.25s;\\n    margin-top: 2rem;\\n  }\\n\\n  @media (max-width: 39rem) {\\n    :global(.card) {\\n      width: 100% !important;\\n      max-width: 100%;\\n      margin: 1.5rem;\\n    }\\n\\n    :global(.header-container) > .montserrat-bold {\\n      font-size: min(8.5vw, 2.5rem) !important;\\n    }\\n\\n    :global(.card) > .montserrat-semibold {\\n      font-size: min(3.5vw, 1.25rem) !important;\\n    }\\n  }</style>\\n"],"names":[],"mappings":"AAkCE,sBAAQ,CACN,gBAAgB,CAAE,IAAI,cAAc,CAAC,CACrC,OAAO,CAAE,OAAO,CAAC,IAAI,CACrB,aAAa,CAAE,IAAI,CACnB,MAAM,CAAE,OAAO,CACf,UAAU,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAC3C,SAAS,CAAE,IAAI,CAAC,UAAU,CAC1B,UAAU,CAAE,MAAM,CAClB,WAAW,CAAE,IAAI,CACjB,eAAe,CAAE,IAAI,CACrB,UAAU,CAAE,GAAG,CAAC,KAAK,CACrB,UAAU,CAAE,IACd,CAEA,MAAO,YAAY,KAAK,CAAE,CAChB,KAAO,CACb,KAAK,CAAE,IAAI,CAAC,UAAU,CACtB,SAAS,CAAE,IAAI,CACf,MAAM,CAAE,MACV,CAEQ,iBAAkB,CAAG,+BAAiB,CAC5C,SAAS,CAAE,IAAI,KAAK,CAAC,CAAC,MAAM,CAAC,CAAC,UAChC,CAEQ,KAAM,CAAG,mCAAqB,CACpC,SAAS,CAAE,IAAI,KAAK,CAAC,CAAC,OAAO,CAAC,CAAC,UACjC,CACF"}`
};
const Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1wp7hag_START -->${$$result.title = `<title>${escape($page.status)} - Flunty&#39;s Website</title>`, ""}<!-- HEAD_svelte-1wp7hag_END -->`, ""} ${validate_component(Card, "Card").$$render(
    $$result,
    {
      width: "37.5rem",
      height: "22.5rem",
      style: "justify-content: center;"
    },
    {},
    {
      default: () => {
        return `<div class="header-container"><span class="montserrat-bold svelte-1nlwj0l" style="font-size: 3rem; text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);">${escape($page.status)} - ${escape($page.error?.message)}</span></div> ${$page.status === 404 ? `<span class="montserrat-semibold svelte-1nlwj0l" style="font-size: 1.5rem; text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);" data-svelte-h="svelte-1fpoikn">The page you&#39;re looking for doesn&#39;t exist.</span>` : `<span class="montserrat-semibold svelte-1nlwj0l" style="font-size: 1.5rem; text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);" data-svelte-h="svelte-lpi00b">An error has encountered when loading this page.</span>`} <a href="/" class="button montserrat-bold svelte-1nlwj0l" data-svelte-h="svelte-tqvca0">Back to Home</a>`;
      }
    }
  )}`;
});

export { Error$1 as default };
//# sourceMappingURL=_error.svelte-CfWQcBDq.js.map
