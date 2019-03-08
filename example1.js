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
    <h2>{{ msg2 }}</h2>
  </div>
  `,
  data: {
    msg: 'App 2 using Template string',
    msg2: 'second line of text'
  }
})
// // remove el: '#app1' and add the mount below
//app1.$mount('#app1')