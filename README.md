## web

Repository for spacetypecontinuum.com.

Pages imported from pre-Next.js times are served directly as static pages; we use redirect rules in [next.config.js](next.config.js) to support this.

New pages are built directly using Next.js.

## Developing

```sh
npm install && npm run dev
```

## Directory Structure

```
└── pages           🤖 Individual website pages, routed based on their filename.
    └── _app.js        Defines the "wrapper" layout for all other pages.
└── components      🗂 Individual React components, used within pages. Helpful for breaking down your code :)
└── public          🔑 Raw HTML/CSS/JS and asset files
└── styles          🔀 Globally-imported CSS files
```
