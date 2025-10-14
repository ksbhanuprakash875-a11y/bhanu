document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('quizForm');
  const result = document.getElementById('result');
  const resetBtn = document.getElementById('resetQuiz');

  const answers = {
    q1: 'script',
    q2: 'color',
    q3: 'cascading',
    q4: 'let',
    q5: 'git init'
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let score = 0;
    const formData = new FormData(form);
    for (const [key, correct] of Object.entries(answers)) {
      const value = formData.get(key);
      if (value === correct) score += 1;
    }

    result.textContent = `You scored ${score} / ${Object.keys(answers).length}`;
    result.classList.add('text-indigo-600');
    // Move focus to result for screen reader users
    result.setAttribute('tabindex', '-1');
    result.focus();
  });

  resetBtn.addEventListener('click', () => {
    form.reset();
    result.textContent = '';
    resetBtn.focus();
  });
});
