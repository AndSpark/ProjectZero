import {
	IonButtons,
	IonContent,
	IonHeader,
	IonInput,
	IonItem,
	IonItemGroup,
	IonLabel,
	IonModal,
	IonPage,
	IonSelect,
	IonSelectOption,
	IonTitle,
	IonToolbar,
} from '@ionic/vue'
import { Hook, Mut, VueComponent } from 'vue3-oop'

export default class FormExample extends VueComponent {
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
						<ion-buttons slot='start'>
							<ion-back-button defaultHref='/index' text='返回'></ion-back-button>
						</ion-buttons>
						<IonTitle>上报</IonTitle>
					</IonToolbar>
				</IonHeader>
				<IonContent fullscreen={true}>
					<IonItemGroup>
						<IonItem>
							<IonLabel position={'fixed'}>姓名</IonLabel>
							<IonInput placeholder='请输入当事人姓名'></IonInput>
						</IonItem>
						<IonItem>
							<IonLabel position={'fixed'}>手机号码</IonLabel>
							<IonInput placeholder='请输入手机号码'></IonInput>
						</IonItem>
						<IonItem>
							<IonLabel position={'fixed'}>号牌种类</IonLabel>
							<IonSelect placeholder='请选择号牌种类'>
								<IonSelectOption value=''>No Game Console</IonSelectOption>
								<IonSelectOption value='nes'>NES</IonSelectOption>
								<IonSelectOption value='n64'>Nintendo64</IonSelectOption>
								<IonSelectOption value='ps'>PlayStation</IonSelectOption>
								<IonSelectOption value='genesis'>Sega Genesis</IonSelectOption>
								<IonSelectOption value='saturn'>Sega Saturn</IonSelectOption>
								<IonSelectOption value='snes'>SNES</IonSelectOption>
							</IonSelect>
						</IonItem>
						<ion-button style='margin-top:12px' id='open-modal' expand='block'>
							查看文书
						</ion-button>
						<IonModal ref='modal' trigger='open-modal' presenting-element={this.page}>
							<IonHeader>
								<IonToolbar>
									<IonTitle>文书</IonTitle>
									<Ion-Buttons slot='end' onClick={() => (this.$refs.modal as any).$el.dismiss()}>
										关闭
									</Ion-Buttons>
								</IonToolbar>
							</IonHeader>
							<IonContent>
								<div>
									<div style='text-align: center;'>
										<h1 style='font-size: 20px; margin: 0px;'>公安交通管理简易程序处罚决定书</h1>
										<div style='text-align: left;'>
											编号： 3301081701027110
											<br />
											被处罚人： 测试
											<br />
											机动车驾驶证档案编号： 无<br />
											机动车驾驶证或居民身份证号码： 330282199701053715
											<br />
											发证机关： 无<br />
											准驾车型： 无<br />
											联系方式： 13777041196
											<br />
											车辆牌号： 23783122
											<br />
											车辆类型： 电动自行车
											<br />
										</div>
									</div>
								</div>
							</IonContent>
						</IonModal>
					</IonItemGroup>
				</IonContent>
			</IonPage>
		)
	}
}
