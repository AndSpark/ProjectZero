import { getCurrentApp, getCurrentInjector, Hook, VueService } from 'vue3-oop'
import type { Router } from 'vue-router'
import { createRouter, createWebHistory } from '@ionic/vue-router'
import { resolveInstances } from '@/app/utils/injection'

export class RouterService extends VueService {
	history = createWebHistory()
	router!: Router
	get currentRoute() {
		return this.router.currentRoute.value
	}
	app = getCurrentApp()!
	// 为了解决热更新循环引用,采用函数传参初始化
	initRoutes(routes: any[]) {
		this.router = createRouter({
			history: this.history,
			routes: [
				{
					path: '/',
					redirect: '/index',
					component: () => import('../../components/layout/tabs/index'),
					children: resolveInstances(routes),
				},
			],
		})

		this.app.use(this.router)
	}

	@Hook('BeforeUnmount')
	unmount() {
		this.history.destroy()
	}
}
