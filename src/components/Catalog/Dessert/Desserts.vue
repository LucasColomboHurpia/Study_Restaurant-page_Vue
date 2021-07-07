<template>
  <div :class="[activetab === 4 ? 'show' : 'hide']">

    <div class="catalogItem" :key="dessert.id" v-for="dessert in Desserts">
      <div class="catalogImage">
        <img v-bind:src="dessert.image" class="img-fluid" /></div>
      <div class="nameOfItem">{{ dessert.name }}</div>
      <div class="description">{{ dessert.description }}</div>
      <div class="price">{{ dessert.price }}</div>
    </div>
    
  </div>
</template>

<script>
import dessertCatalog from "../Dessert/desserts-menu";

export default {
  name: "DessertCatalog",

  props: {
    activetab: Number,
  },

  data() {
    return {
      Desserts: dessertCatalog(),
    };
  },
};
</script>

<style scoped>
@import url("../../Styles/catalog.css");
</style>
