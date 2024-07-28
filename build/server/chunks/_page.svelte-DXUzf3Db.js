import { c as create_ssr_component, v as validate_component, d as each, e as escape, a as add_attribute } from './ssr-CxO8iSnR.js';
import { C as Card } from './card-hxoSS0Sz.js';
import { N as Navigation } from './socials_button.svelte_svelte_type_style_lang-qA8QTMw2.js';
import './index2-ClvTiG_4.js';

const css = {
  code: ".socials-button.svelte-q9jk4k{display:flex;align-items:center;padding:1rem;width:100%;border-radius:1rem;color:white;text-decoration:none;box-sizing:border-box;box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);transition:all 0.25s}.socials-button.svelte-q9jk4k:hover{background-color:var(--hover) !important}.icon.svelte-q9jk4k{width:32px;height:32px;margin-right:12px;pointer-events:none}",
  map: `{"version":3,"file":"socials_button.svelte","sources":["socials_button.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { onMount } from \\"svelte\\";\\nexport let backgroundColor;\\nexport let hoverBackgroundColor;\\nexport let iconPath;\\nexport let platformName;\\nexport let profileName;\\nexport let link;\\nlet isShiftHeld = false;\\nfunction handleKeydown(event) {\\n    if (event.key === \\"Shift\\") {\\n        isShiftHeld = true;\\n    }\\n}\\nfunction handleKeyup(event) {\\n    if (event.key === \\"Shift\\") {\\n        isShiftHeld = false;\\n    }\\n}\\nonMount(() => {\\n    window.addEventListener(\\"keydown\\", handleKeydown);\\n    window.addEventListener(\\"keyup\\", handleKeyup);\\n    return () => {\\n        window.removeEventListener(\\"keydown\\", handleKeydown);\\n        window.removeEventListener(\\"keyup\\", handleKeyup);\\n    };\\n});\\n$: twitterBackgroundColor = \\"#1D9BF0\\";\\n$: twitterHoverBackgroundColor = \\"#1A8BD8\\";\\n$: twitterIconPath = \\"icon/twitter.svg\\";\\n$: twitterPlatformName = \\"Twitter\\";\\n<\/script>\\r\\n\\r\\n<a\\r\\n  class=\\"socials-button\\"\\r\\n  style=\\"background-color: {isShiftHeld && platformName === 'X'\\r\\n    ? twitterBackgroundColor\\r\\n    : backgroundColor};\\r\\n  --hover: {isShiftHeld && platformName === 'X'\\r\\n    ? twitterHoverBackgroundColor\\r\\n    : hoverBackgroundColor}\\"\\r\\n  href={link}\\r\\n  target=\\"_blank\\"\\r\\n>\\r\\n  <img\\r\\n    class=\\"icon\\"\\r\\n    src={isShiftHeld && platformName === \\"X\\" ? twitterIconPath : iconPath}\\r\\n    alt={isShiftHeld && platformName === \\"X\\"\\r\\n      ? twitterPlatformName\\r\\n      : platformName}\\r\\n  />\\r\\n  <span class=\\"montserrat-bold\\"\\r\\n    >{isShiftHeld && platformName === \\"X\\"\\r\\n      ? twitterPlatformName\\r\\n      : platformName}</span\\r\\n  >\\r\\n  <span class=\\"montserrat-regular\\" style=\\"margin-left: auto\\">{profileName}</span\\r\\n  >\\r\\n</a>\\r\\n\\r\\n<style>\\r\\n  .socials-button {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    padding: 1rem;\\r\\n    width: 100%;\\r\\n    border-radius: 1rem;\\r\\n    color: white;\\r\\n    text-decoration: none;\\r\\n    box-sizing: border-box;\\r\\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\\r\\n    transition: all 0.25s;\\r\\n  }\\r\\n\\r\\n  .socials-button:hover {\\r\\n    background-color: var(--hover) !important;\\r\\n  }\\r\\n\\r\\n  .icon {\\r\\n    width: 32px;\\r\\n    height: 32px;\\r\\n    margin-right: 12px;\\r\\n    pointer-events: none;\\r\\n  }</style>\\r\\n"],"names":[],"mappings":"AA4DE,6BAAgB,CACd,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,IAAI,CACX,aAAa,CAAE,IAAI,CACnB,KAAK,CAAE,KAAK,CACZ,eAAe,CAAE,IAAI,CACrB,UAAU,CAAE,UAAU,CACtB,UAAU,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAC3C,UAAU,CAAE,GAAG,CAAC,KAClB,CAEA,6BAAe,MAAO,CACpB,gBAAgB,CAAE,IAAI,OAAO,CAAC,CAAC,UACjC,CAEA,mBAAM,CACJ,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,YAAY,CAAE,IAAI,CAClB,cAAc,CAAE,IAClB"}`
};
const Socials_button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { backgroundColor } = $$props;
  let { hoverBackgroundColor } = $$props;
  let { iconPath } = $$props;
  let { platformName } = $$props;
  let { profileName } = $$props;
  let { link } = $$props;
  if ($$props.backgroundColor === void 0 && $$bindings.backgroundColor && backgroundColor !== void 0)
    $$bindings.backgroundColor(backgroundColor);
  if ($$props.hoverBackgroundColor === void 0 && $$bindings.hoverBackgroundColor && hoverBackgroundColor !== void 0)
    $$bindings.hoverBackgroundColor(hoverBackgroundColor);
  if ($$props.iconPath === void 0 && $$bindings.iconPath && iconPath !== void 0)
    $$bindings.iconPath(iconPath);
  if ($$props.platformName === void 0 && $$bindings.platformName && platformName !== void 0)
    $$bindings.platformName(platformName);
  if ($$props.profileName === void 0 && $$bindings.profileName && profileName !== void 0)
    $$bindings.profileName(profileName);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  $$result.css.add(css);
  return `<a class="socials-button svelte-q9jk4k" style="${"background-color: " + escape(
    backgroundColor,
    true
  ) + "; --hover: " + escape(
    hoverBackgroundColor,
    true
  )}"${add_attribute("href", link, 0)} target="_blank"><img class="icon svelte-q9jk4k"${add_attribute(
    "src",
    iconPath,
    0
  )}${add_attribute(
    "alt",
    platformName,
    0
  )}> <span class="montserrat-bold">${escape(platformName)}</span> <span class="montserrat-regular" style="margin-left: auto">${escape(profileName)}</span> </a>`;
});
const socials = [
  {
    backgroundColor: "#171A21",
    hoverBackgroundColor: "#14171D",
    iconPath: "icon/steam.svg",
    platformName: "Steam",
    profileName: "Flunty",
    link: "https://steamcommunity.com/id/fluntyet"
  },
  {
    backgroundColor: "#24292E",
    hoverBackgroundColor: "#202429",
    iconPath: "icon/github.svg",
    platformName: "GitHub",
    profileName: "Fluntyy",
    link: "https://github.com/Fluntyy"
  },
  {
    backgroundColor: "#5865F2",
    hoverBackgroundColor: "#4F5BDA",
    iconPath: "icon/discord.svg",
    platformName: "Discord",
    profileName: "flunty.xyz",
    link: "https://discord.com/users/901872201454747678"
  },
  {
    backgroundColor: "#E30000",
    hoverBackgroundColor: "#CC0000",
    iconPath: "icon/youtube.svg",
    platformName: "YouTube",
    profileName: "@fluntyxyz",
    link: "https://youtube.com/@fluntyxyz"
  },
  {
    backgroundColor: "#000000",
    hoverBackgroundColor: "#000000",
    iconPath: "icon/x.svg",
    platformName: "X",
    profileName: "@Fluntyy",
    link: "https://x.com/Fluntyy"
  },
  {
    backgroundColor: "#7B0099",
    hoverBackgroundColor: "#6E008A",
    iconPath: "icon/email.svg",
    platformName: "Email",
    profileName: "me@flunty.xyz",
    link: "mailto:me@flunty.xyz"
  }
];
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1xwb6by_START -->${$$result.title = `<title>Socials - Flunty&#39;s Website</title>`, ""}<link rel="stylesheet" href="styles/socials.css"><!-- HEAD_svelte-1xwb6by_END -->`, ""} ${validate_component(Card, "Card").$$render(
    $$result,
    {
      width: "56.25rem",
      height: "33.75rem",
      style: ""
    },
    {},
    {
      default: () => {
        return `${validate_component(Navigation, "Navigation").$$render($$result, {}, {}, {
          default: () => {
            return `Socials`;
          }
        })} <div class="buttons-container">${each(socials, (social) => {
          return `<div class="button-wrapper">${validate_component(Socials_button, "SocialsButton").$$render(
            $$result,
            {
              backgroundColor: social.backgroundColor,
              hoverBackgroundColor: social.hoverBackgroundColor,
              iconPath: social.iconPath,
              platformName: social.platformName,
              profileName: social.profileName,
              link: social.link
            },
            {},
            {}
          )} </div>`;
        })}</div>`;
      }
    }
  )}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DXUzf3Db.js.map
