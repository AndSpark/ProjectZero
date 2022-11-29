import {
	IonBackButton,
	IonButton,
	IonButtons,
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardTitle,
	IonContent,
	IonHeader,
	IonNavLink,
	IonPage,
	IonTitle,
	IonToolbar,
} from '@ionic/vue'
import { VueComponent } from 'vue3-oop'
import FormExample from '../form'

export default class ListExample extends VueComponent {
	render() {
		return (
			<IonPage>
				<IonHeader>
					<IonToolbar>
						<IonTitle>首页</IonTitle>
					</IonToolbar>
				</IonHeader>
				<IonContent fullscreen={true}>
					<IonCard>
						<IonCardHeader>
							<IonCardTitle>111</IonCardTitle>
						</IonCardHeader>
						<IonCardContent>
							<div>ldsadjuonw dqwdwqdihjk 123.,21,312</div>
							<IonNavLink routerDirection={'forward'} component={FormExample}>
								<IonButton>上报</IonButton>
							</IonNavLink>
						</IonCardContent>
					</IonCard>
				</IonContent>
			</IonPage>
		)
	}
}
