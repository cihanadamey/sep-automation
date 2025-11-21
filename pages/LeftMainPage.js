import { BasePage } from "./BasePage.js";

export class LeftMainPage extends BasePage {
  /**
   * @param {import('playwright').Page} page
   */
  constructor(page) {
    super(page);

    this.cydeoImageAtLeftWindow = page.locator(
      "(//img[@src = 'assets/images/logo.svg'])[2]"
    );

    this.secureCheckout = page.locator("//p[@class='checkout-title']");

    this.footerElements1 = page.locator(
      "//a[contains(@href, 'https://cydeo.com/')][1]"
    );

    this.footerElements2 = page.locator(
      "//a[contains(@href, 'https://cydeo.com/')][2]"
    );

    this.footerElements3 = page.locator(
      "//a[contains(@href, 'https://cydeo.com/')][3]"
    );

    this.footerElements4 = page.locator(
      "//a[contains(@href, 'https://cydeo.com/')][4]"
    );




    this.programName = page.locator("//p[@class='course-name']/a");
    
  }

  
}
