// Project expand/collapse functionality
document.querySelectorAll('#projectsList li').forEach((projectItem) => {
  projectItem.addEventListener('click', () => {
    projectItem.classList.toggle('expanded');
  });
});

// Experience image click - show buttons and info toggle
document.querySelectorAll('.experience-card img').forEach((img) => {
  img.addEventListener('click', () => {
    const container = img.closest('.experience-card');
    const buttons = container.querySelector('.exp-buttons');
    buttons.classList.toggle('show');
  });
});

// Buttons toggle content
document.querySelectorAll('.exp-buttons button').forEach((btn) => {
  btn.addEventListener('click', () => {
    const container = btn.closest('.experience-card');
    const tech = container.querySelector('.tech-info');
    const exp = container.querySelector('.exp-info');

    if (btn.classList.contains('tech-btn')) {
      tech.style.display = tech.style.display === 'block' ? 'none' : 'block';
      exp.style.display = 'none';
    } else if (btn.classList.contains('exp-btn')) {
      exp.style.display = exp.style.display === 'block' ? 'none' : 'block';
      tech.style.display = 'none';
    }
  });
});
