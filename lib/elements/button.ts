import { Element } from "../base/base.element";
import {PromodElementType} from "promod/built/interface";

class Button extends Element{
	constructor(selector: string | PromodElementType, name: string) {
    super(selector, name);
	}
	async sendKeys(value: string | number): Promise<void> {
		throw new Error(`Button ${this.id} whith root selector ${this.root.selector} does not have send keys`)
			}
}

export {Button}