const modal = document.getElementById('demo-modal');

document.querySelectorAll('[data-demo-login]').forEach((button) => {
    button.addEventListener('click', () => {
        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
    });
});

function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
}

document.querySelector('.modal-close').addEventListener('click', closeModal);
document.querySelector('.modal-ok').addEventListener('click', closeModal);
modal.addEventListener('click', (event) => {
    if (event.target === modal) closeModal();
});

document.getElementById('cookie-ok').addEventListener('click', () => {
    document.querySelector('.cookie-note').remove();
});

document.querySelector('.promo-close').addEventListener('click', () => {
    document.querySelector('.promo').remove();
});

document.querySelector('.menu-toggle').addEventListener('click', (event) => {
    const expanded = event.currentTarget.getAttribute('aria-expanded') === 'true';
    event.currentTarget.setAttribute('aria-expanded', String(!expanded));
    event.currentTarget.textContent = expanded ? '☰' : '×';
    alert('Nostar Bank demo navigation: Personal · NRI · Business · Resources · Help');
});
