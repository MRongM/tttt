import { createApp, h } from 'vue'
import App from './App.jsx'
import { createPinia } from 'pinia'

function main() {
    const app = createApp({
        render() {
            return h(App)
        }
    })
    app.use(createPinia())
    const divRef = document.createElement('div')
    document.body.appendChild(divRef)
    app.mount(divRef)
}

main()