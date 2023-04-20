import Vue from 'vue';
import App from './App.vue'
import MyComp from './components/MyComp.vue'

Vue.component ('My-Comp', MyComp)

new Vue({
    el: '#app',
    render: h => h(App)
});