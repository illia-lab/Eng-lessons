import { BaseFragment } from '../../../../lib';
import {Input, Button} from '../../../../lib';
import { CheckBox } from '../../../../lib/elements/checkbox';

class CreateNewUserFragment extends BaseFragment {
	username: Input
	name: Input
	email: Input
	password: Input
	createNewUserButton: CheckBox
	adminCheckBox: Button
	addNewUserBtn: Button
	constructor(selector, name) {
		super(selector, name);
		this.addNewUserBtn = this.init('button:nth-child(1)', 'Add new user button', Button);
		this.username = this.init('[placeholder="User name"]', 'User name field', Input);
    this.name = this.init('[placeholder="Name"]', 'Name field', Input);
    this.email = this.init('[placeholder="Email"]', 'Email field', Input);
		this.password = this.init('[placeholder="Password"]', 'Password field', Input);
		this.adminCheckBox = this.init('.admin_new_user > div > form > div:nth-child(5) > input', 'Admin checkBox', CheckBox);
    this.createNewUserButton = this.init('.admin_new_user > div > button', 'Password field', Button);
  }
}

export { CreateNewUserFragment };
