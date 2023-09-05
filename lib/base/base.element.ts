
import { PromodElementType } from 'promod/built/interface';
import {BaseLayer} from './base.layer'



class Element extends BaseLayer {
  constructor(selector: string | PromodElementType, name: string) {
    super(selector, name);
  }
  async sendKeys(value: string | number) {
    await this.waitForDisplay();
    await this.root.sendKeys(value);
  }
  async click() {
    await this.waitForDisplay();
    await this.root.click();
  }
}

export {Element}