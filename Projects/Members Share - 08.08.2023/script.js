
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

const people_list = document.querySelector('.people-list');

const toggle_people = document.querySelector('.add-people'); 

const people = document.querySelectorAll('.people')

const bar = document.querySelector('.bar');

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

people.forEach((cos) => {
    cos.addEventListener('click', add_people);
})

/* ---------------------------------------------- */


function handle_people() {
    people_list.dataset.toggle ^= 1;
    if (people_list.dataset.toggle == 1) {
        toggle_people.children[0].innerHTML = 'remove';
    } else {
        toggle_people.children[0].innerHTML = 'add';
    }
}

let max_added = 3;

function add_people() {
    
    if (!max_added) {
        if (this.dataset.added == 1) {
            this.style.scale = 0;
            if (max_added < 3) max_added += 1;
            people_list.prepend(this)
        }
        return
    };
    this.style.scale = 0;

    this.dataset.added ^= 1;
    if (this.dataset.added == 1) {
        bar.prepend(this)
        max_added -= 1;
    } else {
        if (max_added < 3) max_added += 1;
        people_list.prepend(this)
    }
}

function load(target) {
    target.innerHTML = `<span class="material-symbols-rounded">progress_activity</span>`;
    target.children[0].style.rotate = '0deg';
    setTimeout(() => {
        target.children[0].style.rotate = '1080deg';
    }, 1);
    setTimeout(() => {
        target.children[0].style.scale = '0';
        setTimeout(() => {
            target.style.scale = 0;
            target.innerHTML = `Send`;
            target.style.scale = 1;
        }, 120);
    }, 2000);
}
