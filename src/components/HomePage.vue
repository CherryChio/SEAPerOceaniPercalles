<template>
    <!-- MiniGames with Bootstrap grid -->
  <div class="main-content">
    <div class="container">
      <div class="titulos" id="maintitulo">
        <h1 class="text-center">PACE Interactive Resources</h1>
      </div>
      <div class="row justify-content-center">
          <!-- First row -->
          <div class="col-md-6 grid-box" id="box1">
            <router-link to="/fito" class="link">
            <div class="logo-container">
              <img src="@/assets/fito.png" alt="PythoThePlankton" width="80%" height="auto" class="logo2">
              <span class="logo-text">Phyto The Plankton</span>
            </div>
            </router-link>
          </div>
          <div class="col-md-6 grid-box" id="box2">
            <router-link to="/cloud" class="link">
            <div class="logo-container">
              <img src="@/assets/spray.png" alt="Logo" width=80% height=auto class="logo2">
              <span class="logo-text">Cloud Confetti</span>
            </div>
            </router-link>
          </div>
      </div>
      <div class="row justify-content-center">
          <!-- Second row -->
          <div class="col-md-6 grid-box" id="box3">
            <router-link to="/depths" class="link">
            <div class="logo-container">
              <img src="@/assets/depths.png" alt="Logo" width=80% height=auto class="logo2">
              <span class="logo-text">From the Depths to the Sky</span>
            </div>
            </router-link>
          </div>
            <div class="col-md-6 grid-box" id="box4">
              <router-link to="/habitat" class="link">
              <div class="logo-container">
                <img src="@/assets/habitat.png" alt="Logo" width=80% height=auto class="logo2">
                <span class="logo-text">Habitats in Motion</span>
              </div>
              </router-link>
            </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
  export default {
    name: "HomePage",
  };
  
  </script>
  
  