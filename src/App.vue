<template>
  <span>
    <Header />
    <Carousel />
    <RestaurantDisplay />
    <Menu/>
  </span>
</template>

<script>
import Carousel from "./components/Carousel.vue";
import Header from "./components/Header.vue";
import RestaurantDisplay from './components/RestaurantDisplay.vue'
import Menu from "./components/Catalog.vue"


export default {
  name: "App",

  components: {
    Header,
    Carousel,
    RestaurantDisplay,
     Menu,
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
