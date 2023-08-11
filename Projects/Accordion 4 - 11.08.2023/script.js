
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

const buttons = document.querySelectorAll('.click_effect, .stars div');

const main = document.querySelector('main');

const articles = document.querySelectorAll('.accordion .category');

/* --------------------animations-------------------- */

function click_anim() {
    this.style.scale = 1.05;
    setTimeout(() => {
        this.style.scale = 1;
    }, transition_time);
}

/* --------------------listeners------------------- */


buttons.forEach((click) => {
    click.addEventListener('click', click_anim);
})

articles.forEach((art) => {
    art.addEventListener('click', expand);
})


/* ---------------------other---------------------- */


function expand() {
    const target = this.parentNode;
    if (target.dataset.expan == 1) {
        target.dataset.expan = 0;
    } else {
        articles.forEach((art) => {
            art.parentNode.dataset.expan = 0;
        })
        target.dataset.expan = 1;
    }
}
