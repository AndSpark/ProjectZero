import { IonIcon, IonItem, IonLabel, IonList } from '@ionic/vue'
import { VueComponent } from 'vue3-oop'

export type NavListProps = {
	list: {
		icon: string
		title: string
		href?: string
	}[]
}

export default class NavList extends VueComponent<NavListProps> {
	static defaultProps = ['list']
	render() {
		return (
			<IonList inset>
				{this.$props.list.map(v => (
					<IonItem button href={v.href}>
						<IonIcon class='ion-margin-end' size={'small'} icon={v.icon}></IonIcon>
						<IonLabel>{v.title}</IonLabel>
					</IonItem>
				))}
			</IonList>
		)
	}
}
