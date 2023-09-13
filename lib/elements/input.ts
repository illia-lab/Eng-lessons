import { Element } from '../base/base.element';
import { PromodElementType } from 'promod/built/interface';
import { browser } from '../engine';
import { logInfo } from '../logging';

export type InputGetRes = boolean;
export type InputIsDispRes = string;
export type InputSendKeys = string;
export type InputAction = null;

class Input extends Element {
  constructor(selector: string | PromodElementType, name: string) {
    super(selector, name);
  }
  async get() {
    await this.waitForDisplay();
    logInfo(`Entity ${this.id} calls get`);
    const result = await browser.executeScript((element) => {
      return element.value;
    }, this.root.getEngineElement());
    logInfo(`Entity ${this.id} get method result`, result);
    return result;
  }
}

export { Input };
