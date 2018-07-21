/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
const rclnodejs = require('rclnodejs').default;

Vue.use(BootstrapVue);

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

rclnodejs.init().then(() => {
  const node = rclnodejs.createNode('client_example_node');

  const client = node.createClient('example_interfaces/srv/AddTwoInts', 'add_two_ints');
  const request = {
    a: Math.floor(Math.random() * 100),
    b: Math.floor(Math.random() * 100),
  };

  console.log(`Sending: ${typeof request}`, request);
  client.sendRequest(request, (response) => {
    console.log(`Result: ${typeof response}`, response);
    rclnodejs.shutdown();
  });

  rclnodejs.spin(node);
}).catch((e) => {
  console.log(`Error: ${e}`);
});