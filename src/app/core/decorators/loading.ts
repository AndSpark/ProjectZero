import { loadingController } from '@ionic/vue'
import { decoratorMethod } from './help'

export default function Loading(message = '正在加载中', duration = 0) {
	return decoratorMethod((fn: () => Promise<any>) => {
		loadingController.create({ message, duration }).then(v => v.present())
		const res = fn()
		res.finally(() => {
			loadingController.dismiss()
		})
		return res
	})
}
