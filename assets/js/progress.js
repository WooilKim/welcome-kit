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
    if (progress.completedSteps.includes(step)) {
      dot.classList.add('completed');
    }
    if (step === progress.currentStep) {
      dot.classList.add('active');
    }
  });
}

function handleCompleteStep(event) {
  const button = event.target.closest('.complete-step');
  if (!button) return;
  
  const step = parseInt(button.dataset.step);
  const progress = completeStep(step);
  
  button.textContent = '완료!';
  button.classList.add('btn-success');
  button.disabled = true;
  
  setTimeout(() => {
    if (step < TOTAL_STEPS) {
      const steps = [
        '01-pc-setup', '02-team-intro', '03-tools', 
        '04-documents', '05-introduce-yourself'
      ];
      const nextStepFile = steps[step];
      window.location.href = `${window.location.origin}${window.siteBaseUrl || ''}/step/${nextStepFile}/`;
    } else {
      window.location.href = `${window.location.origin}${window.siteBaseUrl || ''}/`;
    }
  }, 500);
}

function resetProgress() {
  localStorage.removeItem(STORAGE_KEY);
  location.reload();
}

document.addEventListener('DOMContentLoaded', () => {
  updateProgressUI();
  
  document.addEventListener('click', handleCompleteStep);
  
  const resetBtn = document.querySelector('.reset-progress');
  if (resetBtn) {
    resetBtn.addEventListener('click', resetProgress);
  }
});

window.siteBaseUrl = document.querySelector('meta[name="baseurl"]')?.content || '';
