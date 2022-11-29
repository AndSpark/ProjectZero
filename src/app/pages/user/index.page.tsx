import { IonCard, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue'
import { Component, VueComponent } from 'vue3-oop'

@Component()
export default class LoginPage extends VueComponent {
	render() {
		return (
			<IonPage>
				<IonHeader>
					<IonToolbar>
						<IonTitle>用户</IonTitle>
					</IonToolbar>
				</IonHeader>
				<IonContent fullscreen={true}>
					<IonCard></IonCard>
				</IonContent>
			</IonPage>
		)
	}
}
