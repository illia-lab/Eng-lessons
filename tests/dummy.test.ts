import { getRandomString } from 'sat-utils';

import { expect } from 'chai';

import { provider } from '../framework';

const { browser, I } = provider.interactions;

describe('Filters suite', () => {
  it('[P] check that filter price work', async () => {
    const price = 808482;

    const url = 'http://localhost:4000';

    const userData = { username: 'admin', password: 'admin' };

    await browser.get(url);

    await I.onMainPageSetValuesToLoginForm({ username: userData.username, password: userData.password });

    await I.onMainPageClickLoginForm({ login: null });

    await I.onMachinesPageSetValuesToFilterSection({ price: price });

    await I.onMachinesPageClickFilterSection({ filterButton: null });

    console.log('!!!!!!!!!!!!!!');

    const results = await I.onMachinesPageGetSeveralRandomFieldValuesFromMachinesList('price', 10);

    console.log(results);

    await I.onMachinesPageClickMachineRowList({
      _where: { manufacturer: 'Demi-mix' },

      _action: { manufacturer: null },
    });

    results.forEach(function (MachinePrice) {
      expect(+MachinePrice <= price).to.equal(true);
    });

    await browser.sleep(10000);
  });

  it('Register and after try to login as a user', async () => {
    const userData = { username: 'admin', password: 'admin' };

    const regData = { username: getRandomString(7, { letters: true }), name: 'test', email: 'test', password: 'test' };

    const url = 'http://localhost:4000';

    await browser.get(url);

    await I.onMainPageClickMainPageHeader({ register: null });

    await I.onMainPageSetValuesToRegisterForm({
      username: regData.username,

      name: regData.name,

      email: regData.email,

      password: regData.password,
    });

    await I.onMainPageClickRegisterForm({ registerButton: null });

    await browser.runNewBrowser();

    await browser.get(url);

    await I.onMainPageSetValuesToLoginForm({ username: userData.username, password: userData.password });

    await I.onMainPageClickLoginForm({ login: null });

    await I.onMachinesPageClickHeaderSection({ adminPanel: null });

    const result = await I.onAdminPanelPageGetDataFromUserList({ _action: { user: null } });

    console.log(result);

    expect(result.map(({ user }) => user?.trim()).includes(regData.username)).to.eq(true);
  });
  it.only('Check that admin checkBox equals true', async () => {
    const userData = { username: 'admin', password: 'admin' };
    const url = 'http://localhost:4000';
    await browser.get(url);

    await I.onMainPageClickMainPageHeader({ login: null });

    await I.onMainPageSetValuesToLoginForm({ username: userData.username, password: userData.password });

    await I.onMainPageClickLoginForm({ login: null });

    await I.onMachinesPageClickHeaderSection({ adminPanel: null });

    await browser.sleep(2500);

    await I.onAdminPanelPageClickPageElements({ usersListBtn: null });

    await I.onAdminPanelPageClickUserList({ _action: { details: null } });

    const result = await I.onAdminPanelPageGetDataFromAdminPanelSection({ adminUserForm: { userFormEmail: null } });

    const { adminUserForm } = await I.onAdminPanelPageGetDataFromAdminPanelSection({
      adminUserForm: { userFormCheckBox: null, userFormName: null,userFormEmail:null,userFormPassword:null,userFormUserName:null },
    });
    await browser.sleep(5000);
  });
});
