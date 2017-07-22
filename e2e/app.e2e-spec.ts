import { BlogabetSrPage } from './app.po';

describe('blogabet-sr App', function() {
  let page: BlogabetSrPage;

  beforeEach(() => {
    page = new BlogabetSrPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
