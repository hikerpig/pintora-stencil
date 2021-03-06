import { Component, Prop, h, Method, Element, State, Watch } from '@stencil/core';
// import type pintora from '@pintora/standalone'

// export type PintoraAPIType = Pick<typeof pintora, 'renderContentOf'>;

/**
 * @pintora/stadalone type
 */
export type PintoraAPIType = any;

/**
 * @slot default - Default slot, put pintora DSL code in it and you will see preview
 */
@Component({
  tag: 'pintora-preview',
  styleUrl: 'pintora-preview.css',
  shadow: false,
})
export class PintoraPreview {
  @Element() el: HTMLElement;

  @Prop() showSource: boolean;
  /**
   * pintora api object, otherwise `globalThis.pintora` will be used
   */
  @Prop() pintora: PintoraAPIType;

  @State() source: string;

  private resultElement!: HTMLDivElement;
  private sourceElement!: HTMLDivElement;

  /**
   * Update source and refresh preview
   */
  @Method()
  async refresh() {
    this.source = this.getSourceByElement();
    this.updatePreview();
  }

  connectedCallback() {
    this.source = this.el.textContent;
  }

  componentDidLoad() {
    if (this.source) {
      this.updatePreview();
    }
  }

  @Watch('pintora')
  onPintorChange() {
    this.refresh();
  }

  @Watch('source')
  onSourceChange() {
    this.updatePreview();
  }

  getSourceByElement() {
    const sourceElement = this.sourceElement || this.el.querySelector('.pintora-preview__source');
    if (sourceElement) {
      return sourceElement.textContent;
    }
  }

  updatePreview() {
    let pintora: PintoraAPIType = this.pintora || globalThis.pintora;
    if (pintora && (pintora as any).default) pintora = (pintora as any).default;

    // console.log('pintora is', pintora)
    if (pintora && this.resultElement) {
      this.resultElement.innerHTML = '';

      const source = this.source
      try {
        pintora.renderContentOf(this.el as HTMLDivElement, {
          resultContainer: this.resultElement,
          getContent() {
            return source
          },
        });
      } catch (error) {
        console.warn('[pintora-preview] error', error);
      }
    }
  }

  render() {
    return (
      <div class="pintora-preview__content">
        <div
          class="pintora-preview__source"
          style={{
            display: this.showSource ? 'block' : 'none',
          }}
          ref={ele => (this.sourceElement = ele)}
        >
          <slot />
        </div>
        <div
          class="pintora-preview__result"
          ref={ele => {
            this.resultElement = ele;
          }}
        ></div>
      </div>
    );
  }
}
