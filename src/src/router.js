import Vue         from 'vue';
import VueRouter   from 'vue-router';
import Home        from './views/Home.vue'
import Prefix      from "./views/Prefix";
import PrefixGames from "./views/PrefixGames";
import Patches     from "./views/Patches";
import Diagnostics from "./views/Diagnostics";

Vue.use(VueRouter);

const routes = [
    {
        path:      '/',
        name:      'Home',
        component: Home
    },
    {
        path:      '/prefix',
        name:      'Prefix',
        component: Prefix
    },
    {
        path:      '/games',
        name:      'PrefixGames',
        component: PrefixGames
    },
    {
        path:      '/patches',
        name:      'Patches',
        component: Patches
    },
    {
        path:      '/diagnostics',
        name:      'Diagnostics',
        component: Diagnostics
    },
];

export default new VueRouter({ routes });
