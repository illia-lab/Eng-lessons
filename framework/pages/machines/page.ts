import { BasePage, Collection } from '../../../lib';
import { FilterFragment } from './fragments/filter.fragment';
import { HeaderFragment } from './fragments/header.fragment';
import { MachineRowFragment } from './fragments/machine.row.fragment';
import { AdminPanelFragment } from '../admin/fragments/adminPanel.fragment';

class MachinesPage extends BasePage {
  header: HeaderFragment;
  filter: FilterFragment;
  machinesList: MachineRowFragment;
  adminPanel: AdminPanelFragment;
  constructor() {
    super('#table_page', 'Machines page');
    this.adminPanel = this.init('#admin_page', 'Admin panel section', AdminPanelFragment);
    this.header = this.init('.header', 'Header section', HeaderFragment);
    this.filter = this.init('.filtering', 'Filter section', FilterFragment);
    this.machinesList = this.init(
      'table.table-bordered:nth-child(2) > tbody:nth-child(2) > tr',
      'Machine row list',
      Collection,
      MachineRowFragment,
    );
  }
}

export { MachinesPage };
