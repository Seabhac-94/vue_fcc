// VUE JS goes here

let app = new Vue({
    //options object
    el: '#app',
    data: {
       firstName: 'Zac',
       lastName: 'Allen'
    },
    methods: {
        getFullName(){
            return this.firstName + " " + this.lastName;
        }
    }
});