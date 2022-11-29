import { CapacitorConfig } from '@capacitor/cli'
import { KeyboardResize, KeyboardStyle } from '@capacitor/keyboard'

const config: CapacitorConfig = {
	appId: 'com.example.easyapp',
	appName: 'easy-app',
	webDir: 'dist',
	bundledWebRuntime: false,
	// server: {
	// 	url: 'http://192.168.2.105:8100',
	// },
	server: {
		url: 'http://192.168.31.51:8100',
	},
	plugins: {
		CapacitorHttp: {
			enabled: true,
		},
		Keyboard: {
			resize: KeyboardResize.None,
		},
	},
}

export default config
