import type { PromodElementType, PromodElementsType } from 'promod/built/interface';
import { waitForCondition } from 'sat-utils';
import { logInfo } from '../logging/index';
import { $, $$, browser } from '../engine';
import { isNumber } from 'sat-utils';

class Collection {
	roots: PromodElementsType;
	id: string;
	collectionItem;
	constructor(selector: string | PromodElementsType, name: string, CollectionItem) {
		this.roots = typeof selector === 'string' ? $$(selector) : selector;
		this.id = name;
		this.collectionItem = CollectionItem;
		logInfo('Creation of the entity', {root: this.roots.selector, entityId: this.id});
	}

	async isDysplayed(entryData: {[k: string]: any} = {}) {
		const {_action = null, _where, _index} = entryData;
		logInfo(`Entity ${this.id} calls get`);
		const that = this;
		const rootElementAmount = await this.roots.count();
		let result;
		if (isNumber(_index) && rootElementAmount - 1 < _index) {
			throw new Error(
				` Collection entity ${this.id} does not have so many items,current amount is ${rootElementAmount}`,
			);
		} else if (isNumber(_index)) {
			const collectionItem = new that.collectionItem(this.roots.get(_index), `${that.id} ${_index}`);

			const getResult = await collectionItem.isDisplayed(_action);

			result = [getResult];
		}
		else {
			result = await this.roots.map(async function(item, index) {
				const collectionItem = new that.collectionItem(item, `${that.id} ${index}`);

				return await collectionItem.isDisplayed(_action);
			});
		}
    logInfo(`Entity ${this.id} get method result`, result);
    return result;
  }

  /**
   * get({ _index: 0,_action: {price: null}})
   * get({ _where: {workVolume: '13'},_action: {price: null}})
   */
  async get(entryData: { [k: string]: any } = {}) {
    const { _action = null, _where, _index } = entryData;
    logInfo(`Entity ${this.id} calls get`);
    const that = this;
    const rootElementAmount = await this.roots.count();
    let result;
    if (isNumber(_index) && rootElementAmount -1 < _index) {
      throw new Error(
        ` Collection entity ${this.id} does not have so many items,current amount is ${rootElementAmount}`,
      );
    } else if (isNumber(_index)) {
      const collectionItem = new that.collectionItem(this.roots.get(_index), `${that.id} ${_index}`);

      const getResult = await collectionItem.get(_action);

      result =  [getResult];
		} else if (_where) {
			const requiredNestedChildren: any[] = []
			for (let i = 0; i < rootElementAmount; i++){
				const collectionItem = new that.collectionItem(this.roots.get(i), `${that.id}, ${i}`);
				if (await collectionItem.isSameContent(_where)) {
					requiredNestedChildren.push(collectionItem)
				}
			}
			const results: any[] = [];
			for (const collectionItem of requiredNestedChildren) {
				results.push(await collectionItem.get(_action))
			}
			result = results
		} else {
       result = await this.roots.map(async function (item, index) {
        const collectionItem = new that.collectionItem(item, `${that.id} ${index}`);

        return await collectionItem.get(_action);
      });
    }

    logInfo(`Entity ${this.id} get method result`, result);
    return result;
  }
}

export { Collection };
