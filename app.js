const app = Vue.createApp({
    // data, functions template (template can get messy here so you should put it in html)
    // template: '<h2>I am the template</h2>',
    
    //function
    data() {
        //return object
        return {
            showBooks: true,
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45
        }
    },
    methods: {
        toggleShowBooks()
        {
            this.showBooks=!this.showBooks
        }
        }
    })
  
  app.mount('#app')