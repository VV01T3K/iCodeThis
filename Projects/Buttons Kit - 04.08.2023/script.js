const lang_select = document.querySelector('#language');

const lang = {
    english: ['History', 'Awards', 'Ideas', 'Search', 'Sort', 'Sort by date', 'Sort alphabetically', 'Import your data', 'About', 'Privacy', 'Terms', 'Software and Licenses', 'English', 'Polish', 'German', 'Spanish'],
    polish: ['Historia', 'Nagrody', 'Pomysły', 'Szukaj', 'Sortuj', 'Sortuj według daty', 'Sortuj alfabetycznie', 'Importuj swoje dane', 'Informacje', 'Prywatność', 'Warunki', 'Oprogramowanie i licencje', 'Angielski', 'Polski', 'Niemiecki', 'Hiszpański'],
    german: ['Verlauf', 'Auszeichnungen', 'Ideen', 'Suchen', 'Sortieren', 'Nach Datum sortieren', 'Alphabetisch sortieren', 'Daten importieren', 'Über', 'Datenschutz', 'Bedingungen ', 'Software und Lizenzen', 'Englisch', 'Polnisch', 'Deutsch', 'Spanisch'],
    spanish: ['Historial', 'Premios', 'Ideas', 'Buscar', 'Ordenar', 'Ordenar por fecha', 'Ordenar alfabéticamente', 'Importar sus datos', 'Acerca de', 'Privacidad', 'Términos ', 'Software y licencias', 'Inglés', 'Polaco', 'Alemán', 'Español'],
}


Object.keys(lang).forEach((language) => {
    const capitalized = language[0].toUpperCase() + language.slice(1);
    lang_select.innerHTML += `<option value="${language}" class="text">${capitalized}</option>`;
})


let current_lang = 'english';

const lang_change = lang_select.addEventListener("input", (event) => { current_lang = event.target.value; change_lang() })

const texts = document.querySelectorAll('.text');

    
function change_lang() {

    document.querySelector('input[name="searchbar"]').placeholder = lang[current_lang][3];

    let i = 0;
    texts.forEach((text) => {
        text.innerHTML = lang[current_lang][i];
            i+=1
    });
    i = 0

}

const custom_select = document.querySelector('.custom-select');

const lang_arrow_rotate = lang_select.addEventListener('click', () => {

console.log('test')
    let rotation = parseInt(getComputedStyle(custom_select).getPropertyValue('--_arrow-rotate'));

    rotation += 180;

    custom_select.style.setProperty('--_arrow-rotate', rotation + 'deg');
    
})

const sort_arrow = document.querySelector('#expand');
let dropdown = document.querySelector('aside').dataset

document.querySelectorAll('aside li').forEach((element) => {
    element.addEventListener('click', () => {
        dropdown.vis = 0
    })
})

const sort_arrow_rotate = document.querySelector('#sort').addEventListener('click', () => {

    if (dropdown.vis == 0) {
        dropdown.vis = 1
    }
    else {
        dropdown.vis = 0
    }


    let rotation = parseInt(getComputedStyle(sort_arrow).getPropertyValue('--_rotation'));

    rotation += 180;
    
    sort_arrow.style.setProperty('--_rotation', rotation + 'deg');
})
