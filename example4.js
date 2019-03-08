Vue.component('input-contact', {
  data: function () {
    return {
      contactName: ''
    }
  },
  template: `
      <input type="text" v-model="contactName" placeholder="Contact Name">
    `
})

new Vue({
  el: '#components-demo'
})