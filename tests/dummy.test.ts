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

    await I.onMachinesPageClickMachineRowList({
      _visible: { price: true, workVolume: false },
      _where: { price: '10', weight: '15' },
    });

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
  it('Check that admin checkBox equals true', async () => {
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
    console.log(result);

    const { adminUserForm } = await I.onAdminPanelPageGetDataFromAdminPanelSection({
      adminUserForm: { userFormCheckBox: null },
    });
    console.log(adminUserForm);

    await browser.sleep(5000);
  });
  it('check that combine row producerAndBrand info fit to the expected resultx', async () => {
    const userData = { username: 'admin', password: 'admin' };
    const url = 'http://localhost:4000';
    await browser.get(url);

    await I.onMainPageClickMainPageHeader({ login: null });

    await I.onMainPageSetValuesToLoginForm({ username: userData.username, password: userData.password });

    await I.onMainPageClickLoginForm({ login: null });

    await I.onMachinesPageClickHeaderSection({ combines: null });

    const combData = await I.onCombinesPageGetDataFromCombinesRow({ _action: { producerAndBrand: null }, _index: 2 });

    console.log(combData);

    const expectedRes = [{ producerAndBrand: 'Комбайн (Foton) DG200' }];

    expect(combData).to.deep.equal(expectedRes);
  });
  it('check that combine row price info fit to the expected resultx', async () => {
    const userData = { username: 'admin', password: 'admin' };
    const url = 'http://localhost:4000';
    await browser.get(url);

    await I.onMainPageClickMainPageHeader({ login: null });

    await I.onMainPageSetValuesToLoginForm({ username: userData.username, password: userData.password });

    await I.onMainPageClickLoginForm({ login: null });

    await I.onMachinesPageClickHeaderSection({ combines: null });

    const combData = await I.onCombinesPageGetDataFromCombinesRow({ _action: { combinePrice: null }, _index: 2 });

    console.log(combData);

    const expectedRes = [{ combinePrice: '34836' }];

    expect(combData).to.deep.equals(expectedRes);
  });
  it('check that combine row weight info fit to the expected resultx', async () => {
    const userData = { username: 'admin', password: 'admin' };
    const url = 'http://localhost:4000';
    await browser.get(url);

    await I.onMainPageClickMainPageHeader({ login: null });

    await I.onMainPageSetValuesToLoginForm({ username: userData.username, password: userData.password });

    await I.onMainPageClickLoginForm({ login: null });

    await I.onMachinesPageClickHeaderSection({ combines: null });

    const combData = await I.onCombinesPageGetDataFromCombinesRow({ _action: { combineMass: null }, _index: 2 });

    console.log(combData);

    const expectedRes = [{ combineMass: '9945' }];

    expect(combData).to.deep.equals(expectedRes);
  });
  it('check that combine row height info fit to the expected resultx', async () => {
    const userData = { username: 'admin', password: 'admin' };
    const url = 'http://localhost:4000';
    await browser.get(url);

    await I.onMainPageClickMainPageHeader({ login: null });

    await I.onMainPageSetValuesToLoginForm({ username: userData.username, password: userData.password });

    await I.onMainPageClickLoginForm({ login: null });

    await I.onMachinesPageClickHeaderSection({ combines: null });

    const combData = await I.onCombinesPageGetDataFromCombinesRow({ _action: { combineHeight: null }, _index: 2 });

    console.log(combData);

    const expectedRes = [{ combineHeight: '6888' }];

    expect(combData).to.deep.equals(expectedRes);
  });
  it('check that combine row class info fit to the expected resultx', async () => {
    const userData = { username: 'admin', password: 'admin' };
    const url = 'http://localhost:4000';
    await browser.get(url);

    await I.onMainPageClickMainPageHeader({ login: null });

    await I.onMainPageSetValuesToLoginForm({ username: userData.username, password: userData.password });

    await I.onMainPageClickLoginForm({ login: null });

    await I.onMachinesPageClickHeaderSection({ combines: null });

    const combData = await I.onCombinesPageGetDataFromCombinesRow({ _action: { combineClass: null }, _index: 0 });

    console.log(combData);

    const expectedRes = [{ combineClass: '7' }];

    expect(combData).to.deep.equals(expectedRes);
  });
});
