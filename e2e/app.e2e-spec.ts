import { NgxSoundcloudPage } from './app.po';

describe('ngx-soundcloud App', function() {
  let page: NgxSoundcloudPage;

  beforeEach(() => {
    page = new NgxSoundcloudPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
