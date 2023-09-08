import {BaseFragment} from "../../../../lib";
import { Input, Button} from '../../../../lib';

class FilterFragment extends BaseFragment{
	manufacturer: Input
	workVolume: Input
	price: Input
	filterButton: Button
	constructor() {
		super('.filtering', 'Machine filters')
		this.manufacturer = new Input(this.root.$('[placeholder="Manufacturer"]'), 'Manufacturer field');
    this.workVolume = new Input(this.root.$('[placeholder="Work volume"]'), 'Work Volume field');
    this.price = new Input(this.root.$('[placeholder="Price"]'), 'Price field');
    this.filterButton = new Button(this.root.$('xpath=//button[text()="Filter"]'), 'Filter button');
	}
}

export {FilterFragment}