<template>
  <div :class="[activetab === 2 ? 'show' : 'hide']">

    <div class="catalogItem" :key="salad.id" v-for="salad in Salads">
      <div class="catalogImage">
        <img v-bind:src="salad.image" class="img-fluid" /></div>
      <div class="nameOfItem">{{ salad.name }}</div>
      <div class="description">{{ salad.description }}</div>
      <div class="price">{{ salad.price }}</div>
    </div>
    
  </div>
</template>

<script>
import saladCatalog from "../Salads/salads-menu";

export default {
  name: "SaladCatalog",

  props: {
    activetab: Number,
  },

  data() {
    return {
      Salads: saladCatalog(),
    };
  },
};
</script>

<style scoped>
@import url("../../Styles/catalog.css");
</style>
