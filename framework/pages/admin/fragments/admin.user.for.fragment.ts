import { BaseFragment } from '../../../../lib';
import { Input, Button } from '../../../../lib';
import { CheckBox } from '../../../../lib/elements/checkbox';

class AdminUserFromFragment extends BaseFragment {
  userFormUserName: Input;
  userFormName: Input;
  userFormEmail: Input;
  userFormPassword: Input;
  userFormCheckBox: CheckBox;
  constructor(selector, name) {
    super(selector, name);
    this.userFormUserName = this.init('div:nth-child(1)', 'user form user name field', Input);
    this.userFormName = this.init('div:nth-child(2)', 'user form name field', Input);
    this.userFormEmail = this.init('div:nth-child(3)', 'user form email field', Input);
    this.userFormPassword = this.init('div:nth-child(4)', 'user form password field', Input);
    this.userFormCheckBox = this.init('[type="checkbox"]', 'user form check box', CheckBox);
  }
}
export { AdminUserFromFragment };


