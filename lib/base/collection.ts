import type { PromodElementType, PromodElementsType } from "promod/built/interface";
import {waitForCondition} from "sat-utils";
import {logInfo} from '../logging/index'
import { $,$$,browser } from "../engine";


class Collection  {
  roots: PromodElementsType;
  id: string;
	collectionItem
  constructor(selector: string | PromodElementsType, name: string, CollectionItem) {
    this.roots = typeof selector === 'string' ? $$(selector) : selector;
		this.id = name;
		this.collectionItem = CollectionItem
    logInfo('Creation of the entity', {root: this.roots.selector, entityId: this.id})
	}

	async get() {
		logInfo(`Entity ${this.id} calls get`)
		const that = this
		const result = await this.roots.map(async function (item, index) {
      const price = new that.collectionItem(item, `${that.id} ${index}`);

      return await price.get();
    });
		logInfo(`Entity ${this.id} get method result`, result)
		return result;
	}

}

export {Collection}