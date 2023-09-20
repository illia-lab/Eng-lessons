import { BasePage, Button } from '../../../lib';
import { AdminPanelFragment } from './fragments/adminPanel.fragment';
import { UserListFragment } from './fragments/usersList.fragment';
import { Collection } from '../../../lib';

class AdminPanelPage extends BasePage {
  adminPanel: AdminPanelFragment;
  userList: UserListFragment;
  usersListBtn;
  constructor() {
    super('#admin_page', 'admin panel page');
    this.usersListBtn = this.init('xpath=//*[text() = "Users list"]', 'Users list button', Button);
    this.adminPanel = this.init('.admin_user_list_root', 'Admin panel section', AdminPanelFragment);
    this.userList = this.init('.user_item', 'User list', Collection, UserListFragment);
  }
}

export { AdminPanelPage };
