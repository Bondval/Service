import { ServicemanPage } from './app.po';

describe('serviceman App', () => {
  let page: ServicemanPage;

  beforeEach(() => {
    page = new ServicemanPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
