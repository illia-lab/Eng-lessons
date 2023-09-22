import { CombineListRowFragment } from './fragments/combine.list.row';
import { BasePage } from '../../../lib/base/page';
import { Collection } from '../../../lib/base/collection';

class CombinesPage extends BasePage {
  combinesRow: CombineListRowFragment;
  constructor() {
    super('#combains_page', 'Combines page');

    this.combinesRow = this.init('.dynamic_table_row', 'Combines Row', Collection, CombineListRowFragment);
  }
}

export { CombinesPage };
