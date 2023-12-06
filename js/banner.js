document.addEventListener('DOMContentLoaded', function () {
  let currentBanner = 1;
  showBanner(currentBanner);

  setInterval(function () {
      currentBanner++;
      if (currentBanner > 3) {
          currentBanner = 1;
      }
      showBanner(currentBanner);
  }, 3000); // Troque 3000 para o intervalo desejado em milissegundos
});

function showBanner(index) {
  const banners = document.querySelectorAll('.banner');
  
  banners.forEach(banner => {
      banner.style.display = 'none';
  });

  const currentBanner = document.getElementById(`banner${index}`);
  currentBanner.style.display = 'block';
}