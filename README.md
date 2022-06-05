## web

Repository for [spacetypeco.com](https://spacetypeco.com).

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

## Deployment

Changes to the main branch are automatically deployed by Github Actions to Github Pages.
