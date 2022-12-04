import NavCard, { NavCardProps } from '@/app/components/common/nav-card'
import ThemeSetting from '@/app/components/common/theme-setting'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue'
import { settingsOutline } from 'ionicons/icons'
import { Component, VueComponent } from 'vue3-oop'

@Component()
export default class UserPage extends VueComponent {
	list: NavCardProps['list'] = [
		{
			title: '设置',
			icon: settingsOutline,
		},
	]

	render() {
		return (
			<IonPage>
				<IonHeader>
					<IonToolbar>
						<IonTitle>我的</IonTitle>
					</IonToolbar>
				</IonHeader>
				<IonContent fullscreen={true}>
					<NavCard list={this.list}></NavCard>
					<ThemeSetting></ThemeSetting>
				</IonContent>
			</IonPage>
		)
	}
}
