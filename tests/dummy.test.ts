
import {browser} from '../lib';

import {Input,Button} from '../lib'

describe('dummy web ui test suit', () => {
	it.only('dummy web ui test', async () => {
		const url = 'http://localhost:4000';
		const userData = {username: 'admin', password: 'admin'}
    const username = new Input('[placeholder="User name"]', 'User name field');
    const password = new Input('[placeholder="Password"]', 'Password field');
    const login = new Button('.modal button', 'Login button');
    await browser.get(url);

    await username.sendKeys(userData.username);
		await password.sendKeys(userData.password);


   console.log(await username.get(), '<<<<<<<< USER NAME TEXT');
   console.log(await password.get(), '<<<<<<<< PASSWORD TEXT');
   console.log(await login.get(), '<<<<<<<< LOGIN TEXT');


    await browser.sleep(2500);
  });
});
