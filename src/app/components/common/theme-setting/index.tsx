import ThemeService from '@/app/core/theme/theme.service'
import {
	IonCard,
	IonCardHeader,
	IonCardSubtitle,
	IonIcon,
	IonItem,
	IonLabel,
	IonList,
	IonRadio,
	IonRadioGroup,
} from '@ionic/vue'
import { cubeOutline, moon, sunnyOutline } from 'ionicons/icons'
import { injectService, VueComponent } from 'vue3-oop'

export default class ThemeSetting extends VueComponent {
	themeService = injectService(ThemeService)

	render() {
		return (
			<IonCard class='ion-padding-bottom'>
				<IonCardHeader>
					<IonCardSubtitle>外观</IonCardSubtitle>
				</IonCardHeader>
				<IonList>
					<IonRadioGroup
						value={this.themeService?.theme}
						onIonChange={e => this.themeService?.switchTheme(e.detail.value)}
					>
						<IonItem>
							<IonIcon icon={sunnyOutline} class='ion-margin-end'></IonIcon>
							<IonLabel>浅色</IonLabel>
							<IonRadio value='light'></IonRadio>
						</IonItem>
						<IonItem>
							<IonIcon icon={moon} class='ion-margin-end'></IonIcon>
							<IonLabel>深色</IonLabel>
							<IonRadio value='dark'></IonRadio>
						</IonItem>
						<IonItem>
							<IonIcon icon={cubeOutline} class='ion-margin-end'></IonIcon>
							<IonLabel>自动</IonLabel>
							<IonRadio value='system'></IonRadio>
						</IonItem>
					</IonRadioGroup>
				</IonList>
			</IonCard>
		)
	}
}
