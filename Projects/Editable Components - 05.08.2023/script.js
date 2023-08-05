
/* -------------------MISC---------------------- */

console.clear()

// "Quuicker" way to get value :v
Object.prototype.var = function (name) {
    const variable = getComputedStyle(this).getPropertyValue('--' + name);
    if (!variable) throw new Error('Somthing went wrong!');
    return getComputedStyle(this).getPropertyValue('--'+name);
}
// root.var('name of variable')



/* -----------------DOM-global-variables------------------ */

const root = document.querySelector(':root');

const transition_time = parseInt(root.var('transition-time'));

const theme = document.querySelector('#theme');

/* -------------------DOM-elements---------------------- */

const buttons = document.querySelectorAll('.click_effect');

const main = document.querySelector('main');

const inputs = document.querySelectorAll('.edit_menu select, .edit_menu input ');

const outputs = document.querySelectorAll('.editable_banner .user_input')

/* --------------------animations-------------------- */

function click_anim() {
    this.style.scale = 1.1;
    setTimeout(() => {
        this.style.scale = 1;
    }, transition_time);
}

/* --------------------something------------------- */


buttons.forEach((click) => {
    click.addEventListener('click', click_anim);
})


theme.addEventListener('click', () => {
    if (theme.dataset.theme == 'light') {
        theme.dataset.theme = 'dark';
    }
    else {
        theme.dataset.theme = 'light';
    }
})
function save() {
    outputs[0].innerHTML = inputs[0].value;
    if (!inputs[1].value) inputs[1].value = 147;
    outputs[1].innerHTML = inputs[1].value + ' m2';
    outputs[2].innerHTML = inputs[2].value;
}

/* ---------------------------------------------- */
