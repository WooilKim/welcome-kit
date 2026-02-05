const STORAGE_KEY = 'onboarding-progress';
const TOTAL_STEPS = 5;

function getProgress() {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : { completedSteps: [], currentStep: 1 };
}

function saveProgress(progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function completeStep(stepNumber) {
  const progress = getProgress();
  if (!progress.completedSteps.includes(stepNumber)) {
    progress.completedSteps.push(stepNumber);
    progress.completedSteps.sort((a, b) => a - b);
  }
  if (stepNumber < TOTAL_STEPS) {
    progress.currentStep = stepNumber + 1;
  }
  saveProgress(progress);
  return progress;
}

function getProgressPercentage() {
  const progress = getProgress();
  return Math.round((progress.completedSteps.length / TOTAL_STEPS) * 100);
}

function updateProgressUI() {
  const progress = getProgress();
  const percentage = getProgressPercentage();
  
  const progressFill = document.querySelector('.progress-fill');
  if (progressFill) {
    progressFill.style.width = `${percentage}%`;
  }
  
  const progressText = document.querySelector('.progress-text');
  if (progressText) {
    progressText.textContent = `${percentage}%`;
  }
  
  document.querySelectorAll('.step-card').forEach(card => {
    const step = parseInt(card.dataset.step);
    if (progress.completedSteps.includes(step)) {
      card.classList.add('completed');
      card.classList.remove('locked');
    } else if (step <= progress.currentStep) {
      card.classList.remove('locked');
    } else {
      card.classList.add('locked');
    }
  });
  
  document.querySelectorAll('.step-dot').forEach(dot => {
    const step = parseInt(dot.dataset.step);
    dot.classList.remove('completed', 'active');
    if (progress.completedSteps.includes(step)) {
      dot.classList.add('completed');
    }
    if (step === progress.currentStep && !progress.completedSteps.includes(step)) {
      dot.classList.add('active');
    }
  });
}

function handleCompleteStep(stepNumber) {
  const progress = completeStep(stepNumber);
  
  if (stepNumber < TOTAL_STEPS) {
    window.location.href = `steps/step${stepNumber + 1}.html`;
  } else {
    window.location.href = 'index.html';
  }
}

function resetProgress() {
  localStorage.removeItem(STORAGE_KEY);
  location.reload();
}

async function loadStepsGrid() {
  const grid = document.getElementById('steps-grid');
  if (!grid) return;
  
  try {
    const response = await fetch('data/steps.json');
    const steps = await response.json();
    const progress = getProgress();
    
    grid.innerHTML = steps.map(step => {
      const isCompleted = progress.completedSteps.includes(step.id);
      const isLocked = step.id > progress.currentStep && !isCompleted;
      
      return `
        <a href="steps/${step.file}" 
           class="step-card ${isCompleted ? 'completed' : ''} ${isLocked ? 'locked' : ''}" 
           data-step="${step.id}">
          <span class="step-icon">${step.icon}</span>
          <h3>Step ${step.id}: ${step.title}</h3>
          <p>${step.description}</p>
        </a>
      `;
    }).join('');
  } catch (e) {
    console.error('Failed to load steps:', e);
  }
}

async function loadTeamData() {
  try {
    const response = await fetch('../data/team.json');
    return await response.json();
  } catch (e) {
    console.error('Failed to load team data:', e);
    return null;
  }
}

async function loadDownloadsData() {
  try {
    const response = await fetch('../data/downloads.json');
    return await response.json();
  } catch (e) {
    console.error('Failed to load downloads data:', e);
    return null;
  }
}

async function loadIntroductions() {
  try {
    const response = await fetch('../data/introductions.json');
    return await response.json();
  } catch (e) {
    const response2 = await fetch('data/introductions.json');
    return await response2.json();
  }
}

function renderDownloadGrid(items, isExternal = true) {
  return items.map(item => `
    <div class="download-item">
      <div class="info">
        <h4>${item.name}</h4>
        <p>${item.description}</p>
      </div>
      <a href="${isExternal ? item.url : '../assets/downloads/' + item.file}" 
         class="btn btn-primary download-btn" 
         ${isExternal ? 'target="_blank"' : 'download'}>다운로드</a>
    </div>
  `).join('');
}

function renderTeamMembers(members) {
  return members.map(member => `
    <div class="introduction-preview" style="cursor: default;">
      <div class="intro-photo-placeholder">${member.name.charAt(0)}</div>
      <div>
        <h3>${member.name}</h3>
        <p style="color: var(--primary);">${member.role}</p>
        <p style="color: var(--text-muted); font-size: 0.85rem;">${member.email}</p>
      </div>
    </div>
  `).join('');
}
