window.Vue = require('vue').default;
import Vuetify from "./plugins/vuetify.plugin";
import App from "./components/App";

const app = new Vue({
    template: "<App/>",
    render: h => h(App),
    vuetify: Vuetify,
});
export default app;