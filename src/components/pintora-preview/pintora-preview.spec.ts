import { newSpecPage } from '@stencil/core/testing';
import { PintoraPreview } from './pintora-preview';

describe('pintora-preview', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [PintoraPreview],
      html: '<pintora-preview></pintora-preview>',
    });
    expect(root).toEqualHtml(`
      <pintora-preview>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </pintora-preview>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [PintoraPreview],
      html: `<pintora-preview first="Stencil" last="'Don't call me a framework' JS"></pintora-preview>`,
    });
    expect(root).toEqualHtml(`
      <pintora-preview first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </pintora-preview>
    `);
  });
});
