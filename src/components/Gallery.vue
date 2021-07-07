<template>
  <div class="container title">
      <span>
          Gallery
      </span>
      <div class="goldenBorder"></div>

      <div class="imageContainer">
          Images go Here
      </div>
   </div>
</template>

<script>
export default {
  name: "Gallery",

  components: {},
};
</script>

<style scoped>
    .title {
    margin:auto;
    text-align: center;
    font-size: 2rem;
    padding-top: 50px;
    padding-bottom: 60px;
}

.imageContainer{
    margin:auto;
   text-align: center;
    background-color: gray;
    height: 200px;
    margin-top: 35px;
}

</style>
