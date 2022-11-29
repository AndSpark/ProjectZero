import ListExample from '@/app/components/in-pages/list'
import { IonPage } from '@ionic/vue'
import { VueComponent } from 'vue3-oop'

export default class LoginPage extends VueComponent {
	render() {
		return (
			<IonPage>
				<ion-nav root={ListExample}></ion-nav>
			</IonPage>
		)
	}
}
