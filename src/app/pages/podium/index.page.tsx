import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue'
import { Hook, Mut, VueComponent } from 'vue3-oop'

export default class PodiumPage extends VueComponent {
	@Mut() page: any

	@Hook('Mounted')
	mount() {
		this.page = (this.$refs.page as any).$el
	}

	render() {
		return (
			<IonPage ref='page'>
				<IonHeader>
					<IonToolbar>
						<IonTitle>报表</IonTitle>
					</IonToolbar>
				</IonHeader>
				<IonContent fullscreen={true}>
					<IonTitle>哈哈哈哈哈</IonTitle>
					<div>ddsadasdwqd dwqdqw </div>
				</IonContent>
			</IonPage>
		)
	}
}
