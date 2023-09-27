import { PromodElementType } from 'promod/built/interface';
import { BaseLayer } from './base.layer';
import { logInfo } from '../logging/index';

class BaseFragment extends BaseLayer {
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
  /**
   *
   * { login: null }
   */
  async click(requiredFieldsData) {
    logInfo(`Entity ${this.id} calls send keys`);

    await this.waitForPresent();

    const keys = Object.keys(requiredFieldsData); // ['login']

    for (const key of keys) {
      // await this['login'].click(null)
      await this[key].click(requiredFieldsData[key]);
    }
  }

  async get(requiredFieldsData) {
    logInfo(`Entity ${this.id} calls get`);
    await this.waitForPresent();

    const keys = Object.keys(requiredFieldsData);

    const result = {};

    for (const key of keys) {
      result[key] = await this[key].get(requiredFieldsData[key]);
      console.log(requiredFieldsData);

      logInfo(`Entity ${this.id} get method result`, result);
      return result;
    }
  }
  async isDisplayed(requiredFieldsData) {
    logInfo(`Entity ${this.id} calls is dysplayed`);

    const keys = Object.keys(requiredFieldsData);

    const result = {};

    for (const key of keys) {
      result[key] = await this[key].isDisplayed(requiredFieldsData[key]);
    }
    logInfo(`Entity ${this.id} is dysplayed method result`, result);
    return result;
  }
  async isSameContent(requiredFieldsData) {
    logInfo(`Entity ${this.id} calls is same content`);
    await this.waitForPresent();

    const keys = Object.keys(requiredFieldsData);

    for (const key of keys) {
      const nestedChildResult = await this[key].isSameContent(requiredFieldsData[key]);
      if (!nestedChildResult) {
        logInfo(`Entity ${this.id} is same content method result`, false);
        return false;
      }
    }
    logInfo(`Entity ${this.id} is same content method result`, true);
    return true;
  }

  async isSameVisibility(requiredFieldsData) {
    logInfo(`Entity ${this.id} calls is same visibility`);

    await this.waitForPresent();

    const keys = Object.keys(requiredFieldsData);

    for (const key of keys) {
      const nestedChildResult = await this[key].isSameVisibility(requiredFieldsData[key]);
      if (!nestedChildResult) {
        logInfo(`Entity ${this.id} is same visibility method result`, false);
        return false;
      }
    }
    logInfo(`Entity ${this.id} is same visibility method result`, true);
    return true;
  }
}

export { BaseFragment };
