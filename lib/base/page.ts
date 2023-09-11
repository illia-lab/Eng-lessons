import { PromodElementType } from 'promod/built/interface';
import { BaseLayer } from './base.layer';
import {logInfo} from '../logging/index';

class BasePage extends BaseLayer {
  constructor(selector: string | PromodElementType, name: string) {
    super(selector, name);
  }

  async sendKeys(requiredFieldsData) {
    logInfo(`Entity ${this.id} calls send keys`);

    await this.waitForPresent();

    const keys = Object.keys(requiredFieldsData);

    for (const key of keys) {
      await this[key].sendKeys(requiredFieldsData[key]);
    }
  }
  async click(requiredFieldsData) {
    logInfo(`Entity ${this.id} calls send keys`);

    await this.waitForPresent();

    const keys = Object.keys(requiredFieldsData);

    for (const key of keys) {
      await this[key].click(requiredFieldsData[key]);
    }
  }
  async get(requiredFieldsData): Promise <{[k: string]: any}> {
    logInfo(`Entity ${this.id} calls get`);
    await this.waitForPresent();

    const keys = Object.keys(requiredFieldsData);

    const result = {};

    for (const key of keys) {
      result[key] = await this[key].get(requiredFieldsData[key]);
    }
    logInfo(`Entity ${this.id} get method result`, result);
    return result;
  }
  async isDysplayed(requiredFieldsData) {
    logInfo(`Entity ${this.id} calls is dysplayed`);

    const keys = Object.keys(requiredFieldsData);

    const result = {};

    for (const key of keys) {
      result[key] = await this[key].isDysplayed(requiredFieldsData[key]);
    }
    logInfo(`Entity ${this.id} is dysplayed method result`, result);
    return result;
  }
}

export { BasePage };
