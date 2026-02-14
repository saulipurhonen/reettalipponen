import { defineConfig } from 'tinacms';

export default defineConfig({
  branch: process.env.TINA_BRANCH || 'main',
  clientId: '7cba4e1e-6796-428c-909f-47e25454749a',
  token: process.env.TINA_TOKEN || null,
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: 'images',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        name: 'home',
        label: 'Etusivu',
        path: 'content/fi/home',
        format: 'md',
        fields: [
          { name: 'title', label: 'Otsikko', type: 'string', required: true, isTitle: true },
          { name: 'description', label: 'SEO-kuvaus', type: 'string' },
          { name: 'body', label: 'Sisältö', type: 'rich-text', isBody: true },
        ],
      },
      {
        name: 'works',
        label: 'Teokset',
        path: 'content/fi/works',
        format: 'md',
        fields: [
          { name: 'title', label: 'Otsikko', type: 'string', required: true, isTitle: true },
          { name: 'description', label: 'SEO-kuvaus', type: 'string' },
          { name: 'slug', label: 'URL-tunnus', type: 'string', required: true },
          {
            name: 'works',
            label: 'Teokset',
            type: 'object',
            list: true,
            fields: [
              { name: 'title', label: 'Teoksen nimi', type: 'string', required: true },
              { name: 'description', label: 'Kuvaus', type: 'string' },
              { name: 'dimensions', label: 'Mitat', type: 'string' },
              { name: 'year', label: 'Vuosi', type: 'string' },
              { name: 'materials', label: 'Materiaalit', type: 'string' },
              {
                name: 'images',
                label: 'Kuvat',
                type: 'object',
                list: true,
                fields: [
                  { name: 'image', label: 'Kuva', type: 'image' },
                  { name: 'thumbnail', label: 'Pienoiskuva', type: 'image' },
                  { name: 'alt', label: 'Alt-teksti', type: 'string' },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'cv',
        label: 'CV',
        path: 'content/fi/cv',
        format: 'md',
        fields: [
          { name: 'title', label: 'Otsikko', type: 'string', required: true, isTitle: true },
          { name: 'description', label: 'SEO-kuvaus', type: 'string' },
          {
            name: 'sections',
            label: 'Osiot',
            type: 'object',
            list: true,
            fields: [
              { name: 'sectionTitle', label: 'Osion otsikko', type: 'string', required: true },
              {
                name: 'entries',
                label: 'Merkinnät',
                type: 'object',
                list: true,
                fields: [
                  { name: 'date', label: 'Päivämäärä', type: 'string' },
                  { name: 'content', label: 'Sisältö', type: 'string', required: true },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'contact',
        label: 'Yhteystiedot',
        path: 'content/fi/contact',
        format: 'md',
        fields: [
          { name: 'title', label: 'Otsikko', type: 'string', required: true, isTitle: true },
          { name: 'description', label: 'SEO-kuvaus', type: 'string' },
          { name: 'body', label: 'Sisältö', type: 'rich-text', isBody: true },
        ],
      },
      {
        name: 'statement',
        label: 'Artist statement',
        path: 'content/fi/statement',
        format: 'md',
        fields: [
          { name: 'title', label: 'Otsikko', type: 'string', required: true, isTitle: true },
          { name: 'description', label: 'SEO-kuvaus', type: 'string' },
          { name: 'body', label: 'Sisältö', type: 'rich-text', isBody: true },
        ],
      },
    ],
  },
});
