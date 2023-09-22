import { BaseFragment } from '../../../../lib';
import { Text } from '../../../../lib/elements/text';

class CombineListRowFragment extends BaseFragment {
  producerAndBrand: Text;
  combineMass: Text;
  combineHeight: Text;
  combineClass: Text;
  combinePrice: Text;

  constructor(selector, name) {
    super(selector, name);

    this.producerAndBrand = this.init('div:nth-child(1)', 'producer and brand', Text);
    this.combineMass = this.init('div:nth-child(2)', 'machine mass', Text);
    this.combineHeight = this.init('div:nth-child(3)', 'machine height', Text);
    this.combineClass = this.init('div:nth-child(4)', 'machine class', Text);
    this.combinePrice = this.init('div:nth-child(5)', 'machine price', Text);
  }
}

export { CombineListRowFragment };
