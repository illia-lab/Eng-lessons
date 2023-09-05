import { Element } from "../base/base.element";
import {PromodElementType} from "promod/built/interface";
import { browser } from "../engine";

class Button extends Element{
	constructor(selector: string | PromodElementType, name: string) {
    super(selector, name);
	}
	async get() {
		await this.waitForDisplay()
		return await this.root.getText()
	}
}

export {Button}