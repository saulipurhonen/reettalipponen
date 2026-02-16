// tina/config.ts
import { defineConfig } from "tinacms";
var config_default = defineConfig({
  branch: process.env.TINA_BRANCH || "main",
  clientId: "7cba4e1e-6796-428c-909f-47e25454749a",
  token: process.env.TINA_TOKEN || null,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "home",
        label: "Etusivu",
        path: "content/fi/home",
        format: "md",
        fields: [
          { name: "title", label: "Otsikko", type: "string", required: true, isTitle: true },
          { name: "description", label: "SEO-kuvaus", type: "string" },
          { name: "body", label: "Sis\xE4lt\xF6", type: "rich-text", isBody: true }
        ]
      },
      {
        name: "works",
        label: "Teokset",
        path: "content/fi/works",
        format: "md",
        fields: [
          { name: "title", label: "Otsikko", type: "string", required: true, isTitle: true },
          { name: "description", label: "SEO-kuvaus", type: "string" },
          { name: "slug", label: "URL-tunnus", type: "string", required: true },
          {
            name: "works",
            label: "Teokset",
            type: "object",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.title || "Teos" })
            },
            fields: [
              { name: "title", label: "Teoksen nimi", type: "string", required: true },
              { name: "description", label: "Kuvaus", type: "string" },
              { name: "dimensions", label: "Mitat", type: "string" },
              { name: "year", label: "Vuosi", type: "string" },
              { name: "materials", label: "Materiaalit", type: "string" },
              {
                name: "images",
                label: "Kuvat",
                type: "object",
                list: true,
                ui: {
                  itemProps: (item) => ({ label: item?.alt || "Kuva" })
                },
                fields: [
                  { name: "image", label: "Kuva", type: "image" },
                  { name: "thumbnail", label: "Pienoiskuva", type: "image" },
                  { name: "alt", label: "Alt-teksti", type: "string" }
                ]
              }
            ]
          }
        ]
      },
      {
        name: "cv",
        label: "CV",
        path: "content/fi/cv",
        format: "md",
        fields: [
          { name: "title", label: "Otsikko", type: "string", required: true, isTitle: true },
          { name: "description", label: "SEO-kuvaus", type: "string" },
          {
            name: "sections",
            label: "Osiot",
            type: "object",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.sectionTitle || "Osio" })
            },
            fields: [
              { name: "sectionTitle", label: "Osion otsikko", type: "string", required: true },
              {
                name: "entries",
                label: "Merkinn\xE4t",
                type: "object",
                list: true,
                ui: {
                  itemProps: (item) => ({ label: item?.content || "Merkint\xE4" })
                },
                fields: [
                  { name: "date", label: "P\xE4iv\xE4m\xE4\xE4r\xE4", type: "string" },
                  { name: "content", label: "Sis\xE4lt\xF6", type: "string", required: true }
                ]
              }
            ]
          }
        ]
      },
      {
        name: "contact",
        label: "Yhteystiedot",
        path: "content/fi/contact",
        format: "md",
        fields: [
          { name: "title", label: "Otsikko", type: "string", required: true, isTitle: true },
          { name: "description", label: "SEO-kuvaus", type: "string" },
          { name: "body", label: "Sis\xE4lt\xF6", type: "rich-text", isBody: true }
        ]
      },
      {
        name: "statement",
        label: "Artist statement",
        path: "content/fi/statement",
        format: "md",
        fields: [
          { name: "title", label: "Otsikko", type: "string", required: true, isTitle: true },
          { name: "description", label: "SEO-kuvaus", type: "string" },
          { name: "body", label: "Sis\xE4lt\xF6", type: "rich-text", isBody: true }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
