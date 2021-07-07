<template>
  <!-- Footer -->
  <div class="font-small myfont">
    <mdb-container class="text-left">
      <mdb-row>
        <mdb-col sm="6">
          <h5 class="title"></h5>
          <p>This is not a real restaurant. This website was built for portfolio showcase.</p>
          <p>Any correlation with a real commerce is pure coincidence   .</p>
        </mdb-col>
        <mdb-col sm="6">
          <h5 class="title"></h5>
          <ul>
            <li class="list-unstyled"><a class='myfont' href="#!">FAQ</a></li>
            <li class="list-unstyled"><a class='myfont' href="#!">PARTNERSHIPS</a></li>
            <li class="list-unstyled"><a class='myfont' href="#!">CUSTOMER SERVICE</a></li>
            <li class="list-unstyled"><a class='myfont' href="#!">Work with us</a></li>
          </ul>
        </mdb-col>
      </mdb-row>
    </mdb-container>
    <div class="footer-copyright text-center py-3 bgfooter">
      <mdb-container fluid>
         <a href="https://www.MDBootstrap.com"> GitHub Repository </a>
      </mdb-container>
    </div>
  </div>
  <!-- Footer -->
</template>


<script>
  import { mdbContainer, mdbRow, mdbCol } from 'mdbvue';
  export default {
    name: 'Footer',
    components: {
      
      mdbContainer,
      mdbRow,
      mdbCol
    }
  }

  //https://mdbootstrap.com/docs/vue/navigation/footer/#basic
</script>

<style scoped>
.bgfooter{
    background-color: #1C2331;
}
.myfont{
      background-color: #4B515D;
    color: black;
}
</style>
