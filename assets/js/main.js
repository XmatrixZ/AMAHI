
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlsinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  let selectTopbar = select('#topbar')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
        if (selectTopbar) {
          selectTopbar.classList.add('topbar-scrolled')
        }
      } else {
        selectHeader.classList.remove('header-scrolled')
        if (selectTopbar) {
          selectTopbar.classList.remove('topbar-scrolled')
        }
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }
  const servicesNames = document.querySelectorAll(".services-name");
  const currentImage = document.querySelector(".image-of-services");

  // Service Section
  servicesNames.forEach((servicesName) => {
    servicesName.addEventListener("click", (event) => {
      const currentlyActive = document.querySelector(".services-name.active");
      if (currentlyActive && currentlyActive !== servicesName) {
        currentlyActive.classList.toggle("active");
        currentlyActive.nextElementSibling.style.maxHeight = 0;
        currentlyActive.style.color = "rgb(46, 65, 89)";
      }
      servicesName.classList.toggle("active");

      var servicesDesc = servicesName.nextElementSibling;
      console.log(servicesName.firstElementChild);

      if (servicesName.classList.contains("active")) {
        servicesDesc.style.maxHeight = servicesDesc.scrollHeight + "px";
        servicesName.style.color = "rgb(46, 94, 159)";
        if (servicesName.firstElementChild.innerText === "Cardiology") {
          currentImage.src =
            "https://bootstrapmade.com/demo/templates/Medilab/assets/img/departments-1.jpg";
        }
        if (servicesName.firstElementChild.innerText === "Neurology") {
          currentImage.src =
            "https://bootstrapmade.com/demo/templates/Medilab/assets/img/departments-2.jpg";
        }
        if (servicesName.firstElementChild.innerText === "Pediatrics") {
          currentImage.src =
            "https://bootstrapmade.com/demo/templates/Medilab/assets/img/departments-4.jpg";
        }
        if (servicesName.firstElementChild.innerText === "Eye Care") {
          currentImage.src =
            "https://bootstrapmade.com/demo/templates/Medilab/assets/img/departments-5.jpg";
        }
      } else {
        servicesDesc.style.maxHeight = 0;
        servicesName.style.color = "rgb(46, 65, 89)";
      }
    });
  });
    //login popup section
  document.getElementById("login-btn").addEventListener("click",(event)=>{
    document.querySelector(".login-popup").style.display='flex';
    document.body.style.overflow='hidden';
  });
  document.getElementsByClassName("login-form-close")[0].addEventListener("click",(event)=>{
    document.querySelector(".login-popup").style.display='none';
    document.body.style.overflow='auto';
  });



})()