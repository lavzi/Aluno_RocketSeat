const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');
const cursos = document.querySelectorAll('.curso');

cards.forEach(card => {
    card.addEventListener('click', function() {
        const videoId = card.getAttribute('id')
        window.location.href = `/video?id=${videoId}`
    });
});

cursos.forEach(curso => {
    curso.addEventListener('click', () => openModal(curso.id, 'curso'));
});

document.querySelector('.close-modal').addEventListener('click', closeModal);
document.querySelector('.maximize-modal').addEventListener('click', maximizeModal);

function closeModal() {
    modalOverlay.classList.remove('active');
    modalOverlay.querySelector('iframe').setAttribute('src', '')
    modalOverlay.querySelector('.modal').classList.remove('maximize')
}

function maximizeModal() {
    const maximize = modalOverlay.querySelector('.modal').classList.contains('maximize')

    if (maximize) {
        modalOverlay.querySelector('.modal').classList.remove('maximize')
    } else {
        modalOverlay.querySelector('.modal').classList.add('maximize')
    }  
}

function openModal() {
    modalOverlay.querySelector('iframe').setAttribute('src', `https://rocketseat.com.br`)
    modalOverlay.classList.add('active');
}