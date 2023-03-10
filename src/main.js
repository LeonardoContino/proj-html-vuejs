import { createApp } from 'vue'
import App from './App.vue'
import "@fontsource/montserrat";
import 'bootstrap/dist/css/bootstrap.min.css'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faYoutube, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'


library.add(faCartShopping, faStar, faFacebookF, faTwitter, faYoutube, faInstagram, faLinkedin)
createApp(App).component('font-awesome-icon',FontAwesomeIcon).mount('#app')
