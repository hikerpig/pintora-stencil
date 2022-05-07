# pintora-preview

A web component to show [pintora](https://github.com/hikerpig/pintora) diagram preview.

This component will not load pintora lib by itself, you should either:

1. load @pintora/standalone UMD script to inject `pintora` to global namespace. This is recommended for simplicity.
2. or set pintora object to the component instance. See Example 2 below.

## Usage

### Example 1

See the [live demo on codepen](https://codepen.io/hikerpig/pen/xxYwXWM).

```html
<!-- inject pintora to global -->
<script src="https://unpkg.com/@pintora/standalone@latest/lib/pintora-standalone.umd.js"></script>

<!-- import pintora web components -->
<!-- you can even use async script, custom element will work even if dom nodes are loaded before the script -->
<script type="module" src="https://unpkg.com/pintora-stencil/dist/pintora-stencil/pintora-stencil.esm.js" async></script>

<pintora-preview>
  sequenceDiagram
    autonumber
    User->>+Pintora: render this
    activate Pintora
    loop Check input
    Pintora-->>Pintora: Has input changed?
    end
    Pintora-->>User: your figure here
    deactivate Pintora
</pintora-preview>
```

### Example 2

See the [live demo on codepen](https://codepen.io/hikerpig/pen/oNEbxwJ).

```html
<!-- import pintora web components -->
<script type="module" src="https://unpkg.com/pintora-stencil/dist/pintora-stencil/pintora-stencil.esm.js"></script>

<script type="module">
  import pintoraStandalone from 'https://cdn.skypack.dev/@pintora/standalone';
  document.querySelectorAll('pintora-preview').forEach((ele) => {
    // set `pintora` property
    ele.pintora = pintoraStandalone;
  })
</script>

<pintora-preview>
erDiagram
  @config({
    "themeConfig": {
      "theme": "dark"
    },
    "er": {
      "edgeType": "ortho"
    }
  })
  CUSTOMER {
    int id PK
    int address FK
  }
  CUSTOMER ||--o{ ORDER : places
  ORDER ||--|{ LINE-ITEM : contains
  CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
</pintora-preview>
```


<!-- Auto Generated Below -->


## Properties

| Property     | Attribute     | Description                                                     | Type      | Default     |
| ------------ | ------------- | --------------------------------------------------------------- | --------- | ----------- |
| `pintora`    | `pintora`     | pintora api object, otherwise `globalThis.pintora` will be used | `any`     | `undefined` |
| `showSource` | `show-source` |                                                                 | `boolean` | `undefined` |


## Methods

### `refresh() => Promise<void>`

Update source and refresh preview

#### Returns

Type: `Promise<void>`




## Slots

| Slot        | Description                                                       |
| ----------- | ----------------------------------------------------------------- |
| `"default"` | Default slot, put pintora DSL code in it and you will see preview |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
