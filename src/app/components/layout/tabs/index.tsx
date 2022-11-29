import {
	IonIcon,
	IonLabel,
	IonPage,
	IonRouterOutlet,
	IonSearchbar,
	IonTabBar,
	IonTabButton,
	IonTabs,
	IonTitle,
	IonToolbar,
} from '@ionic/vue'
import { home, person, personCircle, podium } from 'ionicons/icons'
import { Component, Computed, VueComponent } from 'vue3-oop'

export default class LoginPage extends VueComponent {
	@Computed()
	get Tabs() {
		return [
			{
				icon: home,
				label: '首页',
				href: '/index',
			},
			{
				icon: podium,
				label: '报表',
				href: '/podium',
			},
			{
				icon: personCircle,
				label: '我的',
				href: '/user',
			},
		]
	}

	render() {
		return (
			<IonPage ref='page'>
				<IonTabs>
					<IonRouterOutlet></IonRouterOutlet>
					<IonTabBar>
						{this.Tabs.map(v => (
							<IonTabButton href={v.href} tab={v.label}>
								<IonIcon icon={v.icon}></IonIcon>
								<IonLabel>{v.label}</IonLabel>
							</IonTabButton>
						))}
					</IonTabBar>
				</IonTabs>
			</IonPage>
		)
	}
}
