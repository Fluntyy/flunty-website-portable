import { c as create_ssr_component, v as validate_component } from './ssr-CxO8iSnR.js';
import { C as Card } from './card-hxoSS0Sz.js';
import { N as Navigation } from './socials_button.svelte_svelte_type_style_lang-qA8QTMw2.js';
import './index2-ClvTiG_4.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1okk8x0_START -->${$$result.title = `<title>About - Flunty&#39;s Website</title>`, ""}<link rel="stylesheet" href="styles/about.css"><!-- HEAD_svelte-1okk8x0_END -->`, ""} ${validate_component(Card, "Card").$$render(
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
            return `About`;
          }
        })} <div class="about-container" data-svelte-h="svelte-u0r7pp"><span class="montserrat-semibold" style="font-size: 1.5rem; text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);">Hi, I&#39;m <strong>Flunty</strong>! I&#39;m a teenager from Indonesia who loves
      programming, developing, and gaming. I spend a lot of my time making
      websites, writing programs, and doing some random experiments.</span> <br><br> <span class="montserrat-semibold" style="font-size: 1.5rem; text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);">I have a big interest in old retro things, and they often inspire my
      projects and hobbies.</span> <br><br> <span class="montserrat-semibold" style="font-size: 1.5rem; text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);">My favorite games are <img src="icon/minecraft.svg" alt="Minecraft Logo" class="icons">
      Minecraft,
      <img src="icon/genshin-impact.svg" alt="Genshin Impact Logo" class="icons">
      Genshin Impact, and
      <img src="icon/portal.svg" alt="Portal Logo" class="icons"> 
      Portal (1 &amp; 2). I also enjoy games that challenge my creativity and problem-solving skills.</span></div>`;
      }
    }
  )}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-C5BX-mTR.js.map
