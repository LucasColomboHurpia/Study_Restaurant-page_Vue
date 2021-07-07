<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      label-next=""
      label-prev=""
      background="#ababab"
      img-width="1024"
      img-height="425"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        v-for="item in carouselItems"
        :key="item.id"
        :caption="item.text"
        :img-src="item.image"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
import slide1 from "../assets/SliderCarousel/slide1txt.jpg";
import slide2 from "../assets/SliderCarousel/slide2txt.jpg";
import slide3 from "../assets/SliderCarousel/slide3txt.jpg";

export default {
  name: "Carousel",

  components: {},

  data() {
    return {
      slide: 0,
      sliding: null,

      carouselItems: [
        {
          id: 1,
          image: slide2,
          text: "",
        },
        {
          id: 2,
          image: slide1,
          text: "",
        },
        {
          id: 3,
          image: slide3,
          text: "",
        },
      ],
    };
  },

  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },

  /* created() { }, */

  //https://bootstrap-vue.org/docs/components/carousel
};
</script>

<style scoped>
</style>

