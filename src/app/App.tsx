import {
	IonApp,
	IonIcon,
	IonLabel,
	IonPage,
	IonRouterOutlet,
	IonTabBar,
	IonTabButton,
	IonTabs,
	useIonRouter,
} from '@ionic/vue'
import { Component, Computed, Link, VueComponent } from 'vue3-oop'
import AuthService from './core/authentication/auth.service'
import TokenService from './core/authentication/token.service'
import { HttpService } from './core/http/http'
import RouterStart from './core/router'

@Component({
	providers: [HttpService, RouterStart, AuthService, TokenService],
})
export default class App extends VueComponent {
	render() {
		return (
			<IonApp>
				<IonRouterOutlet></IonRouterOutlet>
			</IonApp>
		)
	}
}
