<template>

  <!-- Navbar with Bootstrap -->
  <div class="page-container">
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark navbar-bg">
        <div class="container-fluid">
            <img src="@/assets/logo.png" alt="Logo" width=auto height=70px class="logo">
            <span class="project-title d-none d-sm-block">SEA (Satellite Education Adventures)</span>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <div class="navbar-nav ms-auto">
                <router-link to="/" class="link">
                  <span class="navbar-brand">Home
                  </span>
                </router-link>
                <router-link to="/about" class="link">
                  <span class="navbar-brand">About Us
                  </span>
                </router-link>
                <router-link to="/pace" class="link">
                  <span class="navbar-brand">PACE Satellite
                  </span>
                </router-link>
                <router-link to="/references" class="link">
                  <span class="navbar-brand">References
                  </span>
                </router-link>
              </div>
            </div>
            
        </div>
    </nav>
    <router-view />
    </div>
    <footer class="footer">
        <div class="container-footer">
          Developed During Nasa Space Apps Challenge 2024 Chihuahua by Per Oceani Procellas Team
        </div>
      </footer>
  </div>
  </template>
  
  <script>
  export default {
    name: "App",
  };
  </script>
  
<style>
@import './assets/style.css';
</style>
