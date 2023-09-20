import { BasePage } from '../../../lib';
import { AdminPanelFragment } from './fragments/adminPanel.fragment';
import { UserListFragment } from './fragments/usersList.fragment';
import { Collection } from '../../../lib';

class AdminPanelPage extends BasePage {
  adminPanel: AdminPanelFragment;
  userList: UserListFragment;
  constructor() {
    super('#admin_page', 'admin panel page');
    this.adminPanel = this.init('.view_toggler', 'Admin panel section', AdminPanelFragment);
    this.userList = this.init('.user_item', 'User list', Collection, UserListFragment);
  }
}

export { AdminPanelPage };
