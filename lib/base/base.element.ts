import { compareToPattern } from 'sat-utils';
import { PromodElementType } from 'promod/built/interface';
import { BaseLayer } from './base.layer';
import { logInfo } from '../logging/index';

class Element extends BaseLayer {
  constructor(selector: string | PromodElementType, name: string) {
    super(selector, name);
  }
  async get() {
    logInfo(`Entity ${this.id} calls get`);
    await this.waitForDisplay();
    const result = await this.root.getText();
    logInfo(`Entity ${this.id} get method result`, result);
    return result;
  }

  async sendKeys(value: string | number) {
    logInfo(`Entity ${this.id} calls send keys`, value);
    await this.waitForDisplay();
    await this.root.sendKeys(value);
  }
  async click() {
    await this.waitForDisplay();
    logInfo(`Entity ${this.id} calls click`);
    await this.root.click();
  }

  async isSameContent(data) {
    logInfo(`Entity ${this.id} calls is same content`);
    const currentData = await this.get();

    const { result, message } = compareToPattern(currentData, data, { stringIncludes: true });

    logInfo(`Entity ${this.id} is same comparison results`, { result, message });

    return result;
  }

  async isDisplayed() {
    logInfo(`Entity ${this.id} calls isDisplayed`);
    return await this.root.isDisplayed();
  }
}

export { Element };
