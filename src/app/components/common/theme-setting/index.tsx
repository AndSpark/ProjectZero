import ThemeService from '@/app/core/theme/theme.service'
import {
	IonCard,
	IonCardHeader,
	IonCardSubtitle,
	IonContent,
	IonIcon,
	IonItem,
	IonLabel,
	IonList,
	IonListHeader,
	IonRadio,
	IonRadioGroup,
	IonText,
	IonTitle,
} from '@ionic/vue'
import { cubeOutline, moon, sunnyOutline } from 'ionicons/icons'
import { injectService, VueComponent } from 'vue3-oop'

export default class ThemeSetting extends VueComponent {
	themeService = injectService(ThemeService)

	render() {
		return (
			<>
				<IonText color={'medium'} class='ion-padding-start ion-margin-start'>
					<sub>外观</sub>
				</IonText>
				<IonList inset>
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
			</>
		)
	}
}
