import { CapacitorHttp, HttpHeaders, HttpResponseType } from '@capacitor/core'
import { AxiosPromise, AxiosRequestConfig } from 'axios'

export function capacitorHttpAdapter(config: AxiosRequestConfig): AxiosPromise {
	return new Promise((resolve, reject) => {
		CapacitorHttp.request({
			url: (config.baseURL || '') + config.url,
			method: config.method,
			params: config.params,
			data: config.data,
			headers: config.headers as HttpHeaders,
			/**
			 * How long to wait to read additional data. Resets each time new
			 * data is received
			 */
			// readTimeout: config.timeout,
			/**
			 * How long to wait for the initial connection.
			 */
			connectTimeout: config.timeout,
			/**
			 * Sets whether automatic HTTP redirects should be disabled
			 */
			// disableRedirects?: boolean;
			/**
			 * Extra arguments for fetch when running on the web
			 */
			// webFetchExtra?: RequestInit;
			/**
			 * This is used to parse the response appropriately before returning it to
			 * the requestee. If the response content-type is "json", this value is ignored.
			 */
			responseType: config.responseType as HttpResponseType,
			/**
			 * Use this option if you need to keep the URL unencoded in certain cases
			 * (already encoded, azure/firebase testing, etc.). The default is _true_.
			 */
			shouldEncodeUrlParams: true,
		})
			.then(res => {
				resolve({
					...res,
					statusText: res.data,
					config,
				})
			})
			.catch(err => {
				reject(err)
			})
	})
}
