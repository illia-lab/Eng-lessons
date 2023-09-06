import { expect } from 'chai';
import { browser } from '../lib';

import { Input, Button } from '../lib';

describe('dummy web ui test suit', () => {
  it.only('dummy web ui test', async () => {
    const url = 'http://localhost:4000';
    const userData = { username: 'admin', password: 'admin' };
    const username = new Input('[placeholder="User name"]', 'User name field');
    const password = new Input('[placeholder="Password"]', 'Password field');
    const login = new Button('.modal button', 'Login button');
    await browser.get(url);

    await username.sendKeys(userData.username);
    await password.sendKeys(userData.password);

    expect(await username.get()).to.equal(userData.username);
    expect(await password.get()).to.equal(userData.password + '10');
    await browser.sleep(2500);
  });
});
