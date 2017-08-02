import { Angular4WithCliS1Page } from './app.po';

describe('angular4-with-cli-s1 App', () => {
  let page: Angular4WithCliS1Page;

  beforeEach(() => {
    page = new Angular4WithCliS1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
