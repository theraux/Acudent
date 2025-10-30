  
<!--Navigation Bar-->
  <!-- Top nav -->
  <div class="top-nav">
    <div class="container-lg d-flex justify-content-end align-items-center px-3">
      <div class="open-time-group d-flex align-items-center">
        <div class="opentimelogo me-2">
        <i class="fa-solid fa-clock"></i>
        </div>
        <div class="open-time">
          Opening Time: Monday to Sunday 9:00 AM - 5:00 PM
        </div>
      </div>
    </div>
  </div>

  <div class="bottom-nav-container align-items-center">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-lg bottom-nav-wrapper d-flex align-items-center">

        <!-- Logo -->
        <a class="navbar-brand d-flex align-items-center text-decoration-none me-auto" href="#">
          <img src="../../Pictures/user-interface/banners-images-logo/logo.png" alt="Clinic Logo" class="logo-img">
          <div class="logo-text ms-2">
            <h3 class="mb-0">Mapru</h3>
            <h5 class="mb-0">Dental Clinic</h5>
          </div>
        </a>

        <!-- Desktop menu (visible on lg and up) -->
        <ul class="navbar-nav d-none d-lg-flex align-items-center ms-auto">
          <li class="nav-item"><a class="nav-link active" href="../../PHP/user-interface/index.php">HOME</a></li>
          <li class="nav-item"><a class="nav-link" href="../../PHP/user-interface/about.php">ABOUT</a></li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="../../PHP/user-interface/services.php"
              id="servicesDropdownDesktop" role="button" data-bs-toggle="dropdown" aria-expanded="false">SERVICES</a>
            <ul class="dropdown-menu" aria-labelledby="servicesDropdownDesktop">
              <li><a class="dropdown-item" href="#">Cleaning</a></li>
              <li><a class="dropdown-item" href="#">Fillings</a></li>
              <li><a class="dropdown-item" href="#">Tooth Extraction</a></li>
              <li><a class="dropdown-item" href="#">Whitening</a></li>
              <li><a class="dropdown-item" href="#">Orthodontics</a></li>
              <li><a class="dropdown-item" href="#">Implants</a></li>
              <li><a class="dropdown-item" href="#">Surgery</a></li>
            </ul>
          </li>
          <li class="nav-item"><a class="nav-link" href="../../PHP/user-interface/contact.php">CONTACT</a></li>
        </ul>
      <div class="signin-toggler-container d-flex align-items-center gap-2">
  <a id="openModal" class="nav-link signin" href="">SIGN IN</a>

  <!-- Mobile toggler -->
  <button class="navbar-toggler d-lg-none border-0" type="button"
    data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
    aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
</div>

      </div>
    </nav>
  </div>

  <!-- Offcanvas (mobile) -->
  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
    <div class="offcanvas-header">
      
      <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Mapru <p>Dental Clinic</p> </h5>
      

      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <!-- mobile menu (duplicate of desktop items) -->
      <ul class="navbar-nav  ">
        <li class="nav-item"><a class="nav-link active" href="../../PHP/user-interface/index.php">HOME</a></li>
        <li class="nav-item"><a class="nav-link" href="../../PHP/user-interface/about.php">ABOUT</a></li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="../../PHP/user-interface/services.php" id="servicesDropdownMobile"
            role="button" data-bs-toggle="dropdown" aria-expanded="false">SERVICES</a>

          <ul class="dropdown-menu" aria-labelledby="servicesDropdownMobile">
            <li><a class="dropdown-item" href="../../PHP/user-interface/services.php">All Services</a></li>
            <hr class="dropdown-divider">
            <li><a class="dropdown-item" href="#">Cleaning</a></li>
            <li><a class="dropdown-item" href="#">Fillings</a></li>
            <li><a class="dropdown-item" href="#">Tooth Extraction</a></li>
            <li><a class="dropdown-item" href="#">Whitening</a></li>
            <li><a class="dropdown-item" href="#">Orthodontics</a></li>
            <li><a class="dropdown-item" href="#">Implants</a></li>
            <li><a class="dropdown-item" href="#">Surgery</a></li>
          </ul>
        </li>
        <li class="nav-item"><a class="nav-link" href="../../PHP/user-interface/contact.php">CONTACT</a></li>
      </ul>
    </div>
  </div>