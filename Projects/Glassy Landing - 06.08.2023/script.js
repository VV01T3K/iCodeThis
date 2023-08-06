
/* -------------------MISC---------------------- */

console.clear()

// "Quuicker" way to get value :v
Object.prototype.var = function (name) {
    const variable = getComputedStyle(this).getPropertyValue('--' + name);
    if (!variable) throw new Error('Somthing went wrong!');
    return getComputedStyle(this).getPropertyValue('--' + name);
}
// root.var('name of variable')



/* -----------------DOM-global-variables------------------ */

const root = document.querySelector(':root');

const transition_time = parseInt(root.var('transition-time'));

/* -------------------DOM-elements---------------------- */

const buttons = document.querySelectorAll('.click_effect');

const main = document.querySelector('main');


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




/* ---------------------------------------------- */
