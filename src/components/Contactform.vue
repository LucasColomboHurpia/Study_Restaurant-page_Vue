<template>
  <div class="infoContainer pt-3">
    <div class="title">
      <span class="text-white"> MAKE A RESERVATION </span>
      <div class="goldenBorder"></div>
    </div>
    <form action="">
      <div class="container text-center">
        <div class="flexInput justify-content-center flex-wrap">
          <div class="d-inline">
            <div class="text-left inputForm1">
              <span class="text-white">Full Name</span>  <br />
              <input type="text" class="textForm1 styleTxtBox" required />
            </div>
          </div>

          <div class="d-inline">
            <div class="text-left inputForm1">
             <span class="text-white"> Email address </span> <br />
              <input type="text"  class="textForm1 styleTxtBox" />
            </div>
          </div>

          <div class="d-inline">
            <div class="text-left inputForm1">
             <span class="text-white"> Phone </span> <br />
              <input type="text"  class="textForm1 styleTxtBox" required/>
            </div>
          </div>
        </div>

        <div class="form2">
          <span class="text-white">Pick a time and date</span>
          <div class="appointment">
            <input
              type="date"
              id="date"
              name="date"
              placeholder="Add Day and Time"
              class="styleTxtBox"
              required
            />
            <input
              type="time"
              id="appt"
              name="appt"
              min="00:00"
              max="23:59"
              class="styleTxtBox"
              required
            />
          </div>
        </div>

        <div class="container text-center">
          <div class="flexInput justify-content-center flex-wrap">
            <div class="d-inline">
              <div class="text-left inputForm1">
               <span class="text-white"> Any observations? </span> <br />
                <input type="text" class="largerText styleTxtBox" />
              </div>
            </div>
          </div>
        </div>
              <button type="submit" class="submitButton btn px-5"> <span class="">Book a table</span></button>

      </div>

    </form>
  </div>
</template>

<script>

export default {
  name: "ContactForm",

  components: {},
};
</script>

<style scoped>
@import url("./Styles/contactForm.css");
</style>
