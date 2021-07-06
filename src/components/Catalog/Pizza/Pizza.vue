<template>
  <div :class="[activetab === 0 ? 'show' : 'hide']">

    <div class="catalogItem" :key="pizza.id" v-for="pizza in pizzas">
      <div class="catalogImage">
        <img v-bind:src="pizza.image" class="img-fluid" /></div>
      <div class="nameOfItem">{{ pizza.name }}</div>
      <div class="description">{{ pizza.description }}</div>
      <div class="price">{{ pizza.price }}</div>
    </div>
    
  </div>
</template>

<script>
import pizzaCatalog from "../Pizza/pizza-menu";

export default {
  name: "PizzaCatalog",

  props: {
    activetab: Number,
  },

  data() {
    return {
      pizzas: pizzaCatalog(),
    };
  },
};
</script>

<style scoped>
@import url("../../Styles/menu.css");
</style>
