document.getElementById('year').textContent = new Date().getFullYear();

    // Simple client-side form handling: show success message without page reload
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', async function(e){
      // If user didn't replace form action, fallback to mailto
      const action = form.getAttribute('action');
      if(action.includes('your-form-id')){
        e.preventDefault();
        alert('المرجو استبدال "action" في النموذج بعنوان استمارة Formspree الخاص بك أو إعداد خادم البريد. النموذج حالياً يعمل كعرض توضيحي.');
        return;
      }
      // let browser handle the POST to your endpoint (Formspree or backend)
    });