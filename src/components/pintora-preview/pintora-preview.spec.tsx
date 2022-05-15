import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { PintoraPreview } from './pintora-preview';
import pintora from '@pintora/standalone';

describe('pintora-preview', () => {
  it('renders', async () => {
    const { root, waitForChanges } = await newSpecPage({
      components: [PintoraPreview],
      template() {
        const content = `
        sequenceDiagram
          autonumber
          User->>+Pintora: render this
        `;
        return <pintora-preview pintora={pintora}>{content}</pintora-preview>;
      },
    });
    return waitForChanges().then(() => {
      expect(root.querySelector('.actor')).toBeTruthy();
    });
  });

  it('get config from element data-* attribute', async () => {
     const { root, waitForChanges } = await newSpecPage({
      components: [PintoraPreview],
      template() {
        const content = `
        sequenceDiagram
          autonumber
          User->>+Pintora: render this
        `;
        return <pintora-preview pintora={pintora} data-renderer="canvas">
          {content}
        </pintora-preview>;
      },
    });
    return waitForChanges().then(() => {
      expect(root.querySelector('canvas')).toBeTruthy();
    });
  })
});
