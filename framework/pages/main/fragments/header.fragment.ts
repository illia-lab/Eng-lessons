import { BaseFragment } from '../../../../lib';
import { Button } from '../../../../lib';

class HeaderFragment extends BaseFragment {
  login: Button;
  register: Button;
  constructor(selector, name) {
    super(selector, name);
    this.login = this.init('.user_buttons button:nth-child(1)', 'Login button', Button);
    this.register = this.init('.user_buttons button:nth-child(2)', 'Register button', Button);
  }
}

export { HeaderFragment };
