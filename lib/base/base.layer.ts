import type { PromodElementType } from "promod/built/interface";
import {waitForCondition} from "sat-utils";
import { $,$$,browser } from "../engine";


class BaseLayer {
  root: PromodElementType;
  id: string;

  constructor(selector: string | PromodElementType, name: string) {
    this.root = typeof selector === 'string' ? $(selector) : selector;
    this.id = name;
  }

  async waitForPreset() {
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
    const that = this;
    await waitForCondition(
      async () => {
        return await that.root.isDisplayed();
      },
      {
        timeout: 5000,
        message: () => {
          return `${that.constructor.name} ${that.id} should be displayed in DOM`;
        },
      },
    );
  }
}

export {BaseLayer}