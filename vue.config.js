const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
	devServer: {
		// https: true,
		proxy: {
			'/api': {
				target: 'https://nbzf.lujingkeji.com/api',
				changeOrigin: true,
				pathRewrite: { '^/api': '' },
			},
		},
	},
})
