function validateForm() {
    let errors = [];

    const nom = document.getElementById('name').value;
    const email = document.getElementById('mail').value;
    const titol = document.getElementById('title').value;
    const missatge = document.getElementById('msg').value;



    // Validar que els camps estan omplerts
    if (nom === '') errors.push("El nom és obligatori");
    if (email === '') errors.push("L'adreça electrònica és obligatoria");
    if (titol === '') errors.push("El titol és obligatori");
    if (missatge === '') errors.push("Has d'introduir un missatge");

    // Validar format correu elctrònic
    function validarEmail(email) {
        // Expresió regular per validar un correu electrónic
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(email);
    }
    if(!validarEmail(email) && email !== '') errors.push("Correu electrònic no vàlid");


    // Mostrar errors
    const errorsLlista = document.getElementById('errors');
    errorsLlista.innerHTML = '';
    if (errors.length > 0) {
        errorsLlista.innerHTML = errors.join('<br>');
         return false; // Cancel·lar l'enviament del formulari
    }
    return true; // Si tot correcte, es farà l'enviament del formulari

}

// Efecte "fade-in" per als elements del formulari
window.addEventListener('load', () => {
    const formElements = document.querySelectorAll('form > *');
    formElements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('fade-in');
        }, index * 200);
    });
});

//Efecte per canviar el color del boto "enviar" quan passem el ratolí
const button = document.querySelector('button');

button.addEventListener('mouseover', () => {
    button.style.color = 'white';
    button.style.backgroundColor = 'blue'; // Blau fosc
});

button.addEventListener('mouseout', () => {
    button.style.color = '';
    button.style.backgroundColor = '';
});


// Efecte que cambia el color al seleccionar algun camp del formulari
const inputs = document.querySelectorAll('input, textarea');

inputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.style.backgroundColor = 'darkseagreen'; // Color blau clar
    });

    input.addEventListener('blur', () => {
        input.style.backgroundColor = ''; // Tornar al color original
    });
});
