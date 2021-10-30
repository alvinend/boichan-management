import { createApp, Component } from "vue";
import App from "./App.vue";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Add FontAwesome
import {
  faUserSecret,
  faUser,
  faHome,
  faTasks,
  faMailBulk,
  faProjectDiagram,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret)
library.add(faUser)
library.add(faHome)
library.add(faTasks)
library.add(faMailBulk)
library.add(faProjectDiagram)
library.add(faSignOutAlt)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount("#app");
