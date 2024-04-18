document.addEventListener('DOMContentLoaded', () => {

    loginForm = document.getElementById('loginForm')

    frlng = document.getElementById('fr');
    englng = document.getElementById('eng');

    txt = document.getElementById('txt');
    log_button = document.getElementById('log-button');
    forg_pass = document.getElementById('forg_pass');
    inscrivez_vous = document.getElementById('inscrivez-vous');
    texte_Bienvenu = document.getElementById('texte_Bienvenu');

    frlng.addEventListener('click', () => {
        texte_Bienvenu.innerText = "Bienvenu sur mon site";
        txt.innerText = "Bienvenue sur mon site d'initiation aux technologies Web";
        log_button.innerText = "Se connecter";
        forg_pass.innerText = "Mot de passe oublié";
        inscrivez_vous.innerText = "inscrivez-vous";
    })


    englng.addEventListener('click', () => {
        texte_Bienvenu.innerText = "Welcome to my site";
        txt.innerText = "Welcome to my web technology introductory site";
        log_button.innerText = "log in";
        forg_pass.innerText = "Forgot your password";
        inscrivez_vous.innerText = "register";
    })

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (email === 'admin@gmail.com' && password === 'admin') {
            window.location.href = 'inscription.html';
        } else {
            alert('Invalid credentials. Please try again.');
            window.location.href = 'reinitialisation1.html';
        }
    });

});