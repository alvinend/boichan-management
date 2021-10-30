import { createApp, Component } from "vue";
import App from "./App.vue";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Add FontAwesome
import { faUserSecret, faUser } from '@fortawesome/free-solid-svg-icons'
library.add(faUserSecret)
library.add(faUser)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount("#app");
