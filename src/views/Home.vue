<template>
  <div>
    <!-- template categries -->
    <v-container class="ma-0 pa-0" grid-list-sm>
      <div class="text-right">
        <v-btn small text to="/categories" class="blue--text">
          All Categories <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </div> 
      <v-layout wrap>
        <v-flex v-for="(category) in categories" :key="'category-'+category.id" xs6>
          <v-card :to="'/category/'+ category.slug">
            <v-img
              :src="getImage('/categories/'+category.image)"
              class="white--text"
            >
              <v-card-title 
                class="fill-height align-end"
                v-text="category.name"
              ></v-card-title>
            </v-img>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- template books -->
    <v-container class="ma-0 pa-0 mt-2" grid-list-sm>
      <div class="text-right">
        <v-btn small text to="/books" class="blue--text">
          All Books <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </div> 
      <v-layout wrap>
        <v-flex v-for="(book) in books" :key="`book-`+book.id" xs6>
          <book-item :book="book" />
        </v-flex>
      </v-layout>
    </v-container>

  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld';


export default {


  created(){
    // EndPoint Data Category
  console.log('get data categories')
  this.axios.get('/categories/random/2') // <== jadi ginis
    .then((response) => {
        let { data } = response.data
        this.categories = data // <== ini gaes
    })
    .catch((error) => {
        let { responses } = error
        console.log(responses)
  })

  // EndPoint Data Books
  this.axios.get('/books/top/4')
  .then((response) => {
      let { data } = response.data
      this.books = data
  })
  .catch((error) => {
      let { responses } = error
      console.log(responses)
  })
},

  components: {
    HelloWorld,
    BookItem: () => import(/* webpackChunkName: "book-item" */ '@/components/BookItem.vue')
  },
  data: () => ({
    categories: [],
    books: []
  }),
  
};
</script>
