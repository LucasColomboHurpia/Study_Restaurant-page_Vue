<template>
  <div :class="[activetab === 1 ? 'show' : 'hide']">

    <div class="catalogItem" :key="burguer.id" v-for="burguer in burguers">
      <div class="catalogImage">
        <img v-bind:src="burguer.image" class="img-fluid" /></div>
      <div class="nameOfItem">{{ burguer.name }}</div>
      <div class="description">{{ burguer.description }}</div>
      <div class="price">{{ burguer.price }}</div>
    </div>
    
  </div>
</template>

<script>
import burguerCatalog from "../Hamburguer/hamburguer-menu";

export default {
  name: "BurguerCatalog",

  props: {
    activetab: Number,
  },

  data() {
    return {
      burguers: burguerCatalog(),
    };
  },
};
</script>

<style scoped>
@import url("../../Styles/menu.css");
</style>
