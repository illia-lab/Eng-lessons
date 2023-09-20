import { Element } from "../base/base.element";
import {PromodElementType} from "promod/built/interface";
import {browser} from "../engine";
import {logInfo} from '../logging/index'

export type TextGetRes = string;
export type TextIsDispRes = boolean;
export type TextAction = null;

class Text extends Element{
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
throw new Error(`Text ${this.id} whith root selector ${this.root.selector} does not have send keys`)
	}
}

export {Text}