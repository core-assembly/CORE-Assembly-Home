import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faBook,
    faHome,
    faPencilAlt,
    faSignInAlt,
    faUserCircle
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// FontAwesome
library.add(faHome, faBook, faPencilAlt, faSignInAlt, faUserCircle)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// Convenience item - this.$http
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
