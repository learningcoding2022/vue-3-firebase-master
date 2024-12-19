const app = Vue.createApp({
    // data, functions template (template can get messy here so you should put it in html)
    // template: '<h2>I am the template</h2>',
    
    //function
    data() {
        //return object
        return {
            url:'https://www.thenetninja.co.uk',
            showBooks: true,
            books: [
                { title: 'name of the wind', author: 'patrick rothfuss', img:'assets/1.jpg', isFav: true },
                { title: 'name of the wind', author: 'patrick rothfuss', img:'assets/2.jpg', isFav: false },
                { title: 'name of the wind', author: 'patrick rothfuss', img:'assets/1.jpg', isFav: true },
            ]
        }
    },
    methods: {
        toggleShowBooks()
        {
            this.showBooks=!this.showBooks
        },
        toggleFav(book) {
            book.isFav = !book.isFav
        }
        },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
    })
  
  app.mount('#app')