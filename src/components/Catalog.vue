<template>
  <span>
    <div class="title">
      <span> Our Menu </span>
      <div class="goldenBorder"></div>
    </div>
    <div class="container mb-5">
      <div class="d-flex justify-content-start catalogOpt">

        <div
          :class="[activetab === 0 ? 'catalogOption activeTabCatalog' : 'catalogOption nonActiveTabCatalog']"
          @click="toggleActiveTab(0)">
          Pizza
        </div>

        <div
          :class="[activetab === 1 ? 'catalogOption activeTabCatalog' : 'catalogOption nonActiveTabCatalog']"
          @click="toggleActiveTab(1)">
          Burguers
        </div>

        <div
          :class="[activetab === 2 ? 'catalogOption activeTabCatalog' : 'catalogOption nonActiveTabCatalog']"
          @click="toggleActiveTab(2)">
          Salads
        </div>

        <div
          :class="[activetab === 3 ? 'catalogOption activeTabCatalog' : 'catalogOption nonActiveTabCatalog']"
          @click="toggleActiveTab(3)">
          Beverages
        </div>

        <div
          :class="[activetab === 4 ? 'catalogOption activeTabCatalog' : 'catalogOption nonActiveTabCatalog']"
          @click="toggleActiveTab(4)">
          Desserts
        </div>

      </div>
 <!--  v-show? -->
      <div class="d-flex">
        <div class="catalogContainer">

            <!--activeTab = 0-->
           <PizzaCatalog :activetab="activetab" />
            <!--activeTab = 1-->
           <BurguerCatalog :activetab="activetab" />
            <!--activeTab = 2-->
           <SaladCatalog :activetab="activetab" />
            <!--activeTab = 3-->
           <BeverageCatalog :activetab="activetab" />
            <!--activeTab = 4-->
           <DessertCatalog :activetab="activetab" />

        </div>
      </div>
    </div>
  </span>
</template>

<script>
import PizzaCatalog from "./Catalog/Pizza/Pizza.vue"
import BurguerCatalog from "./Catalog/Hamburguer/Hamburguers.vue"
import SaladCatalog from "./Catalog/Salads/Salads.vue"
import BeverageCatalog from "./Catalog/Beverages/Beverages.vue"
import DessertCatalog from "./Catalog/Dessert/Desserts.vue"

export default {
  name: "Catalog",

  components: {
    PizzaCatalog,
    BurguerCatalog,
    SaladCatalog,
    BeverageCatalog,
    DessertCatalog,
  },

  data() {
    return {
      activetab: 0,
    };
  },

  methods: {
    toggleActiveTab(x) {
      this.activetab = x;
    },
  },

  /* created() { }, */
};

//https://bootstrap-vue.org/docs/components/tabs
</script>

<style scoped>
@import url("./Styles/catalog.css");
</style>