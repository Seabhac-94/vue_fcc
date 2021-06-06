// VUE JS goes here

let app = new Vue({
    //options object
    el: '#app',
    data: {
        title: 'My Portfolio',
        //will not work, as you need to use directives
        titleHTML: `Zac Allen's <span class='badge'>Portfolio</span>`,
        alert: 'This is an alert message!',
        projects: [
            {title: 'Portfolio', desc: 'Lorem ipum'},
            {title: 'Twitter clone', desc: 'Lorem ipum'}
        ],
        dynamicClass: 'projects',
        dynamicID: 'projects_sections',
        disabled: true,
        attribute_name: 'href',
        url: 'https://google.com',
        event_name: 'click',
    },
    methods: {
        runFunction(){
            console.log('Test click function')
        }
    }
});