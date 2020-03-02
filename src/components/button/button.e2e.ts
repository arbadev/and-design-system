import { newE2EPage } from '@stencil/core/testing';

describe('and-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<and-button></and-button>');

    const element = await page.find('and-button');
    expect(element).toHaveClass('hydrated');
  });
});
