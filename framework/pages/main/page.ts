import {BaseFragment} from "../../../lib";
import {HeaderFragment} from "./fragments/header.fragment";
import { LoginFragment } from "./fragments";
import { BasePage} from '../../../lib';

class MainPage extends BasePage{
	header: HeaderFragment
	login: LoginFragment
	constructor() {
		super('#main_page', 'Main page')
		this.header = this.init('.main_header', 'Main page header', HeaderFragment)
		this.login = this.init('.login_form', 'Login form', LoginFragment)
	}
}

export {MainPage}