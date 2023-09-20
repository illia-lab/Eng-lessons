import { Element } from '../base/base.element';
import { logInfo } from '../logging';
import { browser } from '../engine';

export type CheckBoxGetRes = boolean;
export type CheckBoxIsDispRes = boolean;
export type CheckBoxSendKeys = boolean;
export type CheckBoxAction = null;

class CheckBox extends Element {
  constructor(selector, name) {
    super(selector, name);
  }

  async sendKeys(data: boolean) {
    logInfo(`Entity ${this.id} calls send keys`, data);
    if ((await this.get()) !== data) {
      await this.root.click();
    }
  }

  async get() {
    await this.waitForDisplay();
    logInfo(`Entity ${this.id} calls get`);
    const result = await browser.executeScript((element) => {
      return element.checked;
    }, this.root.getEngineElement());
    logInfo(`Entity ${this.id} get method result`, result);

    return result;
  }
}

export { CheckBox };
