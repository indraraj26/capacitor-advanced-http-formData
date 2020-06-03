import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Capacitor, Plugins } from '@capacitor/core';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss'],
})
export class AppComponent {
	constructor(
		private platform: Platform,
		private splashScreen: SplashScreen,
	) {
		this.initializeApp();
	}

	initializeApp() {
		this.platform.ready().then(() => {
			this.splashScreen.hide();
			if (!Capacitor.isPluginAvailable('StatusBar')) return;
			Plugins.StatusBar.setBackgroundColor({ color: '#adadad' });
		});
	}
}
