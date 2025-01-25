// HEADER BAR

// Toggle dropdown visibility
function toggleDropdown() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('show');
  }
  
  // Close dropdown when clicking outside
  window.addEventListener('click', (event) => {
    const dropdown = document.querySelector('.dropdown');
    if (!dropdown.contains(event.target)) {
      dropdown.classList.remove('show');
    }
  });

function updateProgress() {
    const now = new Date();

    // Day Progress
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const dayProgress = ((now - startOfDay) / (endOfDay - startOfDay)) * 100;

    document.getElementById('day-date').textContent = `${now.getDate()}${getOrdinal(now.getDate())}`;
    document.getElementById('day-progress').style.width = `${dayProgress}%`;
    document.getElementById('day-percent').textContent = `${dayProgress.toFixed(2)}%`;

    // Week Progress
    const startOfWeek = new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay());
    const endOfWeek = new Date(startOfWeek.getTime() + 7 * 24 * 60 * 60 * 1000);
    const weekProgress = ((now - startOfWeek) / (endOfWeek - startOfWeek)) * 100;

    document.getElementById('week-day').textContent = now.toLocaleString('en-GB', { weekday: 'long' });
    document.getElementById('week-progress').style.width = `${weekProgress}%`;
    document.getElementById('week-percent').textContent = `${weekProgress.toFixed(2)}%`;

    // Month Progress
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    const monthProgress = ((now - startOfMonth) / (endOfMonth - startOfMonth)) * 100;

    document.getElementById('month-name').textContent = now.toLocaleString('en-GB', { month: 'long' });
    document.getElementById('month-progress').style.width = `${monthProgress}%`;
    document.getElementById('month-percent').textContent = `${monthProgress.toFixed(2)}%`;

    // Year Progress
    const startOfYear = new Date(now.getFullYear(), 0, 1);
    const endOfYear = new Date(now.getFullYear() + 1, 0, 1);
    const yearProgress = ((now - startOfYear) / (endOfYear - startOfYear)) * 100;

    document.getElementById('year-name').textContent = now.getFullYear();
    document.getElementById('year-progress').style.width = `${yearProgress}%`;
    document.getElementById('year-percent').textContent = `${yearProgress.toFixed(2)}%`;
}

function getOrdinal(n) {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return s[(v - 20) % 10] || s[v] || s[0];
}

// Update on page load and every second
updateProgress();
setInterval(updateProgress, 1000);
