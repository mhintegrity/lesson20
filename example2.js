/*{ <div id="components-demo">
<button-counter></button-counter>
</div> }

// Define a new component called button-counter
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})

var comp = new Vue({
  el: '#components-demo'
})
*/

var app1 = new Vue({
    el: '#app1',
    data: {
      msg: 'App 1 using html file'
    }
  })
  var app2 = new Vue({
    el: '#app2',
    template: `
    <div>
      <h1>{{ msg }}</h1>
      <h2>{{ reverseMsg2 }}</h2>
    </div>
    `,
    data: {
      msg: 'App 2 using Template string',
      msg2: 'second line of text'
    },
    computed: {
        reverseMsg2: function() {
            return this.msg2.split(' ').reverse().join(' ');
        }
    }
  })
  
  //app1.$mount('#app1')