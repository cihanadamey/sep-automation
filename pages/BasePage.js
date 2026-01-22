import { BrowserUtility } from '../utilities/BrowserUtility.js';

export class BasePage {

  /**
   * @param {import('playwright').Page} page
   */
  constructor(page) {
    this.page = page;

  }
  
  async login() {
  const username = "automation-user";
  const password = "123abc";

  const code = Buffer
    .from(`${username}:${password}`)
    .toString("base64");

  await this.page.setExtraHTTPHeaders({
    Authorization: `Basic ${code}`,
  });

  await this.page.goto("https://qa.sep.tdtm.cydeo.com/taws");

  await BrowserUtility.verify_title(this.page, "Checkout | Cydeo");
  await this.page.waitForLoadState("networkidle");
}

}
