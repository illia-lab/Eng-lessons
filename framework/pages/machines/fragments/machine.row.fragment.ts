import { BaseFragment } from '../../../../lib';
import { Button,Text } from '../../../../lib';

class MachineRowFragment extends BaseFragment {
	manufacturer:Text
	workVolume: Text
	length: Text
	width: Text
	weight: Text
	power: Text
	price:Text
  constructor(selector, name) {
    super(selector, name);
		this.manufacturer = this.init('td:nth-child(1)','Manufacturer cell',Text)
		this.workVolume  = this.init('td:nth-child(2)','Workvolume cell ',Text)
		this.length = this.init('td:nth-child(3)','Length cell',Text)
		this.width = this.init('td:nth-child(4)','Width cell',Text)
		this.weight = this.init('td:nth-child(5)','Weight cell',Text)
		this.power = this.init('td:nth-child(6)','Power cell',Text)
		this.price = this.init('td:nth-child(7)','Price cell',Text)
 }
}

export { MachineRowFragment };
