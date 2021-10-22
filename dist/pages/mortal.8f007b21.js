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
const getMortalRace = ()=>{
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
        if (!checkbox.checked) races.push(checkbox.name);
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
    setTimeout(()=>{
        loadingSection.classList.remove('hidden');
        shuffing();
    }, 100);
    setTimeout(()=>{
        loadingSection.classList.add('hidden');
        seletedRaceSetion.classList.remove('hidden');
    }, 5000);
};
const getFlagImgs = (seletedRace)=>{
    switch(seletedRace){
        case 'Beastmen':
            const bestmenFlag = "../images/Beastmen/Slaughterhorn_Tribe.png";
            let img = document.createElement('img');
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
    getMortalRace();
    hiddenSections();
    getFlagImgs('Beastmen');
});
addonsCheckboxes.forEach((checkbox)=>{
    checkbox.addEventListener('click', (e)=>e.target.nextElementSibling.classList.toggle('marked')
    );
});
const bestmenFlags = [
    "../images/Beastmen/Beastmen.png",
    "../images/Beastmen/Slaughterhorn_Tribe.png",
    "../images/Beastmen/Harbinger_of_Disaster.png",
    "../images/Beastmen/Wh_dlc05_bst_beastmen_morghur_herd_crest.png"
];

//# sourceMappingURL=mortal.8f007b21.js.map
