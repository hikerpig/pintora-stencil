import { newE2EPage } from '@stencil/core/testing';

describe('pintora-preview', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<pintora-preview></pintora-preview>');
    const element = await page.find('pintora-preview');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<pintora-preview></pintora-preview>');
    const component = await page.find('pintora-preview');
    const element = await page.find('pintora-preview >>> div');
    expect(element.textContent).toEqual(`Hello, World! I'm `);

    component.setProperty('first', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James`);

    component.setProperty('last', 'Quincy');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

    component.setProperty('middle', 'Earl');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
  });
});
