import { BaseFragment } from '../../../../lib';
import { Button} from '../../../../lib';
import {UserListFragment} from './usersList.fragment';
import {CreateNewUserFragment} from './create.new.user.fragment';
import { AdminUserFromFragment } from './admin.user.for.fragment';

class AdminPanelFragment extends BaseFragment {
  addNewUserFrag: Button;
  usersListFrag: UserListFragment;
  adminUserForm: AdminUserFromFragment
  constructor(selector, name) {
    super(selector, name);
    this.addNewUserFrag = this.init('.admin_new_user', 'Add new user panel fragment', CreateNewUserFragment);
    this.usersListFrag = this.init('.admin_user_list_root', 'Users list fragment', UserListFragment);
    this.adminUserForm = this.init('.admin_user_form', 'admin user form fragment', AdminUserFromFragment);

  }
}

export { AdminPanelFragment };
