# Pintora Web Components

[![](https://img.shields.io/npm/v/pintora-stencil?color=ff8150&label=pintora-stencil)](https://www.npmjs.com/package/pintora-stencil)


This is a project for building a standalone Web Component using Stencil.

Available components and their instructions:

- [pintora-preview](https://github.com/hikerpig/pintora-stencil/tree/main/src/components/pintora-preview)
  - A [quick demo on codepen](https://codepen.io/hikerpig/pen/xxYwXWM)

Stencil generates 100% standards-based Web Components that run in any browser supporting the Custom Elements v1 spec. They work in any major framework or with no framework at all.

## Getting Started

To start building a new web component using Stencil, clone this repo to a new directory:

```bash
git clone https://github.com/hikerpig/pintora-stencil.git pintora-stencil
cd pintora-stencil
```

and run:

```bash
pnpm install
pnpm start
```

To build the component for production, run:

```bash
pnpm run build
```

To run the unit tests for the components, run:

```bash
pnpm test
```

Need help? Check out our docs [here](https://stenciljs.com/docs/my-first-component).

## Using this component

There are three strategies we recommend for using web components built with Stencil.

### Script tag

- Put a script tag similar to this `<script type='module' src='https://unpkg.com/pintora-stencil@latest/dist/index.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### Node Modules

- Run `npm install pintora-stencil --save`
- Put a script tag similar to this `<script type='module' src='node_modules/pintora-stencil/dist/index.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc
