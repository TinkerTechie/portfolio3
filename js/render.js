document.addEventListener("DOMContentLoaded", () => {
  
  // Render Featured Projects
  const featuredGrid = document.getElementById("featuredGrid");
  if (featuredGrid && typeof featuredProjects !== 'undefined') {
    featuredGrid.innerHTML = featuredProjects.map((proj, i) => `
      <div class="card" ${proj.architecture || proj.metrics ? `style="cursor:pointer;" onclick="openProjectModal(${i})"` : ''}>
        <div class="card-top">
          <h3>${proj.title}</h3>
          <span class="tag-ctx">${proj.tag}</span>
        </div>
        <p class="desc">${proj.description}</p>
        <div class="stack-tags">
          ${proj.stack.map(s => `<span>${s}</span>`).join("")}
        </div>
        <div class="card-links">
          <a class="${proj.disabled ? 'disabled' : ''}" href="${proj.demoLink}" ${proj.disabled ? '' : 'target="_blank" rel="noopener"'} onclick="event.stopPropagation()">
            ${proj.demoText}
          </a>
          <a href="${proj.codeLink}" target="_blank" rel="noopener" onclick="event.stopPropagation()">
            ${proj.codeText}
          </a>
        </div>
      </div>
    `).join("");
  }
  
  // Project Modal Logic
  window.openProjectModal = (index) => {
    const proj = featuredProjects[index];
    if (!proj) return;
    
    const modalWrap = document.getElementById('project-modal-wrap');
    const modalContent = document.getElementById('modal-content');
    
    let archHtml = '';
    if (proj.architecture && proj.architecture.length > 0) {
      archHtml = `
        <div>
          <h4 style="margin-top:0; margin-bottom:16px;">Architecture</h4>
          <div class="arch-diagram">
            ${proj.architecture.map((stage, i) => `
              <div class="arch-stage">${stage}</div>
              ${i < proj.architecture.length - 1 ? '<div class="arch-edge"></div>' : ''}
            `).join('')}
          </div>
        </div>
      `;
    }
    
    let metricsHtml = '';
    if (proj.metrics && proj.metrics.length > 0) {
      metricsHtml = `
        <div class="modal-metrics">
          ${proj.metrics.map(m => `
            <div class="modal-metric">
              <h5>${m.label}</h5>
              <p>${m.value}</p>
            </div>
          `).join('')}
        </div>
      `;
    }
    
    modalContent.innerHTML = `
      <div class="modal-header">
        <div class="modal-meta">
          <span class="tag-ctx">${proj.tag}</span>
          <div class="stack-tags" style="margin:0;">
            ${proj.stack.map(s => `<span>${s}</span>`).join("")}
          </div>
        </div>
        <h3>${proj.title}</h3>
        <p style="color:var(--muted); margin:0;">${proj.description}</p>
      </div>
      
      <div class="modal-body">
        <div>
          <div style="display:flex; gap:16px; margin-bottom: 24px;">
            <a class="btn btn-primary" style="padding: 8px 16px; font-size:12px;" href="${proj.demoLink}" ${proj.disabled ? '' : 'target="_blank" rel="noopener"'}>${proj.demoText}</a>
            <a class="btn btn-ghost" style="padding: 8px 16px; font-size:12px;" href="${proj.codeLink}" target="_blank" rel="noopener">${proj.codeText}</a>
          </div>
          ${metricsHtml}
        </div>
        ${archHtml}
      </div>
    `;
    
    modalWrap.classList.add('open');
  };
  
  const modalWrap = document.getElementById('project-modal-wrap');
  const modalClose = document.getElementById('modal-close');
  if (modalWrap && modalClose) {
    modalClose.addEventListener('click', () => modalWrap.classList.remove('open'));
    modalWrap.addEventListener('click', (e) => {
      if (e.target === modalWrap) modalWrap.classList.remove('open');
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalWrap.classList.contains('open')) {
        modalWrap.classList.remove('open');
      }
    });
  }

  // Render Log Projects
  const logList = document.getElementById("logList");
  if (logList && typeof logProjects !== 'undefined') {
    logList.innerHTML = logProjects.map((proj, i) => `
      <a class="logrow" href="${proj.link}" target="_blank" rel="noopener">
        <span class="idx">${String(i + 1).padStart(2, '0')}</span>
        <span class="name">${proj.name} <span class="note">${proj.note}</span></span>
        <span class="domain">${proj.domain}</span>
        <span class="arrow">${proj.text}</span>
      </a>
    `).join("");
  }

  // Render Hackathons Timeline
  const timeline = document.getElementById("timelineContainer");
  if (timeline && typeof hackathons !== 'undefined') {
    timeline.innerHTML = hackathons.map(hack => `
      <div class="tl-item">
        <div class="tl-date">${hack.date}</div>
        <h3>${hack.title}</h3>
        <p>${hack.description}</p>
      </div>
    `).join("");
  }

  // Render Photo Certificates
  const photoGrid = document.getElementById("photoCredGrid");
  if (photoGrid && typeof photoCertificates !== 'undefined') {
    photoGrid.innerHTML = photoCertificates.map(cert => `
      <a class="cred-photo" href="${cert.link}" target="_blank" rel="noopener">
        <img class="thumb" src="${cert.imgSrc}" alt="${cert.alt}">
        <div class="cred-photo-body">
          <h4>${cert.title}</h4>
          <p>${cert.desc}</p>
        </div>
      </a>
    `).join("");
  }

  // Render Text Certificates
  const textGrid = document.getElementById("textCredGrid");
  if (textGrid && typeof textCertificates !== 'undefined') {
    textGrid.innerHTML = textCertificates.map(cert => `
      <div class="cred">
        <div>
          <h4>${cert.title}</h4>
          <p>${cert.desc}</p>
          ${cert.link ? `<a class="cred-link" href="${cert.link}" target="_blank" rel="noopener">${cert.linkText}</a>` : ''}
        </div>
        <div class="cred-date">${cert.date}</div>
      </div>
    `).join("");
  }
  
  // Re-initialize intersection observer for new cards (reveal animation)
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ 
      if(e.isIntersecting){ 
        e.target.classList.add('in-view'); 
        io.unobserve(e.target);
      } 
    });
  }, {threshold:0.12});
  
  document.querySelectorAll('.card, .reveal').forEach(el=>io.observe(el));
});
