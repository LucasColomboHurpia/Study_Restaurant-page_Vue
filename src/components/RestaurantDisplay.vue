<template>
  <div class="container title">
    <span> Our Restaurant </span>
    <div class="goldenBorder"></div>

    <div class="imageContainer container flex-wrap">
    
      <expandable-image class="img-fluid  restaurantImg" :src="require('../assets/Inner Pictures/res2.jpg')"/>
      <expandable-image class="img-fluid  restaurantImg" :src="require('../assets/Inner Pictures/res4.jpg')"/>
      <expandable-image class="img-fluid  restaurantImg" :src="require('../assets/Inner Pictures/res5.jpg')"/> 
    </div>
  </div>
</template>

<script>
import Vue from "vue";
//https://github.com/TahaSh/vue-expandable-image/
import VueExpandableImage from "vue-expandable-image";
Vue.use(VueExpandableImage);

export default {
  name: "RestaurantDisplay",

  components: {},

  /* data() {}, */
};
</script>

<style scoped>
.title {
  margin: auto;
  text-align: center;
  font-size: 2rem;
  padding-top: 50px;
  padding-bottom: 60px;
}

.imageContainer {
  margin: auto;
  text-align: center;
  height:max-content;
  margin-top: 35px;
  display: flex;
}

.restaurantImg{
  width: 280px;
  height: auto;
  margin: auto;
  border: 1px solid black;
  margin-bottom: 15px;

}
 @media only screen and (max-width: 768px) {.restaurantImg{width: 130px; }}

</style>