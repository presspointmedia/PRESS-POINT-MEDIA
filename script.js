const supportedLanguages = ['bn', 'en', 'hi', 'ar', 'all'];

function getSectionCards(section) {
  return section.querySelectorAll('.news-card');
}

function applyLanguageFilter(section, selectedLanguage) {
  const cards = getSectionCards(section);

  cards.forEach((card) => {
    const cardLanguage = card.dataset.language;
    const shouldShow = selectedLanguage === 'all' || cardLanguage === selectedLanguage;
    card.classList.toggle('hidden', !shouldShow);
  });
}

function syncButtonState(buttons, selectedLanguage) {
  buttons.forEach((button) => {
    const isActive = button.dataset.language === selectedLanguage;
    button.classList.toggle('active', isActive);
  });
}

function initLanguageControls() {
  const topButtons = document.querySelectorAll('.lang-item');
  const sections = document.querySelectorAll('.section');

  topButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const selectedLanguage = button.dataset.language;
      syncButtonState(topButtons, selectedLanguage);

      sections.forEach((section) => {
        const sectionButtons = section.querySelectorAll('.mini-lang');
        syncButtonState(sectionButtons, selectedLanguage);
        applyLanguageFilter(section, selectedLanguage);
      });
    });
  });

  sections.forEach((section) => {
    const sectionButtons = section.querySelectorAll('.mini-lang');

    sectionButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const selectedLanguage = button.dataset.language;
        syncButtonState(sectionButtons, selectedLanguage);
        applyLanguageFilter(section, selectedLanguage);

        const matchingTopButton = document.querySelector(`.lang-item[data-language="${selectedLanguage}"]`);
        if (matchingTopButton) {
          syncButtonState(document.querySelectorAll('.lang-item'), selectedLanguage);
        }
      });
    });
  });
}

initLanguageControls();
