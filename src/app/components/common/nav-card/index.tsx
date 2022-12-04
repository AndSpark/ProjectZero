import { IonCard, IonIcon, IonItem, IonLabel, IonList } from '@ionic/vue'
import { VueComponent } from 'vue3-oop'

export type NavCardProps = {
	list: {
		icon: string
		title: string
		href?: string
	}[]
}

export default class NavCard extends VueComponent<NavCardProps> {
	static defaultProps = ['list']
	render() {
		return (
			<IonCard>
				<IonList>
					{this.$props.list.map(v => (
						<IonItem button href={v.href}>
							<IonIcon class='ion-margin-end' size={'small'} icon={v.icon}></IonIcon>
							<IonLabel>{v.title}</IonLabel>
						</IonItem>
					))}
				</IonList>
			</IonCard>
		)
	}
}
