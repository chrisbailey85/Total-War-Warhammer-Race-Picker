const mobileMenuBtn = document.querySelector('.hamburger');
const navBar = document.querySelector('.nav__bar');
const body = document.querySelector('body');
const twoPlayers = document.querySelector('.two__player');
const GetRaceBtn = document.querySelector('.get__race');
const seletedRace = document.querySelector('.race__name');
const formSection = document.querySelector('.form__section');
const loadingSection = document.querySelector('.loading');
const seletedRaceSetion = document.querySelector('.seleted__race');
const resultsImgs = document.querySelector('.images__container');
const addonsCheckboxes = document.querySelectorAll('.addons');
const shuffleImgs = document.querySelectorAll('.shuffle__imgs');
const getVortexRace = ()=>{
    let races = [
        'High Elfs',
        'Dark Elves',
        'Lizardmen',
        'Skaven'
    ];
    addonsCheckbox(races);
    let randomIdx = Math.floor(Math.random() * races.length);
    let seletedRaceName = races[randomIdx];
    seletedRace.textContent = seletedRaceName;
};
const addonsCheckbox = (races)=>{
    addonsCheckboxes.forEach((checkbox)=>{
        if (!twoPlayers.checked) {
            if (!checkbox.checked) races.push(checkbox.name);
        } else if (checkbox.dataset.twoPlayer === 'true') races.push(checkbox.name);
    });
};
const shuffing = ()=>{
    setInterval(()=>{
        let randomImg = shuffleImgs[Math.floor(Math.random() * shuffleImgs.length)];
        shuffleImgs.forEach((img)=>img.classList.remove('anim')
        );
        randomImg.classList.add('anim');
    }, 1000);
};
const hiddenSections = ()=>{
    formSection.classList.add('hidden');
    loadingSection.classList.remove('hidden');
    setTimeout(()=>{
        shuffing();
    }, 100);
    setTimeout(()=>{
        loadingSection.classList.add('hidden');
        seletedRaceSetion.classList.remove('hidden');
    }, 5000);
};
const getFlagImgs = (seletedRace)=>{
    let img = document.createElement('img');
    switch(seletedRace){
        case 'Beastmen':
            const bestmenFlag = "../images/Beastmen/Slaughterhorn_Tribe.png";
            img.classList.add('seleted__race__flag');
            img.src = bestmenFlag;
            img.alt = "";
            resultsImgs.appendChild(img);
            break;
    }
};
mobileMenuBtn.addEventListener('click', ()=>{
    mobileMenuBtn.classList.toggle('is-active');
    mobileMenuBtn.classList.contains('is-active') ? mobileMenuBtn.ariaExpanded = true : mobileMenuBtn.ariaExpanded = false;
    navBar.classList.toggle('open');
    body.classList.toggle('nav__open');
});
GetRaceBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    e.stopImmediatePropagation();
    getVortexRace();
    hiddenSections();
    getFlagImgs('Beastmen');
});
addonsCheckboxes.forEach((checkbox)=>{
    checkbox.addEventListener('click', (e)=>e.target.nextElementSibling.classList.toggle('marked')
    );
});
twoPlayers.addEventListener('click', (e)=>e.target.nextElementSibling.classList.toggle('marked')
);

//# sourceMappingURL=vortex.91c3d7db.js.map
