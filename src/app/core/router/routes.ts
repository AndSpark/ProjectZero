import type { RouteRecordRaw } from 'vue-router'
declare const require: any

let routes: RouteRecordRaw[] = []

const rc = require.context('../../pages', true, /\.route\.ts$/)
rc.keys().forEach((m: any) => (routes = routes.concat(rc(m).default)))

export { routes }
