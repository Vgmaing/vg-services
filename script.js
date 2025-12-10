// popup logic and email copy
document.addEventListener('DOMContentLoaded', () => {
  const buyBtns = document.querySelectorAll('.buy-btn');
  const modal = document.getElementById('giftModal');
  const modalTitle = document.getElementById('modalTitle');
  const closeBtn = document.querySelector('.modal-close');
  const cancelBtn = document.getElementById('cancel');
  const copyEmail = document.getElementById('copyEmail');
  const sendEmail = document.getElementById('sendEmail');

  buyBtns.forEach(b => b.addEventListener('click', (e)=>{
    const svc = e.currentTarget.dataset.service || 'Service';
    modalTitle.innerText = 'Pay for — ' + svc;
    modal.setAttribute('aria-hidden','false');
  }));

  function closeModal(){ modal.setAttribute('aria-hidden','true'); }
  closeBtn.addEventListener('click', closeModal);
  cancelBtn.addEventListener('click', closeModal);

  // copy email
  copyEmail.addEventListener('click', ()=>{
    navigator.clipboard.writeText('vanshparsonal59@gmail.com')
      .then(()=> alert('Email copied to clipboard'))
      .catch(()=> alert('Copy failed — please copy manually.'));
  });

  // send/notify (this just shows a message and closes)
  sendEmail.addEventListener('click', ()=>{
    const code = document.getElementById('giftCode').value.trim();
    if(!code){ alert('Please paste the gift card code you purchased and then press Notify.'); return; }
    alert('Thanks — we received your notice. We will verify the code and activate within 1–6 hours.');
    closeModal();
  });

  // close when clicking outside
  window.addEventListener('click', (e)=>{
    if(e.target === modal) closeModal();
  });
});
