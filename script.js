// hamburger menu

 document.addEventListener('DOMContentLoaded', function() {
      const mobileMenuButton = document.getElementById('mobile-menu-button');
      const mobileMenu = document.getElementById('mobile-menu');
      
      mobileMenuButton.addEventListener('click', function() {
        // Toggle mobile menu
        mobileMenu.classList.toggle('open');
        
        // Change icon between hamburger and close
        const icon = mobileMenuButton.querySelector('i');
        if (mobileMenu.classList.contains('open')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-times');
        } else {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      });
      
      // Close mobile menu when clicking on a link
      document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
          mobileMenu.classList.remove('open');
          mobileMenuButton.querySelector('i').classList.remove('fa-times');
          mobileMenuButton.querySelector('i').classList.add('fa-bars');
        });
      });
    });




    // Simple JavaScript to show/hide suggestions
    const searchInput = document.getElementById('destination-search');
    const suggestionsBox = document.getElementById('search-suggestions');
    
    searchInput.addEventListener('focus', () => {
      suggestionsBox.classList.remove('hidden');
    });
    
    searchInput.addEventListener('blur', () => {
      // Small timeout to allow click on suggestions
      setTimeout(() => {
        suggestionsBox.classList.add('hidden');
      }, 200);
    });
    
    // Click handler for suggestions
    document.querySelectorAll('#search-suggestions div').forEach(item => {
      item.addEventListener('mousedown', (e) => {
        e.preventDefault();
        searchInput.value = e.currentTarget.querySelector('.font-medium').textContent;
        suggestionsBox.classList.add('hidden');
        // Here you would typically submit the form or do a search
      });
    });




    // filter script

     function filterPackages(category) {
    const cards = document.querySelectorAll('.package-card');
    cards.forEach(card => {
      card.style.display = card.classList.contains(category) ? 'block' : 'none';
    });
  }

  // Load India tours by default
  window.addEventListener('load', () => {
    filterPackages('india');
  });



  //slider for offers


   document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slider-slide');
    let currentSlide = 0;
    
    function showSlide(n) {
      slides[currentSlide].style.opacity = 0;
      currentSlide = (n + slides.length) % slides.length;
      slides[currentSlide].style.opacity = 1;
    }
    
    function nextSlide() {
      showSlide(currentSlide + 1);
    }
    
    // Change slide every 5 seconds
    setInterval(nextSlide, 2500);
  });