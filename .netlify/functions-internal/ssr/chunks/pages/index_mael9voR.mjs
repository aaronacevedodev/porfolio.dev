/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, i as renderHead, j as renderComponent, k as renderSlot, s as spreadAttributes, F as Fragment } from '../astro_g05BqV4v.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { jsxs, jsx } from 'react/jsx-runtime';
import { render } from '@react-email/render';
import { Html, Head, Preview, Body, Container, Text } from '@react-email/components';
import { useState, useRef } from 'react';

const $$Astro$m = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header${addAttribute(`
    flex justify-center items-center
    mx-auto
    py-5
    sticky top-0
    w-full xl:w-[1120px]
    z-10
  `, "class")}> <nav${addAttribute(`
      border border-black rounded-full
      px-3 py-1
      flex flex-row items-center
      bg-black/50
      backdrop-blur-2xl
    `, "class")}> <a class=" hover:bg-white/10 rounded-full px-2 sm:px-3 transition text-sm sm:text-base" href="/#experiencia">Experiencia</a> <a class=" hover:bg-white/10 rounded-full px-2 sm:px-3 transition text-sm sm:text-base" href="/#proyectos">Proyectos</a> <!-- <a
      class=" hover:bg-white/10 rounded-full px-2 sm:px-3 transition text-sm sm:text-base"
      href="/#sobre-mi">Sobre mí</a
    > --> <a class=" hover:bg-white/10 rounded-full px-2 sm:px-3 transition text-sm sm:text-base" href="/#contacto">Contacto</a> </nav> </header>`;
}, "E:/Dev/aprendiendo-astro/portafolio/src/components/Header.astro", void 0);

const $$Astro$l = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$Footer;
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class=" 
        shadow mt-12 bg-black/20 
        backdrop-blur-lg 
        w-full mx-auto py-10 px-4
    "> <div class="w-full mx-auto lg:w-[760px] md:flex md:items-center md:justify-between"> <span class="text-sm sm:text-center text-yellow-200/90">© ${currentYear} <a href="#" class="hover:underline">Aarón Acevedo</a>. Todos los derechos reservados.
</span> <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-white/90 sm:mt-0"> <!-- <li>
                <a href="#sobre-mi" class="hover:underline me-4 md:me-6">Sobre mí</a>
            </li> --> <li> <a href="#experiencia" class="hover:underline me-4 md:me-6">Experiencia</a> </li> <li> <a href="#proyectos" class="hover:underline me-4 md:me-6">Proyectos</a> </li> <li> <a href="#contacto" class="hover:underline">Contacto</a> </li> </ul> </div> </footer>`;
}, "E:/Dev/aprendiendo-astro/portafolio/src/components/Footer.astro", void 0);

const $$Astro$k = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> <div class="fixed left-0 top-0 -z-10 h-full w-full"> <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> </div> ${renderComponent($$result, "Header", $$Header, {})} <!-- background from https://bg.ibelick.com/  --> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "E:/Dev/aprendiendo-astro/portafolio/src/layouts/Layout.astro", void 0);

const $$Astro$j = createAstro();
const $$Badge = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$Badge;
  return renderTemplate`${maybeRenderHead()}<span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"> ${renderSlot($$result, $$slots["default"])} </span>`;
}, "E:/Dev/aprendiendo-astro/portafolio/src/components/Badge.astro", void 0);

const $$Astro$i = createAstro();
const $$LinkedIn = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$LinkedIn;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(Astro2.props.class, "class")} width="256" height="256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"> <path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="currentColor"></path> </svg>`;
}, "E:/Dev/aprendiendo-astro/portafolio/src/icons/LinkedIn.astro", void 0);

const $$Astro$h = createAstro();
const $$Mail = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Mail;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(Astro2.props.class, "class")} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5"></path> <path d="M3 6l9 6l9 -6"></path><path d="M15 18h6"></path><path d="M18 15l3 3l-3 3"></path> </svg>`;
}, "E:/Dev/aprendiendo-astro/portafolio/src/icons/Mail.astro", void 0);

const $$Astro$g = createAstro();
const $$SocialPils = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$SocialPils;
  return renderTemplate`${maybeRenderHead()}<a class="
        border rounded-full border-white/10 
        flex justify-center items-center gap-x-2 
        py-1 px-2 md:py-2 md:px-4 
        text-xs lg:text-base
        bg-white/5 
        hover:scale-110 hover:bg-white/10 transition
    "${addAttribute(Astro2.props.href, "href")} target="_blank"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "E:/Dev/aprendiendo-astro/portafolio/src/components/SocialPils.astro", void 0);

const $$Astro$f = createAstro();
const $$ExperienciaItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$ExperienciaItem;
  const { date, title, description, link, textlink } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div> <time class="mb-1 text-sm font-normal leading-none text-sky-200/80"> ${date} </time> <h3 class="mt-2 text-lg font-semibold text-yellow-200"> ${title} </h3> <p class="mb-4 text-base font-normal text-gray-200 text-pretty"> ${description} </p> <!-- Renderizado condicional --> <!-- Mostramos el link cuando exista --> ${link && renderTemplate`<a${addAttribute(link, "href")} target="_blank" rel="noopener" class="
                inline-flex items-center 
                border rounded-full border-white/10 
                gap-x-2 
                py-1 px-2 md:py-2 md:px-4 
                text-xs lg:text-base
                bg-white/5 
                hover:scale-110 hover:bg-white/10 transition
            "> ${textlink} </a>`}`;
}, "E:/Dev/aprendiendo-astro/portafolio/src/components/ExperienciaItem.astro", void 0);

const $$Astro$e = createAstro();
const $$Experiencia = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Experiencia;
  const EXPERIENCE = [
    {
      date: "Actualmente...",
      title: "Programador freelance",
      description: "Me dedico a dise\xF1ar herramientas intuitivas, adaptadas a las necesidades del cliente. Gestiono plazos con flexibilidad, manteniendo una comunicaci\xF3n constante para garantizar su satisfacci\xF3n. Permanezco en aprendizaje continuo y evaluaci\xF3n de nuevas tecnolog\xEDas.",
      link: "",
      textlink: ""
    },
    {
      date: "Enero 2021 a Febrero 2023",
      title: "Pulsia Technology",
      description: "Colabor\xE9 en el equipo de desarrollo, especializ\xE1ndome en la creaci\xF3n de portales y aplicaciones web para entidades p\xFAblicas en toda Espa\xF1a. Contribu\xED a proyectos que mejoraron la eficiencia y cumplimiento con est\xE1ndares gubernamentales.",
      link: "https://www.pulsia.es/",
      textlink: "Visitar web"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<ol class="relative border-s border-gray-200 ml-3"> ${EXPERIENCE.map((experiencia) => renderTemplate`<li class="mb-10 ms-4"> ${renderComponent($$result, "ExperienciaItem", $$ExperienciaItem, { ...experiencia })} </li>`)} </ol>`;
}, "E:/Dev/aprendiendo-astro/portafolio/src/components/Experiencia.astro", void 0);

const $$Astro$d = createAstro();
const $$SectionContainer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$SectionContainer;
  const { class: className, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`${className}w-full mx-auto lg:w-[760px] pt-24`, "class")}> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "E:/Dev/aprendiendo-astro/portafolio/src/components/SectionContainer.astro", void 0);

const $$Astro$c = createAstro();
const $$Html = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Html;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 452 520"> <path fill="#e34f26" d="M41 460L0 0h451l-41 460-185 52"></path> <path fill="#ef652a" d="M226 472l149-41 35-394H226"></path> <path fill="#ecedee" d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z"></path> <path fill="#fff" d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z"></path> </svg>`;
}, "E:/Dev/aprendiendo-astro/portafolio/src/icons/Html.astro", void 0);

const $$Astro$b = createAstro();
const $$Bootstrap = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Bootstrap;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 256 204" xmlns="http://www.w3.org/2000/svg" width="256" height="204" preserveAspectRatio="xMidYMid"> <path fill="#7E13F8" d="M53.172 0C38.565 0 27.756 12.785 28.24 26.65c.465 13.32-.139 30.573-4.482 44.642C19.402 85.402 12.034 94.34 0 95.488v12.956c12.034 1.148 19.402 10.086 23.758 24.197 4.343 14.069 4.947 31.32 4.482 44.641-.484 13.863 10.325 26.65 24.934 26.65h149.673c14.608 0 25.414-12.785 24.93-26.65-.464-13.32.139-30.572 4.482-44.641 4.359-14.11 11.707-23.05 23.741-24.197V95.488c-12.034-1.148-19.382-10.086-23.74-24.196-4.344-14.067-4.947-31.321-4.483-44.642C228.261 12.787 217.455 0 202.847 0H53.17h.002ZM173.56 125.533c0 19.092-14.24 30.67-37.872 30.67h-40.23a4.339 4.339 0 0 1-4.338-4.339V52.068a4.339 4.339 0 0 1 4.339-4.34h39.999c19.705 0 32.637 10.675 32.637 27.063 0 11.503-8.7 21.801-19.783 23.604v.601c15.089 1.655 25.248 12.104 25.248 26.537Zm-42.26-64.05h-22.937v32.4h19.32c14.934 0 23.17-6.014 23.17-16.764 0-10.073-7.082-15.636-19.552-15.636Zm-22.937 45.256v35.705h23.782c15.548 0 23.786-6.239 23.786-17.965 0-11.728-8.467-17.742-24.786-17.742h-22.782v.002Z"></path> </svg>`;
}, "E:/Dev/aprendiendo-astro/portafolio/src/icons/Bootstrap.astro", void 0);

const $$Astro$a = createAstro();
const $$Php = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Php;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" viewBox="0 -1 100 50"> <path fill="#fff" d="M7.579 10.123h14.204c4.169.035 7.19 1.237 9.063 3.604 1.873 2.367 2.491 5.6 1.855 9.699-.247 1.873-.795 3.71-1.643 5.512a16.385 16.385 0 01-3.392 4.876c-1.767 1.837-3.657 3.003-5.671 3.498a26.11 26.11 0 01-6.254.742h-6.36l-2.014 10.07H0l7.579-38.001m6.201 6.042l-3.18 15.9c.212.035.424.053.636.053h.742c3.392.035 6.219-.3 8.48-1.007 2.261-.742 3.781-3.321 4.558-7.738.636-3.71 0-5.848-1.908-6.413-1.873-.565-4.222-.83-7.049-.795-.424.035-.83.053-1.219.053h-1.113l.053-.053M41.093 0h7.314L46.34 10.123h6.572c3.604.071 6.289.813 8.056 2.226 1.802 1.413 2.332 4.099 1.59 8.056l-3.551 17.649h-7.42L54.979 21.2c.353-1.767.247-3.021-.318-3.763s-1.784-1.113-3.657-1.113l-5.883-.053-4.346 21.783h-7.314L41.093 0M70.412 10.123h14.204c4.169.035 7.19 1.237 9.063 3.604 1.873 2.367 2.491 5.6 1.855 9.699-.247 1.873-.795 3.71-1.643 5.512a16.385 16.385 0 01-3.392 4.876c-1.767 1.837-3.657 3.003-5.671 3.498a26.11 26.11 0 01-6.254.742h-6.36L70.2 48.124h-7.367l7.579-38.001m6.201 6.042l-3.18 15.9c.212.035.424.053.636.053h.742c3.392.035 6.219-.3 8.48-1.007 2.261-.742 3.781-3.321 4.558-7.738.636-3.71 0-5.848-1.908-6.413-1.873-.565-4.222-.83-7.049-.795-.424.035-.83.053-1.219.053H76.56l.053-.053"></path> </svg>`;
}, "E:/Dev/aprendiendo-astro/portafolio/src/icons/Php.astro", void 0);

const $$Astro$9 = createAstro();
const $$MySQL = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$MySQL;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} preserveAspectRatio="xMidYMid" viewBox="0 0 256 252"> <path d="M236 194c-14 0-25 1-34 5-3 1-7 1-7 4l3 6c2 3 5 8 9 11l11 8 21 10 11 9 6 4-3-6-5-5c-5-7-11-13-18-18-6-3-18-9-20-15h-1l12-3 18-3 8-2v-2l-9-10c-8-8-18-15-28-22l-18-8c-2-1-6-2-7-4l-7-13-15-30-8-20c-18-30-38-48-68-65-6-4-14-5-22-7l-13-1-8-6C34 5 8-9 1 9c-5 11 7 22 11 28l9 13 3 9c3 8 5 17 9 24l6 10c2 2 4 3 5 6-3 4-3 9-4 13-7 20-4 44 5 59 2 4 9 14 18 10 8-3 6-13 8-22l1-4 8 14c5 9 14 18 22 24 4 3 8 8 13 10l-4-4-9-10c-8-10-14-21-20-32l-7-17-3-6c-3 4-7 7-9 12-3 7-3 17-4 26h-1c-6-1-8-7-10-12-5-12-6-32-1-46 1-4 6-15 4-19-1-3-4-5-6-7l-7-12-10-30-9-13c-3-5-7-8-10-14-1-2-2-5 0-7l2-2c2-2 9 0 11 1 6 3 12 5 17 9l8 6h4c6 1 12 0 17 2 9 3 18 7 25 12 23 14 42 35 54 59 3 4 3 8 5 12l12 26c4 8 7 16 12 23 3 4 14 6 18 8l12 4 18 12c2 2 11 7 12 10Z" fill="#00546B"></path> <path d="m58 43-7 1 6 7 4 9v-1c3-1 4-4 4-8l-2-4-5-4Z" fill="#00546B"></path> </svg>`;
}, "E:/Dev/aprendiendo-astro/portafolio/src/icons/MySQL.astro", void 0);

const $$Astro$8 = createAstro();
const $$Javascript = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Javascript;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="2500" height="2500" viewBox="0 0 1052 1052"> <path fill="#f0db4f" d="M0 0h1052v1052H0z"></path> <path d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z" fill="#323330"></path> </svg>`;
}, "E:/Dev/aprendiendo-astro/portafolio/src/icons/Javascript.astro", void 0);

const $$Astro$7 = createAstro();
const $$LinkButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$LinkButton;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} target="_blank" class="bg-white/5
    border dark:border-white/10 border-gray-300
    rounded-full
    inline-flex justify-center items-center gap-x-2
    py-1 px-2 md:py-2 md:px-4
    text-xs md:text-base
    transition
    hover:scale-110 hover:bg-white/10"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "E:/Dev/aprendiendo-astro/portafolio/src/components/LinkButton.astro", void 0);

const $$Astro$6 = createAstro();
const $$Www = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Www;
  return renderTemplate`${maybeRenderHead()}<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4"></path> <path d="M11.5 3a16.989 16.989 0 0 0 -1.826 4"></path> <path d="M12.5 3a16.989 16.989 0 0 1 1.828 4"></path> <path d="M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4"></path> <path d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4"></path> <path d="M12.5 21a16.989 16.989 0 0 0 1.828 -4"></path> <path d="M2 10l1 4l1.5 -4l1.5 4l1 -4"></path> <path d="M17 10l1 4l1.5 -4l1.5 4l1 -4"></path> <path d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4"></path> ` })} </svg>`;
}, "E:/Dev/aprendiendo-astro/portafolio/src/icons/Www.astro", void 0);

const $$Astro$5 = createAstro();
const $$Proyectos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Proyectos;
  const TAGS = {
    HTML: {
      name: "HTML",
      class: "bg-[#e35026]/20 text-white",
      icon: $$Html
    },
    Bootstrap: {
      name: "Bootstrap",
      class: "bg-[#7e13f8]/20 text-white",
      icon: $$Bootstrap
    },
    Php: {
      name: "PHP",
      class: "bg-[#777cb4]/20 text-white",
      icon: $$Php
    },
    MySQL: {
      name: "MySQL",
      class: "bg-[#4479a0]/20 text-white",
      icon: $$MySQL
    },
    JavaScript: {
      name: "JavaScript",
      class: "bg-[#efdb50]/20 text-white",
      icon: $$Javascript
    }
  };
  const PROYECTOS = [
    {
      title: "Plataforma de Gesti\xF3n para Despachos Legales",
      description: "Facilitamos al Bufete Corrales optimizar la gesti\xF3n documental y de clientes con nuestra herramienta web personalizada, permiti\xE9ndoles administrar su despacho de forma eficiente desde cualquier ubicaci\xF3n.",
      link: "#",
      textlink: "Solicitar demostraci\xF3n",
      image: "/proyects/bufete.webp",
      tags: [TAGS.HTML, TAGS.Bootstrap, TAGS.JavaScript, TAGS.Php, TAGS.MySQL]
    },
    {
      title: "Experiencia Digital para Restaurantes: Portal Web y Reservas",
      description: "Elevamos la presencia online del restaurante con una plataforma web que va m\xE1s all\xE1 de mostrar la carta. Permite a los clientes explorar productos, acceder a informaci\xF3n de contacto y realizar reservas de manera conveniente.",
      link: "https://65a973a281ad490a9c3e0c96--fascinating-sprinkles-e84025.netlify.app/",
      textlink: "Ir al sitio web",
      image: "/proyects/restaurante.webp",
      tags: [TAGS.HTML, TAGS.Bootstrap, TAGS.JavaScript, TAGS.Php, TAGS.MySQL]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col gap-y-16"> ${PROYECTOS.map(({
    title,
    description,
    link,
    image,
    tags,
    textlink
  }) => renderTemplate`<article> <h3 class="text-2xl font-semibold text-yellow-200 mb-2">${title}</h3> <p class="text-lg mb-4 text-pretty">${description}</p> <ul class="flex gap-2 flex-row mb-2 flex-wrap"> ${tags.map((tag) => renderTemplate`<li> <span${addAttribute(`flex gap-x-2 rounded-full text-xs ${tag.class} py-1 px-2`, "class")}> ${renderComponent($$result, "tag.icon", tag.icon, { "class": "size-4" })} ${tag.name} </span> </li>`)} </ul> <img class="rounded shadow-2xl shadow-white/10"${addAttribute(image, "src")}${addAttribute(`Captura de pantalla del proyecto ${image}`, "alt")}> <footer class="flex gap-x-4 items-end justify-start mt-4"> ${renderComponent($$result, "LinkButton", $$LinkButton, { "href": link }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Www", $$Www, {})} ${textlink}` })} </footer> </article>`)} </section>`;
}, "E:/Dev/aprendiendo-astro/portafolio/src/components/Proyectos.astro", void 0);

const $$Astro$4 = createAstro();
const $$Briefcase = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Briefcase;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path><path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path><path d="M12 12l0 .01"></path> <path d="M3 13a20 20 0 0 0 18 0"></path> </svg>`;
}, "E:/Dev/aprendiendo-astro/portafolio/src/icons/Briefcase.astro", void 0);

const $$Astro$3 = createAstro();
const $$Code = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Code;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 8l-4 4l4 4"></path><path d="M17 8l4 4l-4 4"></path><path d="M14 4l-4 16"></path> </svg>`;
}, "E:/Dev/aprendiendo-astro/portafolio/src/icons/Code.astro", void 0);

const $$Astro$2 = createAstro();
const $$Address = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Address;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(Astro2.props.class, "class")} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M20 6v12a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2z"></path><path d="M10 16h6"></path><path d="M13 11m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M4 8h3"></path><path d="M4 12h3"></path><path d="M4 16h3"></path> </svg>`;
}, "E:/Dev/aprendiendo-astro/portafolio/src/icons/Address.astro", void 0);

const SampleEmail = ({
  asuntoCorreo,
  mensaje,
  correo
}) => /* @__PURE__ */ jsxs(Html, { children: [
  /* @__PURE__ */ jsx(Head, {}),
  /* @__PURE__ */ jsx(Preview, { children: "The sales intelligence platform that helps you uncover qualified leads." }),
  /* @__PURE__ */ jsx(Body, { style: main, children: /* @__PURE__ */ jsxs(Container, { style: container, children: [
    /* @__PURE__ */ jsxs(Text, { style: paragraph, children: [
      "Asunto: ",
      asuntoCorreo,
      "."
    ] }),
    /* @__PURE__ */ jsxs(Text, { style: paragraph, children: [
      "Correo: ",
      correo,
      "."
    ] }),
    /* @__PURE__ */ jsx(Text, { style: paragraph, children: mensaje })
  ] }) })
] });
SampleEmail.PreviewProps = {
  asuntoCorreo: "Alan",
  mensaje: "Esto es un mensaje por defecto",
  correo: "correo@prueba.com"
};
const main = {
  backgroundColor: "#ffffff",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'
};
const container = {
  margin: "0 auto",
  padding: "20px 0 48px"
};
const paragraph = {
  fontSize: "16px",
  lineHeight: "26px"
};

const FormularioEmail = () => {
  const [isFormSubmitted, setFormSubmitted] = useState(false);
  const formRef = useRef(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const { asuntoText, email, mensajeText } = Object.fromEntries(formData);
    const finalHtml = render(
      /* @__PURE__ */ jsx(
        SampleEmail,
        {
          asuntoCorreo: asuntoText,
          mensaje: mensajeText,
          correo: email
        }
      ),
      {
        pretty: true
      }
    );
    const finalText = render(
      /* @__PURE__ */ jsx(
        SampleEmail,
        {
          asuntoCorreo: asuntoText,
          mensaje: mensajeText,
          correo: email
        }
      ),
      {
        plainText: true
      }
    );
    try {
      const response = await fetch("/api/sendEmail.json", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          from: "onboarding@resend.dev",
          to: "aaronacevedo94@gmail.com",
          subject: `${asuntoText}`,
          html: finalHtml,
          text: finalText
        })
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        if (formRef.current) {
          formRef.current.reset();
        }
      }, 2e3);
    } catch (e2) {
      console.error(e2);
    }
  };
  return /* @__PURE__ */ jsxs("section", { children: [
    /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-yellow-200 mb-2", children: "¡Escríbeme!" }),
    /* @__PURE__ */ jsx("p", { className: "mb-8 lg:mb-12 font-light text-lg text-white/80", children: "Estoy aquí para colaborar y resolver cualquier duda." }),
    /* @__PURE__ */ jsxs(
      "form",
      {
        ref: formRef,
        onSubmit: handleSubmit,
        className: "space-y-8 flex flex-col items-start",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
            /* @__PURE__ */ jsx(
              "label",
              {
                className: "block mb-2 text-sm font-medium text-sky-200/80",
                children: "Correo electrónico"
              }
            ),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "email",
                name: "email",
                placeholder: "tucorreo@gmail.com",
                className: "shadow-sm text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-white/10 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light",
                required: true
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
            /* @__PURE__ */ jsx(
              "label",
              {
                className: "block mb-2 text-sm font-medium text-sky-200/80",
                children: "Asunto"
              }
            ),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                name: "asuntoText",
                placeholder: "Dime en qué puedo ayudarte.",
                className: "shadow-sm text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-white/10 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light",
                required: true
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
            /* @__PURE__ */ jsx(
              "label",
              {
                className: "block mb-2 text-sm font-medium text-sky-200/80",
                children: "Mensaje"
              }
            ),
            /* @__PURE__ */ jsx(
              "textarea",
              {
                name: "mensajeText",
                className: "block p-2.5 w-full text-sm   rounded-lg shadow-sm  focus:ring-primary-500 focus:border-primary-500 bg-white/10 border-gray-600 placeholder-gray-400 text-white/80 focus:ring-primary-500 focus:border-primary-500",
                placeholder: "Si deseas, cuéntame más detalles sobre el tema.",
                rows: 4
              }
            )
          ] }),
          isFormSubmitted && /* @__PURE__ */ jsx("div", { className: "text-green-500 mb-4", children: "¡El formulario se ha enviado correctamente!" }),
          /* @__PURE__ */ jsxs(
            "button",
            {
              type: "submit",
              className: "\r\n                        bg-white/5\r\n                        border dark:border-white/10 border-gray-300\r\n                        rounded-full\r\n                        inline-flex justify-center items-center gap-x-2\r\n                        py-1 px-2 md:py-2 md:px-4\r\n                        text-xs md:text-base\r\n                        transition\r\n                        hover:scale-110 hover:bg-white/10\r\n                    ",
              children: [
                /* @__PURE__ */ jsxs(
                  "svg",
                  {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    "stroke-width": "2",
                    stroke: "currentColor",
                    fill: "none",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    children: [
                      /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
                      /* @__PURE__ */ jsx("path", { d: "M10 14l11 -11" }),
                      /* @__PURE__ */ jsx("path", { d: "M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsx("input", { type: "submit", value: "Enviar" })
              ]
            }
          )
        ]
      }
    )
  ] });
};

const $$Astro$1 = createAstro();
const $$Contacto = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Contacto;
  return renderTemplate`${renderComponent($$result, "FormularioEmail", FormularioEmail, { "client:load": true, "client:component-hydration": "load", "client:component-path": "E:/Dev/aprendiendo-astro/portafolio/src/components/FormularioEmail.tsx", "client:component-export": "default" })}`;
}, "E:/Dev/aprendiendo-astro/portafolio/src/components/Contacto.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Porfolio de Aaron Acevedo - Desarrollador y programador web con 5 a\xF1os de experiencia", "description": "Contrata a Aaron Acevedo para crear tu aplicaci\xF3n web o m\xF3vil. Desarrollador y programador web. Me especializo en dar soluciones a trav\xE9s de aplicaciones." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="px-4"> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "class": "pt-24 lg:py-44 pb-24" }, { "default": ($$result3) => renderTemplate` <img class="rounded-full size-24 mb-4" src="https://media.licdn.com/dms/image/D4E03AQHUgZrYI7CPRw/profile-displayphoto-shrink_800_800/0/1676379976895?e=1710979200&v=beta&t=0a-hu3hUOB12fpFCPGjYyypYATQM_zYRErep6EgW03I" alt="aaron photo"> <h1 class="text-white text-2xl md:text-4xl lg:text-5xl font-bold flex flex-col md:flex-row gap-x-4 pb-6 lg:pb-10">
Hey, soy Aarón Acevedo
<a href="https://www.linkedin.com/in/aaronacevedo/" target="_blank" rel="noopener" class="flex md:justify-center items-center mt-2 md:mt-0"> ${renderComponent($$result3, "Badge", $$Badge, {}, { "default": ($$result4) => renderTemplate`Disponible para ayudarte` })} </a> </h1> <h2 class="text-xl lg:text-2xl text-wrap max-w-[700px]"> <span>+5 años de experiencia. </span> <span class="text-yellow-200/90">
Desarrollador web. </span> <span class="text-red-200/90">
De Sevilla, España. </span> <span class="opacity-80">Me especializo en ofrecer soluciones mediante el desarrollo de aplicaciones.</span> </h2>  <nav class="flex gap-4 mt-4 flex-wrap"> ${renderComponent($$result3, "SocialPils", $$SocialPils, { "href": "https://www.linkedin.com/in/aaronacevedo/" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "LinkedInIcon", $$LinkedIn, { "class": "size-4 md:size-6" })}
LinkdeIn
` })} <!-- <SocialPils href="https://github.com/aaronacevedodev">
					<GithubIcon class="size-4 md:size-6" />
					Github
				</SocialPils> --> ${renderComponent($$result3, "SocialPils", $$SocialPils, { "href": "mailto:correo@aaronacevedo94@gmail.com" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "MailIcon", $$Mail, { "class": "size-4 md:size-6" })}
aaronacevedo94@gmail.com
` })} </nav> ` })} <!-- Experiencia --> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "experiencia" }, { "default": ($$result3) => renderTemplate` <h2 class="text-3xl font-semibold mb-6 flex gap-x-3 items-center"> ${renderComponent($$result3, "Briefcase", $$Briefcase, { "class": "size-6" })}
Experiencia laboral
</h2> ${renderComponent($$result3, "Experiencia", $$Experiencia, {})} ` })} <!-- Proyectos --> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "proyectos" }, { "default": ($$result3) => renderTemplate` <h2 class="text-3xl font-semibold mb-6 flex gap-x-3 items-center"> ${renderComponent($$result3, "Code", $$Code, { "class": "size-6" })}
Proyectos
</h2> ${renderComponent($$result3, "Proyectos", $$Proyectos, {})} ` })} <!-- Contacto --> ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "contacto" }, { "default": ($$result3) => renderTemplate` <h2 class="text-3xl font-semibold mb-6 flex gap-x-3 items-center"> ${renderComponent($$result3, "Address", $$Address, { "class": "size-6" })}
Contacto
</h2> ${renderComponent($$result3, "Contacto", $$Contacto, {})} ` })} </main> ` })}`;
}, "E:/Dev/aprendiendo-astro/portafolio/src/pages/index.astro", void 0);

const $$file = "E:/Dev/aprendiendo-astro/portafolio/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
