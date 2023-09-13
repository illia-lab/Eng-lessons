
import {BasePage, Collection} from '../../../../lib';
import {FilterFragment} from './filter.fragment';
import {HeaderFragment} from './header.fragment';
import {MachineRowFragment} from './machine.row.fragment'

class MachinesPage extends BasePage{
	header: HeaderFragment
	filter: FilterFragment
	machinesList: MachineRowFragment
	constructor() {
		super('#table_page', 'Machines page')
		this.header = this.init('.header', 'Header section', HeaderFragment )
		this.filter = this.init('.filtering', 'Filter section', FilterFragment)
		this.machinesList = this.init('table.table-bordered:nth-child(2) > tbody:nth-child(2) > tr','Machine row list', Collection, MachineRowFragment)
	}
}

export {MachinesPage}