import { c as create_ssr_component, v as validate_component, a as add_attribute } from './ssr-CxO8iSnR.js';

const css$1 = {
  code: ".wrapper.svelte-3zrbc7{position:fixed;top:0;left:0;width:100%;height:100%;overflow:hidden;z-index:-1}.background.svelte-3zrbc7{position:absolute;top:0;left:50%;width:max(1400px, 100%);transform:translateX(-50%);height:100%;background-image:var(--background-gradient);pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}@keyframes svelte-3zrbc7-m1{from{bottom:-100%}to{bottom:0}}@keyframes svelte-3zrbc7-m2{from{bottom:-110%}to{bottom:0}}@keyframes svelte-3zrbc7-m3{from{bottom:-120%}to{bottom:0}}@keyframes svelte-3zrbc7-m4{from{bottom:-130%}to{bottom:0}}.mountain.svelte-3zrbc7{position:absolute;bottom:0;width:100%;transition:top 0.25s,\r\n      bottom 0.25s;vertical-align:middle}.mountain.svelte-3zrbc7:nth-of-type(1){animation:svelte-3zrbc7-m1 1s cubic-bezier(0.27, 0.1, 0.19, 0.99);content:var(--m1)}.mountain.svelte-3zrbc7:nth-of-type(2){animation:svelte-3zrbc7-m2 1s cubic-bezier(0.27, 0.1, 0.19, 0.99);content:var(--m2)}.mountain.svelte-3zrbc7:nth-of-type(3){animation:svelte-3zrbc7-m3 1s cubic-bezier(0.27, 0.1, 0.19, 0.99);content:var(--m3)}.mountain.svelte-3zrbc7:nth-of-type(4){animation:svelte-3zrbc7-m4 1s cubic-bezier(0.27, 0.1, 0.19, 0.99);content:var(--m4)}",
  map: '{"version":3,"file":"background.svelte","sources":["background.svelte"],"sourcesContent":["<div class=\\"wrapper\\">\\r\\n  <div class=\\"background\\">\\r\\n    <img src=\\"mountain/4.svg\\" alt=\\"\\" class=\\"mountain\\" />\\r\\n    <img src=\\"mountain/3.svg\\" alt=\\"\\" class=\\"mountain\\" />\\r\\n    <img src=\\"mountain/2.svg\\" alt=\\"\\" class=\\"mountain\\" />\\r\\n    <img src=\\"mountain/1.svg\\" alt=\\"\\" class=\\"mountain\\" />\\r\\n  </div>\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n  .wrapper {\\r\\n    position: fixed;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    overflow: hidden;\\r\\n    z-index: -1;\\r\\n  }\\r\\n\\r\\n  .background {\\r\\n    position: absolute;\\r\\n    top: 0;\\r\\n    left: 50%;\\r\\n    width: max(1400px, 100%);\\r\\n    transform: translateX(-50%);\\r\\n    height: 100%;\\r\\n    background-image: var(--background-gradient);\\r\\n    pointer-events: none;\\r\\n    -webkit-user-select: none;\\r\\n       -moz-user-select: none;\\r\\n            user-select: none;\\r\\n  }\\r\\n\\r\\n  @keyframes m1 {\\r\\n    from {\\r\\n      bottom: -100%;\\r\\n    }\\r\\n    to {\\r\\n      bottom: 0;\\r\\n    }\\r\\n  }\\r\\n\\r\\n  @keyframes m2 {\\r\\n    from {\\r\\n      bottom: -110%;\\r\\n    }\\r\\n    to {\\r\\n      bottom: 0;\\r\\n    }\\r\\n  }\\r\\n\\r\\n  @keyframes m3 {\\r\\n    from {\\r\\n      bottom: -120%;\\r\\n    }\\r\\n    to {\\r\\n      bottom: 0;\\r\\n    }\\r\\n  }\\r\\n\\r\\n  @keyframes m4 {\\r\\n    from {\\r\\n      bottom: -130%;\\r\\n    }\\r\\n    to {\\r\\n      bottom: 0;\\r\\n    }\\r\\n  }\\r\\n\\r\\n  .mountain {\\r\\n    position: absolute;\\r\\n    bottom: 0;\\r\\n    width: 100%;\\r\\n    transition:\\r\\n      top 0.25s,\\r\\n      bottom 0.25s;\\r\\n    vertical-align: middle;\\r\\n  }\\r\\n\\r\\n  .mountain:nth-of-type(1) {\\r\\n    animation: m1 1s cubic-bezier(0.27, 0.1, 0.19, 0.99);\\r\\n    content: var(--m1);\\r\\n  }\\r\\n  .mountain:nth-of-type(2) {\\r\\n    animation: m2 1s cubic-bezier(0.27, 0.1, 0.19, 0.99);\\r\\n    content: var(--m2);\\r\\n  }\\r\\n  .mountain:nth-of-type(3) {\\r\\n    animation: m3 1s cubic-bezier(0.27, 0.1, 0.19, 0.99);\\r\\n    content: var(--m3);\\r\\n  }\\r\\n  .mountain:nth-of-type(4) {\\r\\n    animation: m4 1s cubic-bezier(0.27, 0.1, 0.19, 0.99);\\r\\n    content: var(--m4);\\r\\n  }</style>\\r\\n"],"names":[],"mappings":"AAUE,sBAAS,CACP,QAAQ,CAAE,KAAK,CACf,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,QAAQ,CAAE,MAAM,CAChB,OAAO,CAAE,EACX,CAEA,yBAAY,CACV,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,GAAG,CACT,KAAK,CAAE,IAAI,MAAM,CAAC,CAAC,IAAI,CAAC,CACxB,SAAS,CAAE,WAAW,IAAI,CAAC,CAC3B,MAAM,CAAE,IAAI,CACZ,gBAAgB,CAAE,IAAI,qBAAqB,CAAC,CAC5C,cAAc,CAAE,IAAI,CACpB,mBAAmB,CAAE,IAAI,CACtB,gBAAgB,CAAE,IAAI,CACjB,WAAW,CAAE,IACvB,CAEA,WAAW,gBAAG,CACZ,IAAK,CACH,MAAM,CAAE,KACV,CACA,EAAG,CACD,MAAM,CAAE,CACV,CACF,CAEA,WAAW,gBAAG,CACZ,IAAK,CACH,MAAM,CAAE,KACV,CACA,EAAG,CACD,MAAM,CAAE,CACV,CACF,CAEA,WAAW,gBAAG,CACZ,IAAK,CACH,MAAM,CAAE,KACV,CACA,EAAG,CACD,MAAM,CAAE,CACV,CACF,CAEA,WAAW,gBAAG,CACZ,IAAK,CACH,MAAM,CAAE,KACV,CACA,EAAG,CACD,MAAM,CAAE,CACV,CACF,CAEA,uBAAU,CACR,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,CAAC,CACT,KAAK,CAAE,IAAI,CACX,UAAU,CACR,GAAG,CAAC,KAAK,CAAC;AAChB,MAAM,MAAM,CAAC,KAAK,CACd,cAAc,CAAE,MAClB,CAEA,uBAAS,aAAa,CAAC,CAAE,CACvB,SAAS,CAAE,gBAAE,CAAC,EAAE,CAAC,aAAa,IAAI,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,CAAC,IAAI,CAAC,CACpD,OAAO,CAAE,IAAI,IAAI,CACnB,CACA,uBAAS,aAAa,CAAC,CAAE,CACvB,SAAS,CAAE,gBAAE,CAAC,EAAE,CAAC,aAAa,IAAI,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,CAAC,IAAI,CAAC,CACpD,OAAO,CAAE,IAAI,IAAI,CACnB,CACA,uBAAS,aAAa,CAAC,CAAE,CACvB,SAAS,CAAE,gBAAE,CAAC,EAAE,CAAC,aAAa,IAAI,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,CAAC,IAAI,CAAC,CACpD,OAAO,CAAE,IAAI,IAAI,CACnB,CACA,uBAAS,aAAa,CAAC,CAAE,CACvB,SAAS,CAAE,gBAAE,CAAC,EAAE,CAAC,aAAa,IAAI,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,CAAC,IAAI,CAAC,CACpD,OAAO,CAAE,IAAI,IAAI,CACnB"}'
};
const Background = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="wrapper svelte-3zrbc7" data-svelte-h="svelte-tnoq1e"><div class="background svelte-3zrbc7"><img src="mountain/4.svg" alt="" class="mountain svelte-3zrbc7"> <img src="mountain/3.svg" alt="" class="mountain svelte-3zrbc7"> <img src="mountain/2.svg" alt="" class="mountain svelte-3zrbc7"> <img src="mountain/1.svg" alt="" class="mountain svelte-3zrbc7"></div> </div>`;
});
const css = {
  code: ".theme-button.svelte-1ovoe7i{position:absolute;top:1.5rem;right:1.5rem;display:flex;justify-content:center;align-items:center;flex-direction:column;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:3.5rem;height:3.5rem;background:linear-gradient(\r\n      135deg,\r\n      rgba(0, 0, 0, 0.25) 0%,\r\n      rgba(0, 0, 0, 0.15) 100%\r\n    );border:solid 4px transparent;border-radius:1rem;box-shadow:0px 4px 24px rgba(0, 0, 0, 0.25);-webkit-backdrop-filter:blur(24px);backdrop-filter:blur(24px);background-clip:padding-box, border-box;background-origin:padding-box, border-box;animation:fade 2s;z-index:2}.theme-icon.svelte-1ovoe7i{pointer-events:none;width:2rem;height:2rem}",
  map: '{"version":3,"file":"theme_button.svelte","sources":["theme_button.svelte"],"sourcesContent":["<script>\\r\\n  import { onMount } from \\"svelte\\";\\r\\n\\r\\n  let favicon = \\"/favicon.svg\\";\\r\\n  let theme = \\"light\\";\\r\\n  let icon = \\"/moon.svg\\";\\r\\n  let themecolor = \\"#5e7c92\\";\\r\\n\\r\\n  const toggleTheme = () => {\\r\\n    theme = theme === \\"dark\\" ? \\"light\\" : \\"dark\\";\\r\\n    document.documentElement.className = theme;\\r\\n    saveTheme();\\r\\n    changeIcon();\\r\\n    changeFavicon();\\r\\n    changeThemeColor();\\r\\n  };\\r\\n\\r\\n  const updateTheme = () => {\\r\\n    const prefersMode = window.matchMedia(\\r\\n      \\"(prefers-color-scheme: dark)\\"\\r\\n    ).matches;\\r\\n    const savedTheme = localStorage.getItem(\\"theme\\");\\r\\n    theme = savedTheme || (prefersMode ? \\"dark\\" : \\"light\\");\\r\\n    document.documentElement.className = theme;\\r\\n    changeIcon();\\r\\n    changeFavicon();\\r\\n    changeThemeColor();\\r\\n  };\\r\\n\\r\\n  const changeThemeColor = () => {\\r\\n    themecolor = theme === \\"dark\\" ? \\"#1a2730\\" : \\"#5e7c92\\";\\r\\n  };\\r\\n\\r\\n  const changeIcon = () => {\\r\\n    icon = theme === \\"dark\\" ? \\"/sun.svg\\" : \\"/moon.svg\\";\\r\\n  };\\r\\n\\r\\n  const changeFavicon = () => {\\r\\n    favicon = theme === \\"dark\\" ? \\"/favicon_dark.svg\\" : \\"/favicon.svg\\";\\r\\n  };\\r\\n\\r\\n  const saveTheme = () => {\\r\\n    localStorage.setItem(\\"theme\\", theme);\\r\\n  };\\r\\n\\r\\n  onMount(updateTheme);\\r\\n<\/script>\\r\\n\\r\\n<svelte:head>\\r\\n  <link rel=\\"icon\\" href={favicon} />\\r\\n  <meta name=\\"theme-color\\" content={themecolor}>\\r\\n</svelte:head>\\r\\n\\r\\n<button type=\\"button\\" on:click={toggleTheme} class=\\"theme-button\\" tabindex=\\"0\\">\\r\\n  <img src={icon} alt=\\"Toggle Theme\\" class=\\"theme-icon\\" draggable=\\"false\\" />\\r\\n</button>\\r\\n\\r\\n<style>\\r\\n  .theme-button {\\r\\n    position: absolute;\\r\\n    top: 1.5rem;\\r\\n    right: 1.5rem;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    flex-direction: column;\\r\\n    cursor: pointer;\\r\\n    -webkit-user-select: none;\\r\\n       -moz-user-select: none;\\r\\n            user-select: none;\\r\\n    width: 3.5rem;\\r\\n    height: 3.5rem;\\r\\n    background: linear-gradient(\\r\\n      135deg,\\r\\n      rgba(0, 0, 0, 0.25) 0%,\\r\\n      rgba(0, 0, 0, 0.15) 100%\\r\\n    );\\r\\n    border: solid 4px transparent;\\r\\n    border-radius: 1rem;\\r\\n    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.25);\\r\\n    -webkit-backdrop-filter: blur(24px);\\r\\n            backdrop-filter: blur(24px);\\r\\n    background-clip: padding-box, border-box;\\r\\n    background-origin: padding-box, border-box;\\r\\n    animation: fade 2s;\\r\\n    z-index: 2;\\r\\n  }\\r\\n\\r\\n  .theme-icon {\\r\\n    pointer-events: none;\\r\\n    width: 2rem;\\r\\n    height: 2rem;\\r\\n  }</style>\\r\\n"],"names":[],"mappings":"AA0DE,4BAAc,CACZ,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,MAAM,CACX,KAAK,CAAE,MAAM,CACb,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,cAAc,CAAE,MAAM,CACtB,MAAM,CAAE,OAAO,CACf,mBAAmB,CAAE,IAAI,CACtB,gBAAgB,CAAE,IAAI,CACjB,WAAW,CAAE,IAAI,CACzB,KAAK,CAAE,MAAM,CACb,MAAM,CAAE,MAAM,CACd,UAAU,CAAE;AAChB,MAAM,MAAM,CAAC;AACb,MAAM,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,EAAE,CAAC;AAC7B,MAAM,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,IAAI;AAC9B,KAAK,CACD,MAAM,CAAE,KAAK,CAAC,GAAG,CAAC,WAAW,CAC7B,aAAa,CAAE,IAAI,CACnB,UAAU,CAAE,GAAG,CAAC,GAAG,CAAC,IAAI,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAC5C,uBAAuB,CAAE,KAAK,IAAI,CAAC,CAC3B,eAAe,CAAE,KAAK,IAAI,CAAC,CACnC,eAAe,CAAE,WAAW,CAAC,CAAC,UAAU,CACxC,iBAAiB,CAAE,WAAW,CAAC,CAAC,UAAU,CAC1C,SAAS,CAAE,IAAI,CAAC,EAAE,CAClB,OAAO,CAAE,CACX,CAEA,0BAAY,CACV,cAAc,CAAE,IAAI,CACpB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IACV"}'
};
const Theme_button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let favicon = "/favicon.svg";
  let icon = "/moon.svg";
  let themecolor = "#5e7c92";
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-kdh8cs_START --><link rel="icon"${add_attribute("href", favicon, 0)}><meta name="theme-color"${add_attribute("content", themecolor, 0)}><!-- HEAD_svelte-kdh8cs_END -->`, ""} <button type="button" class="theme-button svelte-1ovoe7i" tabindex="0"><img${add_attribute("src", icon, 0)} alt="Toggle Theme" class="theme-icon svelte-1ovoe7i" draggable="false"> </button>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Background, "Background").$$render($$result, {}, {}, {})} ${validate_component(Theme_button, "ThemeButton").$$render($$result, {}, {}, {})} ${slots.default ? slots.default({}) : ``}`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-ifyuPKek.js.map
