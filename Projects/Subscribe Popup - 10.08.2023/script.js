
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

const stars = document.querySelectorAll('.stars div');

/* --------------------animations-------------------- */

function click_anim() {
    this.style.scale = 1.1;
    setTimeout(() => {
        this.style.scale = 1;
    }, transition_time);
}

/* --------------------listeners------------------- */


buttons.forEach((click) => {
    click.addEventListener('click', click_anim);
})

stars.forEach((star) => {
    star.addEventListener('click', star_recommend);
})

/* ---------------------other---------------------- */

function star_recommend() {
    stars.forEach((star) => {
        star.dataset.state = 0;
    })
    let nr_star = Array.from(stars).indexOf(this);
    this.dataset.state = 1;
    while (nr_star >= 0) {
        stars[nr_star].dataset.state = 1;
        nr_star -= 1;
    }
}

