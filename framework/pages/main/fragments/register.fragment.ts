import { BaseFragment } from '../../../../lib';
import { Input, Button } from '../../../../lib';

class RegisterFragment extends BaseFragment {
  username: Input;
  name: Input;
  email: Input;
  password: Input;
  registerButton: Button;
  constructor(selector, name) {
    super(selector, name);
    this.username = this.init('[placeholder="User name"]', 'User name field', Input);
    this.name = this.init('[placeholder="Name"]', 'Name field', Input);
    this.email = this.init('[placeholder="Email"]', 'Email field', Input);
    this.password = this.init('[placeholder="Password"]', 'Password field', Input);
    this.registerButton = this.init('.modal button', 'Register button', Button);
  }
}

export { RegisterFragment };
