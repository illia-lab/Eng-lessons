import { BaseFragment } from '../../../../lib';
import { Input, Button } from '../../../../lib';

class LoginFragment extends BaseFragment {
  username: Input;
  password: Input;
  login: Button;
  constructor(selector, name) {
    super(selector, name);


		this.username = this.init('[placeholder="User name"]', 'User name field', Input);

		this.password = this.init('[placeholder="Password"]', 'Password field', Input)

    this.login = this.init('.modal button','Login button', Button);
  }
}

export { LoginFragment };
