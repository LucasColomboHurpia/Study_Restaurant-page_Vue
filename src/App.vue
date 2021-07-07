<template>
  <span>
    <Header />
    <Carousel />
    <RestaurantDisplay />
    <Catalog/>
    <ContactForm/>
<!--     <Gallery/>
 -->  </span>
</template>

<script>
import Carousel from "./components/Carousel.vue";
import Header from "./components/Header.vue";
import RestaurantDisplay from './components/RestaurantDisplay.vue'
import Catalog from "./components/Catalog.vue"
import ContactForm from "./components/Contactform.vue"
/* import Gallery from "./components/Gallery.vue"
 */
export default {
  name: "App",

  components: {
    Header,
    Carousel,
    RestaurantDisplay,
    Catalog,
    ContactForm,
/*     Gallery */
  },
  
};
</script>

<style>
body {
  background-color: gray;
}

.goldenBorder{
    border-bottom: 1px solid gold;
        margin:auto;
    text-align: center; 
    width: 75px;
    height: 10px;
}
</style>
