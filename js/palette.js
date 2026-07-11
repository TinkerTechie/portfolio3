const destinations = [
  { title: "Projects", section: "#work" },
  { title: "Hackathons", section: "#hackathons" },
  { title: "Credentials", section: "#credentials" },
  { title: "Writing", section: "#writing" },
  { title: "Contact", section: "#contact" },
  { title: "Resume", section: "https://drive.google.com/drive/folders/15Vej2eGoooTqlj2gC1OQzXm8FkCFk2CR?usp=drive_link", ext: true },
  { title: "GitHub", section: "https://github.com/TinkerTechie", ext: true },
  { title: "LeetCode", section: "https://leetcode.com/u/Aparna_si/", ext: true }
];

document.addEventListener("DOMContentLoaded", () => {
  const palette = document.getElementById('command-palette');
  if (!palette) return;
  const input = document.getElementById('palette-input');
  const resultsContainer = document.getElementById('palette-results');
  let activeIndex = 0;
  let filtered = [...destinations];
  
  const openPalette = () => {
    palette.classList.add('open');
    input.value = '';
    filterResults('');
    input.focus();
  };
  
  const closePalette = () => {
    palette.classList.remove('open');
  };
  
  const renderResults = () => {
    if (filtered.length === 0) {
      resultsContainer.innerHTML = '<div class="palette-empty">No results found.</div>';
      return;
    }
    resultsContainer.innerHTML = filtered.map((d, i) => `
      <div class="palette-item ${i === activeIndex ? 'active' : ''}" data-index="${i}">
        ${d.title}
        ${d.ext ? '<span class="palette-ext">↗</span>' : ''}
      </div>
    `).join("");
    
    // Add click listeners
    const items = resultsContainer.querySelectorAll('.palette-item');
    items.forEach(item => {
      item.addEventListener('click', () => {
        const idx = parseInt(item.getAttribute('data-index'), 10);
        navigate(filtered[idx]);
      });
      item.addEventListener('mousemove', () => {
        const idx = parseInt(item.getAttribute('data-index'), 10);
        if (activeIndex !== idx) {
          activeIndex = idx;
          updateActiveState();
        }
      });
    });
    
    // Ensure active item is visible
    const activeItem = resultsContainer.querySelector('.palette-item.active');
    if (activeItem) {
      activeItem.scrollIntoView({ block: 'nearest' });
    }
  };
  
  const updateActiveState = () => {
    const items = resultsContainer.querySelectorAll('.palette-item');
    items.forEach((item, i) => {
      if (i === activeIndex) item.classList.add('active');
      else item.classList.remove('active');
    });
  };
  
  const filterResults = (query) => {
    query = query.toLowerCase();
    filtered = destinations.filter(d => d.title.toLowerCase().includes(query));
    activeIndex = 0;
    renderResults();
  };
  
  const navigate = (dest) => {
    if (!dest) return;
    closePalette();
    if (dest.ext) {
      window.open(dest.section, '_blank', 'noopener');
    } else {
      const target = document.querySelector(dest.section);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  
  // Event Listeners
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      palette.classList.contains('open') ? closePalette() : openPalette();
    }
    if (e.key === '/' && !palette.classList.contains('open') && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
      e.preventDefault();
      openPalette();
    }
    
    if (palette.classList.contains('open')) {
      if (e.key === 'Escape') {
        e.preventDefault();
        closePalette();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (activeIndex < filtered.length - 1) {
          activeIndex++;
          updateActiveState();
          const activeItem = resultsContainer.querySelector('.palette-item.active');
          if (activeItem) activeItem.scrollIntoView({ block: 'nearest' });
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (activeIndex > 0) {
          activeIndex--;
          updateActiveState();
          const activeItem = resultsContainer.querySelector('.palette-item.active');
          if (activeItem) activeItem.scrollIntoView({ block: 'nearest' });
        }
      } else if (e.key === 'Enter') {
        e.preventDefault();
        navigate(filtered[activeIndex]);
      }
    }
  });
  
  input.addEventListener('input', (e) => {
    filterResults(e.target.value);
  });
  
  palette.addEventListener('click', (e) => {
    if (e.target === palette) {
      closePalette();
    }
  });
});
