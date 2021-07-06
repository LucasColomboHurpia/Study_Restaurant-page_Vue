<template>
  <div :class="[activetab === 3 ? 'show' : 'hide']">

    <div class="catalogItem" :key="beverage.id" v-for="beverage in Beverages">
      <div class="catalogImage">
        <img v-bind:src="beverage.image" class="img-fluid" /></div>
      <div class="nameOfItem">{{ beverage.name }}</div>
      <div class="description">{{ beverage.description }}</div>
      <div class="price">{{ beverage.price }}</div>
    </div>
    
  </div>
</template>

<script>
import beverageCatalog from "../Beverages/beverage-menu";

export default {
  name: "BeverageCatalog",

  props: {
    activetab: Number,
  },

  data() {
    return {
      Beverages: beverageCatalog(),
    };
  },
};
</script>

<style scoped>
@import url("../../Styles/menu.css");
</style>
