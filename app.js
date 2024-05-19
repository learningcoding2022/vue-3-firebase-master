const app = Vue.createApp({
    // data, functions template (template can get messy here so you should put it in html)
    // template: '<h2>I am the template</h2>',
    
    //function
    data() {
        //return object
        return {
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45
        }
    }

    })
  
  app.mount('#app')