import * as MainPageActions from './pages/main/page.actions';
import * as machinesPageActions from './pages/machines/page.actions';
import * as AdminPageActions from '../framework/pages/admin/page.actions';

const I = {
  ...MainPageActions,
  ...machinesPageActions,
  ...AdminPageActions,
};

export { I };
