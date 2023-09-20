import { BaseFragment } from '../../../../lib';
import { Text, Button } from '../../../../lib';

class UserListFragment extends BaseFragment {
  user: Text;
  details: Button;

  constructor(selector, name) {
    super(selector, name);

    this.user = this.init('.user_item_username', 'user cell', Text);
    this.details = this.init('.button_details', 'Details', Button);
  }
}

export { UserListFragment };
