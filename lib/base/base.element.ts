
import { PromodElementType } from 'promod/built/interface';
import {BaseLayer} from './base.layer'
import {logInfo} from '../logging/index'



class Element extends BaseLayer {
  constructor(selector: string | PromodElementType, name: string) {
    super(selector, name);
  }
  async sendKeys(value: string | number) {
    await this.waitForDisplay();
    logInfo(`Entity ${this.id} calls send keys`, value)
    await this.root.sendKeys(value);
  }
  async click() {
    await this.waitForDisplay();
    logInfo(`Entity ${this.id} calls send keys`)
    await this.root.click();
  }
}

export {Element}