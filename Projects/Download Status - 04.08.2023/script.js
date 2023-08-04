
function click_anim(target) {
    target.style.scale = 1.1;
    setTimeout(() => {
        target.style.scale = 1;
    }, 120);

    if (progress == 100 || progress == 0 ) {
        progress = 0
        storage_bar_fills = 3;
        storage_bar = 285
        document.getElementById('loadbar_filling').style.setProperty('--fullness', (storage_bar / 10) + '%')
        document.getElementById('fullness').innerHTML = storage_bar + ' MB';

        document.querySelectorAll(`li[data-status='done']`).forEach((stat) => {
            stat.children[0].children[0].style.setProperty('--circle_percentage', progress);
            stat.children[0].children[1].children[0].innerHTML = 'Waiting...';
            stat.dataset.status = 'waiting';
        })

        download(document.querySelector(`li[data-status='waiting']`))
    }
}

let storage_bar = 285;

let storage_bar_fills = 3;

let progress = 0;

function download(active, delay = Math.round(Math.random() * 50)) {

    active.dataset.status = 'loading';

    progress += Math.round(Math.random() * 15);
    rand_time = Math.round((Math.random() + 1) * 120);
    if (progress > 100) progress = 100;
    
    active.children[0].children[0].style.setProperty('--circle_percentage', progress);
    active.children[0].children[1].children[0].innerHTML = progress + '%';


    if (progress == 100) {
        active.children[0].children[1].children[0].innerHTML = 'Up to date';
        active.dataset.status = 'done';
        progress = 0;
        switch (storage_bar_fills) {
            case 3:
                storage_bar += Math.round(Math.random()+1 * 120);
                break;
            case 2:
                storage_bar += Math.round(Math.random()+1 * 120);
                break;
            case 1:
                storage_bar += Math.round(Math.random()+1 * 120);
                break;
        }
        storage_bar_fills -= 1;

        document.getElementById('loadbar_filling').style.setProperty('--fullness', (storage_bar / 10) + '%');
        document.getElementById('fullness').innerHTML = storage_bar + ' MB';

        download(document.querySelector(`li[data-status='waiting']`))
        return
    }

    setTimeout(() => {
        download(active, rand_time)
    }, delay);
}

download(document.querySelector(`li[data-status='waiting']`))
