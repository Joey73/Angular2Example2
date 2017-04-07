import { Example2ProjectPage } from './app.po';

describe('example2-project App', () => {
  let page: Example2ProjectPage;

  beforeEach(() => {
    page = new Example2ProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
