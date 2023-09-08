import type { PromodElementType } from "promod/built/interface";
import {waitForCondition} from "sat-utils";
import {logInfo} from '../logging/index'
import { $,$$,browser } from "../engine";


class BaseLayer {
  root: PromodElementType;
  id: string;

  constructor(selector: string | PromodElementType, name: string) {
    this.root = typeof selector === 'string' ? $(selector) : selector;
    this.id = name;
    logInfo('Creation of the entity', {root: this.root.selector, entityId: this.id})
  }

  async waitForPresent() {
    logInfo(`Entity ${this.id} is waiting for present`)
    const that = this;
    await waitForCondition(
      async () => {
        return await that.root.isPresent();
      },
      {
        timeout: 5000,
        message: () => {
          return `${that.constructor.name} ${that.id} should be presented in DOM`;
        },
      },
    );
  }
  async waitForDisplay() {
    logInfo(`Entity ${this.id} is waiting for display`)
    const that = this;
    await waitForCondition(
      async () => {
        return await that.root.isDisplayed();
      },
      {
        timeout: 5000,
        message: (timeout, error = 'without unexpected errors') => {
          return `${that.constructor.name} ${that.id} should be displayed in DOM timeout: ${timeout} error: ${error}`;
        },
      },
    );
  }
}

export {BaseLayer}