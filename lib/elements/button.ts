import { Element } from "../base/base.element";
import {PromodElementType} from "promod/built/interface";
import {logInfo} from '../logging/index'

class Button extends Element{
	constructor(selector: string | PromodElementType, name: string) {
    super(selector, name);
	}
	async get() {
		logInfo(`Entity ${this.id} calls get`)
		await this.waitForDisplay()
		const result = await this.root.getText()
		logInfo(`Entity ${this.id} get method result`, result)
		return result;
	}
	async sendKeys(value: string | number): Promise<void> {
		throw new Error(`Button ${this.id} whith root selector ${this.root.selector} does not have send keys`)
			}
}

export {Button}