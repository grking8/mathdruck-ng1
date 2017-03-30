import { MathdruckNg1Page } from './app.po';

describe('mathdruck-ng1 App', () => {
  let page: MathdruckNg1Page;

  beforeEach(() => {
    page = new MathdruckNg1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
