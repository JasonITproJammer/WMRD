import { WMRDPage } from './app.po';

describe('wmrd App', function() {
  let page: WMRDPage;

  beforeEach(() => {
    page = new WMRDPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
