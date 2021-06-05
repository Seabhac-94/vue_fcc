// VUE JS goes here

let app = new Vue({
    //options object
    el: '#app',
    data: {
        alert: 'This is an alert message!',
        projects: [
            {title: 'Portfolio', desc: 'Lorem ipum'},
            {title: 'Twitter clone', desc: 'Lorem ipum'}
        ]
    }

});