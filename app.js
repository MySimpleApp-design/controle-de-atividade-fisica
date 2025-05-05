// Código JavaScript básico para funcionalidade futura
document.addEventListener('DOMContentLoaded', function() {
    console.log('Controle de Atividades Físicas carregado');
    
    // Função de navegação (exemplo básico)
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            alert(`Página ${link.textContent} clicada!`);
        });
    });
});
