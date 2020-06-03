import { Component } from '@angular/core';
import { ApiListingService } from '../services/api.service';
import { Platform } from '@ionic/angular';
import {
	Modals,
	ActionSheetOptionStyle,
	Capacitor,
	Browser,
} from '@capacitor/core';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage {
	detail = {
		first_name: 'indraraj',
		mobile: '32432423423',
		age: null,
		comp: undefined,
		hobbies: [1, 2, 3],
		checkout: '',
	};
	constructor(private _api: ApiListingService, private _platform: Platform) {}

	onPostData(data) {
		this._platform.ready().then(() => {
			console.log(data);
			this._api
				.postSomeData(data)
				.then((data) => {
					console.log(data, 'got Data');
				})
				.catch((e) => console.log(e, 'catchBlock error'));
		});
	}

	async showAlert() {
		if (!Capacitor.isPluginAvailable('Modals')) return;
		let alertRet = await Modals.alert({
			title: 'Stop',
			message: 'this is an error',
		});
	}

	async showConfirm() {
		if (!Capacitor.isPluginAvailable('Modals')) return;
		let confirmRet = await Modals.confirm({
			title: 'Confirm',
			message: "Are you sure you'd like to press the red button?",
		});
		console.log('Confirm ret', confirmRet);
	}

	async showPrompt() {
		if (!Capacitor.isPluginAvailable('Modals')) return;
		let promptRet = await Modals.prompt({
			title: 'Hello',
			message: "What's your name?",
		});
		console.log('Prompt ret', promptRet);
	}

	async showActions() {
		if (!Capacitor.isPluginAvailable('Modals')) return;
		let promptRet = await Modals.showActions({
			title: 'Photo Options',
			message: 'Select an option to perform',
			options: [
				{
					title: 'Upload',
				},
				{
					title: 'Share',
				},
				{
					title: 'Remove',
					style: ActionSheetOptionStyle.Destructive,
				},
			],
		});
		console.log('You selected', promptRet);
	}

	async openUrl() {
		if (Capacitor.isPluginAvailable('Browser')) {
			await Browser.open({
				url: 'http://capacitor.ionicframework.com/',
			});
			Browser.addListener('browserFinished', (err, result) => {
				console.log(err, result, 'browserFinished');
				if (err) {
					return console.warn(
						'[Browser-Finished] Something went wrong!',
					);
				}
				console.log(result, 'Browser Finished Listen Result');
			});
			Browser.addListener('browserPageLoaded', (err, result) => {
				console.log(err, result, 'BrowserPageLoad');
				if (err) {
					return console.warn(
						'[Browser-PageLoad] Something went wrong!',
					);
				}
				console.log(result, 'Browser PageLoad Listen Result');
			});
		} else {
			console.log('capacitor browser is not available');
		}
	}
}
