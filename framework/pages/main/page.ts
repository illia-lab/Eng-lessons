import { BaseFragment } from '../../../lib';
import { HeaderFragment } from './fragments/header.fragment';
import { LoginFragment } from './fragments';
import { BasePage } from '../../../lib';
import { RegisterFragment } from './fragments/register.fragment';

class MainPage extends BasePage {
  header: HeaderFragment;
  login: LoginFragment;
  register: RegisterFragment;

  constructor() {
    super('#main_page', 'Main page');
    this.header = this.init('.main_header', 'Main page header', HeaderFragment);
    this.login = this.init('.login_form', 'Login form', LoginFragment);
    this.register = this.init('.registration_form', 'Register form', RegisterFragment);
  }
}

export { MainPage };
