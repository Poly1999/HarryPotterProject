document.addEventListener('DOMContentLoaded', function () {
  const button = document.querySelector('.buttonHeader');
  const heroSection = document.getElementById('heroSection');

  button.addEventListener('click', function () {
    heroSection.style.display = 'block';

    heroSection.scrollIntoView({ behavior: 'smooth' });
  });
  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      scrollBtn.classList.add('show');
    } else {
      scrollBtn.classList.remove('show');
    }
  });

  scrollBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// ---------------------

document.addEventListener('DOMContentLoaded', function () {
  const button = document.querySelector('.buttonHeroStudents');
  const heroSection = document.getElementById('studentsSection');

  button.addEventListener('click', function () {
    heroSection.style.display = 'block';

    heroSection.scrollIntoView({ behavior: 'smooth' });
  });
  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      scrollBtn.classList.add('show');
    } else {
      scrollBtn.classList.remove('show');
    }
  });

  scrollBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// ---------------------

document.addEventListener('DOMContentLoaded', function () {
  const button = document.querySelector('.buttonHeroStaff');
  const heroSection = document.getElementById('staffsSection');

  button.addEventListener('click', function () {
    heroSection.style.display = 'block';

    heroSection.scrollIntoView({ behavior: 'smooth' });
  });

  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      scrollBtn.classList.add('show');
    } else {
      scrollBtn.classList.remove('show');
    }
  });

  scrollBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// ---------------------

document.addEventListener('DOMContentLoaded', function () {
  const button = document.querySelector('.buttonHeroHouses');
  const heroSection = document.getElementById('housesSection');

  button.addEventListener('click', function () {
    heroSection.style.display = 'block';

    heroSection.scrollIntoView({ behavior: 'smooth' });
  });

  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      scrollBtn.classList.add('show');
    } else {
      scrollBtn.classList.remove('show');
    }
  });

  scrollBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
