import { alertController } from '@ionic/vue'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { Injectable } from 'injection-js'
import AbstractInterceptor, { AxiosRequest } from './abstract-interceptor'

@Injectable()
export default class ErrorInterceptor implements AbstractInterceptor {
	interceptor(
		request: AxiosRequestConfig<any>,
		next: AxiosRequest
	): Promise<AxiosResponse<any, any>> {
		return next(request).catch(err => {
			alertController
				.create({
					header: '提示',
					subHeader: '请求出错了',
					message: err.toString(),
					buttons: ['好的'],
				})
				.then(alert => alert.present())
			return err
		})
	}
}
