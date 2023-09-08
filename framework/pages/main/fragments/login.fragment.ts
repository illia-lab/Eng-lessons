import {BaseFragment} from "../../../../lib";
import { Input, Button} from '../../../../lib';

class LoginFragment extends BaseFragment{
	username: Input
	password: Input
	login: Button
	constructor() {
		super('.login_form', 'Login form')
		this.username = new Input(this.root.$('[placeholder="User name"]'), 'User name field');
    this.password = new Input(this.root.$('[placeholder="Password"]'), 'Password field');
    this.login = new Button(this.root.$('.modal button'), 'Login button');
	}
}

export {LoginFragment}