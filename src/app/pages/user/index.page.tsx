import NavList, { NavListProps } from '@/app/components/common/nav-card'
import ThemeSetting from '@/app/components/common/theme-setting'
import ThemeService from '@/app/core/theme/theme.service'
import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/vue'
import { settingsOutline } from 'ionicons/icons'
import { Component, Computed, injectService, VueComponent } from 'vue3-oop'

@Component()
export default class UserPage extends VueComponent {
	themeService = injectService(ThemeService)

	@Computed()
	get contentColor() {
		return this.themeService?.themeValue === 'light' ? 'light' : undefined
	}

	list: NavListProps['list'] = [
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
				<IonContent color={this.contentColor} fullscreen={true}>
					<NavList list={this.list}></NavList>
					<ThemeSetting></ThemeSetting>
				</IonContent>
			</IonPage>
		)
	}
}
