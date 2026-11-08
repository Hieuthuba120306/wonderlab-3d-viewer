import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)

// Báo cho Vue biết thẻ model-viewer là một custom element bên ngoài
app.config.compilerOptions.isCustomElement = tag => tag === 'model-viewer'

app.mount('#app')