import { BaseFragment } from '../../../../lib';
import { Button,Text } from '../../../../lib';

class HeaderFragment extends BaseFragment {
	greeting:Text
	analytics: Button
	combines: Button
	adminPanel: Button
	logout: Button
  constructor(selector, name) {
    super(selector, name);
		this.greeting  = this.init('h3','Greeting message',Text)
		this.analytics = this.init('xpath=.//button[text()="Analytics"]','Navigate to analytics',Button)
		this.combines = this.init('xpath=.//button[text()="Combines"]','Navigate to combines',Button)
		this.adminPanel= this.init('xpath=.//button[text()="Admin panel"]','Navigate to admin panel',Button)
		this.logout = this.init('xpath=.//button[text()="Logout"]','Navigate to logout',Button)
 }
}

export { HeaderFragment };
