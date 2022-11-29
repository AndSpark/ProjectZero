import type { RouteRecordRaw } from 'vue-router'

let routes: RouteRecordRaw[] = []

const rc = require.context('../../pages', true, /\.route\.ts$/)
rc.keys().forEach(m => (routes = routes.concat(rc(m).default)))

export { routes }
