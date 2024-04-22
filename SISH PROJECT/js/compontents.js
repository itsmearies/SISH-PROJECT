// Links
fetch('./components/header-links.html')
    .then(response => response.text())
    .then(data => {
      document.querySelector('.header-links').innerHTML = data;
    })

// Navigation
fetch('./components/navigation.html')
    .then(response => response.text())
    .then(data => {
      document.querySelector('.nav-bar').innerHTML = data;
    })

// Footer
fetch('./components/footer.html')
    .then(response => response.text())
    .then(data => {
      document.querySelector('.footer').innerHTML = data;
    })
