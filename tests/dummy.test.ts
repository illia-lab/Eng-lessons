import { expect } from 'chai';
import { browser, $$ } from '../lib';

import { Input, Button, Text, Collection } from '../lib';

describe('Filters suite', () => {
  it.only('[P] check that filter price work', async () => {
    const price = 808482;
    const url = 'http://localhost:4000';
    const userData = { username: 'admin', password: 'admin' };
    const username = new Input('[placeholder="User name"]', 'User name field');
    const password = new Input('[placeholder="Password"]', 'Password field');
    const login = new Button('.modal button', 'Login button');
    const pricesList = new Collection('.active.price', 'Machine price', Text)

    //TODO refactor
    const machinesPrices = $$('.active.price');

    const filterPrice = new Input('[placeholder="Price"]', 'Filter section price field');
    const filterButton = new Button('xpath=//button[text()="Filter"]', 'Filter section button');

    await browser.get(url);
    await username.sendKeys(userData.username);
    await password.sendKeys(userData.password);
    await login.click();
    await filterPrice.sendKeys(price);
    await filterButton.click();
    const result = await pricesList.get()
    result.forEach(function (priceTextValue) {
      expect(+priceTextValue <= price).to.equal(true);
    });

    await browser.sleep(5000);
  });
});
