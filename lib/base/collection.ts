import type {PromodElementType, PromodElementsType} from 'promod/built/interface';
import { logInfo } from '../logging/index';
import { $$ } from '../engine';
import { isNumber, isUndefined } from 'sat-utils';
export type IWaitOpts = {};
export type CollectionActionType <Where = any, Visible = any, Action = any> = {
  _action?: Action;
  _where?: Where;
  _visible?: Visible;
  _index?: number;
};

export type CollectionWaitingType = {};

class Collection {
  roots: PromodElementsType;
  id: string;
  instanceType;
  constructor(selector: string | PromodElementsType, name: string, CollectionItem) {
    this.roots = typeof selector === 'string' ? $$(selector) : selector;

    this.id = name;

    this.instanceType = CollectionItem;

    logInfo('Creation of the entity', { root: this.roots.selector, entityId: this.id });
  }

  private async getRequiredChildren({ _index, _where, _visible }: { [k: string]: any } = {}, firstOnly?: boolean) {
    // кількість елементів по заданому селектору
    const rootAmount = await this.roots.count();
    // const rootAmount = 10
    // _index = 10

    const requiredNestedChildren: any[] = [];

    //block(if) якщо сума елементів і індекса з мінусом 1 меньша за шуканий індекс кидаєм помилку
    if (isNumber(_index && rootAmount - 1 < _index)) {
      throw new Error(`Collection entity ${this.id} does not have so many items, current amount is ${rootAmount}`);
      //block(else if) якщо індекс це число ми шукаєм відповідний елемент нашому індексу а далі додаєм до масива елемент
    } else if (isNumber(_index)) {
      const collectionItem = new this.instanceType(this.roots.get(_index), `${this.id} ${_index}`);
      requiredNestedChildren.push(collectionItem);
      //block(else if) якщо _where is not undefined and _visible is not undefined ми за допомогою цикла пробігаємося по сумі елементів і шукаємо останні елемент в масиві елементів
    } else if (!isUndefined(_where) && !isUndefined(_visible)) {
      for (let i = 0; i < rootAmount; i++) {
        const collectionItem = new this.instanceType(this.roots.get(i), `${this.id} ${i}`);
        //block(if)
        if ((await collectionItem.isSameContent(_where)) && (await collectionItem.isSameVisibility(_visible))) {
          requiredNestedChildren.push(collectionItem);
          //block(if)
          if (firstOnly) {
            return requiredNestedChildren;
          }
        }
      }
      //block(else if)
    } else if (!isUndefined(_where)) {
      for (let i = 0; i < rootAmount; i++) {
        const collectionItem = new this.instanceType(this.roots.get(i), `${this.id} ${i}`);
        //block(if)
        if (await collectionItem.isSameContent(_where)) {
          requiredNestedChildren.push(collectionItem);
          //block(if)
          if (firstOnly) {
            return requiredNestedChildren;
          }
        }
      }
      //block(else if)
    } else if (!isUndefined(_visible)) {
      for (let i = 0; i < rootAmount; i++) {
        const collectionItem = new this.instanceType(this.roots.get(i), `${this.id} ${i}`);
        //block(if)
        if (await collectionItem.isSameVisibility(_visible)) {
          requiredNestedChildren.push(collectionItem);
          //block(if)
          if (firstOnly) {
            return requiredNestedChildren;
          }
        }
      }
      //block(else)
    } else {
      for (let i = 0; i < rootAmount; i++) {
        const collectionItem = new this.instanceType(this.roots.get(i), `${this.id} ${i}`);
        requiredNestedChildren.push(collectionItem);
        //block(if)
        if (firstOnly) {
          return requiredNestedChildren;
        }
      }
    }
    return requiredNestedChildren;
  }

  async isDisplayed(entryData: { [k: string]: any } = {}) {
    const { _action = null, ...rest } = entryData;
    logInfo(`Entity ${this.id} calls is displayed`);
    const children = await this.getRequiredChildren(rest);

    const result: any[] = [];
    for (const child of children) {
      result.push(await child.isDisplayed(_action));
    }
    logInfo(`Entity ${this.id} is displayed  method result`, result);
    return result;
  }

  async click(entryData: { [k: string]: any } = {}) {
    const { _action = null, ...rest } = entryData;
    logInfo(`Entity ${this.id} calls click`);
    const [child] = await this.getRequiredChildren(rest, true);
    await child.click(_action);
  }

  /**
   * get({ _index: 0,_action: {price: null}})
   * get({ _where: {workVolume: '13'},_action: {price: null}})
   */
  async get(entryData: { [k: string]: any } = {}) {
    const { _action = null, ...rest } = entryData;
    logInfo(`Entity ${this.id} calls  get`);
    const children = await this.getRequiredChildren(rest);

    const result: any[] = [];
    for (const child of children) {
      result.push(await child.get(_action));
    }
    logInfo(`Entity ${this.id} get  method result`, result);
    return result;
  }
}

export { Collection };
