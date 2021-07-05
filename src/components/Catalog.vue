<template>
  <span>
    <div class="title">
      <span> Our Menu </span>
      <div class="goldenBorder"></div>
    </div>
    <div class="container mb-5">
      <div class="d-flex justify-content-start catalogOpt">
        <div
          :class="[
            activetab === 0
              ? 'catalogOption activeTabCatalog'
              : 'catalogOption nonActiveTabCatalog',
          ]"
          @click="toggleActiveTab(0)"
        >
          Pizza
        </div>
        <div
          :class="[
            activetab === 1
              ? 'catalogOption activeTabCatalog'
              : 'catalogOption nonActiveTabCatalog',
          ]"
          @click="toggleActiveTab(1)"
        >
          Burguers
        </div>
        <div
          :class="[
            activetab === 2
              ? 'catalogOption activeTabCatalog'
              : 'catalogOption nonActiveTabCatalog',
          ]"
          @click="toggleActiveTab(2)"
        >
          Salads
        </div>
        <div
          :class="[
            activetab === 3
              ? 'catalogOption activeTabCatalog'
              : 'catalogOption nonActiveTabCatalog',
          ]"
          @click="toggleActiveTab(3)"
        >
          Beverages
        </div>
        <div
          :class="[
            activetab === 4
              ? 'catalogOption activeTabCatalog'
              : 'catalogOption nonActiveTabCatalog',
          ]"
          @click="toggleActiveTab(4)"
        >
          Desserts
        </div>
      </div>

      <div class="d-flex">
        <div class="catalogContainer">
          <div :class="[activetab === 0 ? 'show' : 'hide']">
            <div class="catalogItem">
              <div class="catalogImage"></div>
              <div class="nameOfItem">CONTENT CATALOG HERE 0</div>
              <div class="description">
                lrem ipsolum lorem opsopls slorem ipslusm splorem lotem
              </div>
              <div class="price">$$ 99.99</div>
            </div>
            <div class="catalogItem">
              <div class="catalogImage"></div>
              <div class="nameOfItem">CONTENT CATALOG HERE 0</div>
              <div class="description">
                lrem ipsolum lorem opsopls slorem ipslusm splorem lotem
              </div>
              <div class="price">$$ 99.99</div>
            </div>
            <div class="catalogItem">
              <div class="catalogImage"></div>
              <div class="nameOfItem">CONTENT CATALOG HERE 0</div>
              <div class="description">
                lrem ipsolum lorem opsopls slorem ipslusm splorem lotem
              </div>
              <div class="price">$$ 99.99</div>
            </div>
            <div class="catalogItem">
              <div class="catalogImage"></div>
              <div class="nameOfItem">CONTENT CATALOG HERE 0</div>
              <div class="description">
                lrem ipsolum lorem opsopls slorem ipslusm splorem lotem
              </div>
              <div class="price">$$ 99.99</div>
            </div>
            <div class="catalogItem">
              <div class="catalogImage"></div>
              <div class="nameOfItem">CONTENT CATALOG HERE 0</div>
              <div class="description">
                lrem ipsolum lorem opsopls slorem ipslusm splorem lotem
              </div>
              <div class="price">$$ 99.99</div>
            </div>
            <div class="catalogItem">
              <div class="catalogImage"></div>
              <div class="nameOfItem">CONTENT CATALOG HERE 0</div>
              <div class="description">
                lrem ipsolum lorem opsopls slorem ipslusm splorem lotem
              </div>
              <div class="price">$$ 99.99</div>
            </div>
            <div class="catalogItem">
              <div class="catalogImage"></div>
              <div class="nameOfItem">CONTENT CATALOG HERE 0</div>
              <div class="description">
                lrem ipsolum lorem opsopls slorem ipslusm splorem lotem
              </div>
              <div class="price">$$ 99.99</div>
            </div>
            <div class="catalogItem">
              <div class="catalogImage"></div>
              <div class="nameOfItem">CONTENT CATALOG HERE 0</div>
              <div class="description">
                lrem ipsolum lorem opsopls slorem ipslusm splorem lotem
              </div>
              <div class="price">$$ 99.99</div>
            </div>
          </div>

          <div :class="[activetab === 1 ? 'show' : 'hide']">
            CONTENT CATALOG HERE 1
          </div>

          <div :class="[activetab === 2 ? 'show' : 'hide']">
            CONTENT CATALOG HERE 2
          </div>
          <div :class="[activetab === 3 ? 'show' : 'hide']">
            CONTENT CATALOG HERE 3
          </div>
          <div :class="[activetab === 4 ? 'show' : 'hide']">
            CONTENT CATALOG HERE 4
          </div>
        </div>
      </div>
    </div>
  </span>
</template>

<script>
export default {
  name: "MenuV",

  components: {},

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
@import url("./Styles/menu.css");
</style>