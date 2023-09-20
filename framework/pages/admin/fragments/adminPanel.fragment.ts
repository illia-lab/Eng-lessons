import { BaseFragment } from '../../../../lib';
import { Input, Button } from '../../../../lib';

class AdminPanelFragment extends BaseFragment {
  addNewUser: Button;
  usersList: Button;
  constructor(selector, name) {
    super(selector, name);
    this.addNewUser = this.init('button:nth-child(1)', 'Add new user button', Button);
    this.usersList = this.init('button:nth-child(2)', 'Users list button', Button);
  }
}

export { AdminPanelFragment };
