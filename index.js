document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed('#typed', {
        strings: ["Website Developer", "Website Design.",],
        typeSpeed: 100,
        backSpeed: 25,
        loop: true
    });
});

    document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Mencegah form dari pengiriman default

      // Ambil nilai dari input
      const fullName = document.getElementById('fullname').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      // Buat pesan email
      const subject = 'Pesan dari ' + fullName;
      const body = 'Email: ' + email + '\n\n' + 'Pesan: ' + message;

      // Membuat link email
      const mailtoLink = 'mailto:lukmanhakim.23as@gmail.com' +
                         '?subject=' + encodeURIComponent(subject) +
                         '&body=' + encodeURIComponent(body);

      // Buka link email di jendela baru
      window.open(mailtoLink);

      // Kosongkan input setelah pengiriman
      document.getElementById('fullname').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const navMenu = document.querySelector('nav ul');
  
    menuIcon.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById('download-cv-btn');
  
    downloadBtn.addEventListener('click', function() {
      // Ganti URL dengan URL file CV yang sesuai
      const cvUrl = 'cv/cv.pdf';
      window.location.href = cvUrl;
    });
  });