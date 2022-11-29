import { IonBackButton, IonButton, IonButtons, IonNav } from '@ionic/vue'
import { App } from 'vue'

export function AddComponent(app: App) {
	app.component('IonButtons', IonButtons)
	app.component('IonButton', IonButton)
	app.component('IonNav', IonNav)
	app.component('IonBackButton', IonBackButton)
}
