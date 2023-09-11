import {BaseFragment} from "../../../../lib";
import { Input, Button} from '../../../../lib';

class FilterFragment extends BaseFragment{
	manufacturer: Input
	workVolume: Input
	price: Input
	filterButton: Button
	constructor(selector, name) {
		super(selector,name)
		this.manufacturer = this.init('[placeholder="Manufacturer"]', 'Manufacturer field', Input);
    this.workVolume = this.init('[placeholder="Work volume"]', 'Work Volume field', Input);
    this.price = this.init('[placeholder="Price"]', 'Price field', Input);
    this.filterButton = this.init('xpath=//button[text()="Filter"]', 'Filter button', Button);
	}
}

export {FilterFragment}