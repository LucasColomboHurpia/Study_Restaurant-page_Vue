<template>
  <div class="container title">
    <span> Our Menu </span>
    <div class="goldenBorder"></div>

    <div class="menu mb-5">
      <b-tabs content-class="mt-3" v-model="tabIndex">

        <b-tab title="Pizzas" :title-link-class="linkClass(0)">
          <!-- <template #title> I'm <i>custom</i><strong>title</strong> </template> -->
                <div class="imageContainer">
          Images go Here
      </div>
        </b-tab>

        <b-tab title="Burgers" :title-link-class="linkClass(1)">
                <div class="imageContainer">
          Images go Here
      </div>
        </b-tab>

        <b-tab title="Salads" :title-link-class="linkClass(2)">
                <div class="imageContainer">
          Images go Here
      </div>
        </b-tab>

        <b-tab title="Beverages" :title-link-class="linkClass(3)">
               <div class="imageContainer">
          Images go Here
      </div>
        </b-tab>

        <b-tab title="Desserts" :title-link-class="linkClass(4)">
               <div class="imageContainer">
          Images go Here
      </div>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",

  components: {},

  data() {
    return {
      tabIndex: 0,
    };
  },
  methods: {
    linkClass(idx) {
      if (this.tabIndex === idx) {
        return ["activeTab"];
      } else {
        return ["nonActiveTab"];
      }
    },
  },

  /* created() { }, */
};

//https://bootstrap-vue.org/docs/components/tabs
</script>

<style >
.title {
  margin: auto;
  text-align: center;
  font-size: 2rem;

  padding-bottom: 50px;
}

.imageContainer {
  margin: auto;
  text-align: center;
  background-color: gray;
  height: 500px;
  margin-top: 35px;
}

.menu {
  margin-top: 75px;
}

.activeTab{
    font-size: 0.9rem;
    color: orange;
     border: 1px solid gray
}

.nonActiveTab{
    font-size: 0.9rem;
    color: grey;
    background-color: white;
     border: 1px solid gray
}

.nav-link{color: orange;}
</style>