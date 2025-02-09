// Gestion des onglets
const tabButtons = document.querySelectorAll('.tab-button');
const contentSections = document.querySelectorAll('.content-section');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Retirer la classe active de tous les boutons et sections
        tabButtons.forEach(btn => btn.classList.remove('active'));
        contentSections.forEach(section => section.classList.remove('active'));

        // Ajouter la classe active au bouton cliqué et à la section correspondante
        button.classList.add('active');
        const target = button.getAttribute('data-target');
        document.getElementById(target).classList.add('active');
    });
});

// Interaction JavaScript pour le bouton
document.getElementById('passionButton').addEventListener('click', function() {
    alert("Merci d'avoir visité ma page !");// Affiche le message
});
