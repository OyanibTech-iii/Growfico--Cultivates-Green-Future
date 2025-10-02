document.addEventListener('DOMContentLoaded', function() {
  const mainContent = document.getElementById('main-content');
  const navLinks = document.querySelectorAll('.nav-links li a, .nav-links li span.nav-title');

  // HTML content for each section
  const sections = {
    home: `{% include 'homepage/index.html.twig' %}`,
    about: `<section class="about-section"><h2>About Us</h2><p>Growfico is dedicated to cultivating green futures...</p></section>`,
    contacts: `<section class="contacts-section"><h2>Contacts</h2><p>Email: growfico@gmail.com<br>Phone: 09458062493</p></section>`,
    products: `{% include 'products/index.html.twig' %}`
  };

  // Helper to set active state
  function setActive(link) {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  }

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Get nav type
      let type = 'home';
      if (link.textContent.trim() === 'About Us') type = 'about';
      else if (link.textContent.trim() === 'Contacts') type = 'contacts';
      else if (link.textContent.trim() === 'Products') type = 'products';

      // Prevent navigation
      e.preventDefault();
      setActive(link);
      // Change main content
      if (type === 'home' || type === 'products') {
        fetch(link.getAttribute('href'))
          .then(response => response.text())
          .then(html => {
            // Extract main content from response
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = html;
            const newMain = tempDiv.querySelector('#main-content') || tempDiv.querySelector('main');
            if (newMain) mainContent.innerHTML = newMain.innerHTML;
          });
      } else {
        mainContent.innerHTML = sections[type];
      }
    });
  });
});
