new Vue({
    el: '#app1',
    data: {
        firstName: '',
        middleName: '',
        lastName: '',
        fullName: 'first middle last'
    },
    watch: {
        firstName: function(){
            this.fullName = `${this.firstName} ${this.middleName} ${this.lastName}`;
        },
        middleName: function(){
            this.fullName = `${this.firstName} ${this.middleName} ${this.lastName}`;
        },
        lastName: function(){
            this.fullName = `${this.firstName} ${this.middleName} ${this.lastName}`;
        }
    }
})