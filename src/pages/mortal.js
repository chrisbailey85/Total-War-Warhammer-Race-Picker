const mobileMenuBtn = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav__bar");
const body = document.querySelector("body");
const GetRaceBtn = document.querySelector(".get__race");
const seletedRace = document.querySelector(".race__name");
const formSection = document.querySelector(".form__section");
const loadingSection = document.querySelector(".loading");
const seletedRaceSetion = document.querySelector(".seleted__race");
const resultsImgs = document.querySelector(".images__container");
const addonsCheckboxes = document.querySelectorAll(".addons");
const shuffleImgsContainer = document.querySelector(".shuffle");

const getMortalRace = () => {
  let races = ["High Elfs", "Dark Elves", "Lizardmen", "Skaven"];
  addonsCheckbox(races);
  let randomIdx = Math.floor(Math.random() * races.length);
  let seletedRaceName = races[randomIdx];
  seletedRace.textContent = seletedRaceName;
  getFlagImgs(seletedRaceName);
};

const addonsCheckbox = (races) => {
  addonsCheckboxes.forEach((checkbox) => {
    if (!checkbox.checked) {
      races.push(checkbox.name);
    }
  });
};

const shuffing = () => {
  const flags = [
    require("../images/Beastmen/Slaughterhorn_Tribe.png"),
    require("../images/vampire coast/awakend.png"),
    require("../images/vampire coast/Dreadfleet.png"),
    require("../images/vampire coast/Drowned.png"),
    require("../images/vampire coast/Sartosa.png"),
    require("../images/Tomb Kings/Court_of_Lybaras.png"),
    require("../images/Tomb Kings/Exiles_of_Nehek.png"),
    require("../images/Tomb Kings/Followers_of_Nagash.png"),
    require("../images/Tomb Kings/Khemri.png"),
    require("../images/The Empire/The_Huntsmarshals_Expedition.png"),
    require("../images/Wood Elves/Heralds_of_Ariel.png"),
    require("../images/Dark Elves/Cult_of_Pleasure.png"),
    require("../images/Dark Elves/Naggarond.png"),
    require("../images/Dark Elves/The_Blessed_Dread.png"),
    require("../images/Dark Elves/The_Thousand_Maws.png"),
    require("../images/Dark Elves/Wh2_main_def_hag_graef_crest.png"),
    require("../images/Dark Elves/Wh2_main_def_har_ganeth_crest.png"),
    require("../images/Lizardmen/Cult_of_Sotek.png"),
    require("../images/Lizardmen/Ghosts_of_Pahaux.png"),
    require("../images/Lizardmen/Hexoatl.png"),
    require("../images/Lizardmen/Last_Defenders.png"),
    require("../images/Lizardmen/Spirit_of_the_Jungle.png"),
    require("../images/Lizardmen/Wh2_main_lzd_itza_crest.png"),
    require("../images/Lizardmen/Wh2_main_lzd_tlaqua_crest.png"),
    require("../images/High Elves/Avelorn.png"),
    require("../images/High Elves/Eataine.png"),
    require("../images/High Elves/Knights_of_Caledor.png"),
    require("../images/High Elves/Nagarythe.png"),
    require("../images/High Elves/Order_of_Loremasters.png"),
    require("../images/High Elves/Yvresse.png"),
    require("../images/Skaven/Clan_Rictus.png"),
    require("../images/Skaven/Clan_Skryre.png"),
    require("../images/Skaven/Wh2_main_skv_clan_eshin_crest.png"),
    require("../images/Skaven/Wh2_main_skv_clan_mors_crest.png"),
    require("../images/Skaven/Wh2_main_skv_clan_moulder_crest.png"),
    require("../images/Skaven/Wh2_main_skv_clan_pestilens_crest.png"),
    require("../images/Greenskins/Broken_Axe.png"),
    require("../images/The Empire/The_Golden_Order.png"),
    require("../images/The Empire/Reikland.png"),
    require("../images/Wood Elves/Argwylon.png"),
    require("../images/Wood Elves/Wargrove_of_Woe.png"),
    require("../images/Wood Elves/Wood_Elves.png"),
    require("../images/Greenskins/Crooked_Moon.png"),
    require("../images/Greenskins/Greenskins.png"),
    require("../images/Greenskins/The_Bloody_Handz.png"),
    require("../images/chaos/Warriors_of_Chaos.png"),
    require("../images/Norsca/Norsca.png"),
    require("../images/Norsca/Wintertooth.png"),
  ];
  let count = 0;

  while (count < 5) {
    let randomImg = flags[Math.floor(Math.random() * flags.length)];
    shuffleImgsContainer.innerHTML += `<img src="${randomImg}" alt="" class="shuffle__imgs">`;
    count++;
  }
  setInterval(() => {
    const shuffleImgs = document.querySelectorAll(".shuffle__imgs");
    let randomImg = shuffleImgs[Math.floor(Math.random() * shuffleImgs.length)];
    shuffleImgs.forEach((img) => img.classList.remove("anim"));
    randomImg.classList.add("anim");
  }, 1000);
};

const hiddenSections = () => {
  formSection.classList.add("hidden");
  loadingSection.classList.remove("hidden");
  setTimeout(() => {
    shuffing();
  }, 100);

  setTimeout(() => {
    loadingSection.classList.add("hidden");
    seletedRaceSetion.classList.remove("hidden");
  }, 5000);
};

const getFlagImgs = (seletedRace) => {
  switch (seletedRace) {
    case "Beastmen":
      const beastmenFlags = [
        require("../images/Beastmen/Beastmen.png"),
        require("../images/Beastmen/Slaughterhorn_Tribe.png"),
        require("../images/Beastmen/Harbinger_of_Disaster.png"),
        require("../images/Beastmen/Wh_dlc05_bst_beastmen_morghur_herd_crest.png"),
      ];
      beastmenFlags.forEach((flag) => {
        resultsImgs.innerHTML += `<img src="${flag}" alt="" class="seleted__race__flag">`;
      });
      break;
    case "Vampire Coast": {
      const vampireCoastFlags = [
        require("../images/vampire coast/awakend.png"),
        require("../images/vampire coast/Dreadfleet.png"),
        require("../images/vampire coast/Drowned.png"),
        require("../images/vampire coast/Sartosa.png"),
      ];
      vampireCoastFlags.forEach((flag) => {
        resultsImgs.innerHTML += `<img src="${flag}" alt="" class="seleted__race__flag">`;
      });
      break;
    }
    case "Tomb Kings": {
      const tombKingsFlags = [
        require("../images/Tomb Kings/Court_of_Lybaras.png"),
        require("../images/Tomb Kings/Exiles_of_Nehek.png"),
        require("../images/Tomb Kings/Followers_of_Nagash.png"),
        require("../images/Tomb Kings/Khemri.png"),
      ];
      tombKingsFlags.forEach((flag) => {
        resultsImgs.innerHTML += `<img src="${flag}" alt="" class="seleted__race__flag">`;
      });
      break;
    }
    case "The Empire": {
      const theEmpireFlags = [
        require("../images/The Empire/The_Huntsmarshals_Expedition.png"),
        require("../images/The Empire/The_Golden_Order.png"),
        require("../images/The Empire/Reikland.png"),
      ];
      theEmpireFlags.forEach((flag) => {
        resultsImgs.innerHTML += `<img src="${flag}" alt="" class="seleted__race__flag">`;
      });
      break;
    }
    case "Wood Elfs": {
      const woodElfsFlags = [
        require("../images/Wood Elves/Heralds_of_Ariel.png"),
        require("../images/Wood Elves/Argwylon.png"),
        require("../images/Wood Elves/Wargrove_of_Woe.png"),
        require("../images/Wood Elves/Wood_Elves.png"),
      ];
      woodElfsFlags.forEach((flag) => {
        resultsImgs.innerHTML += `<img src="${flag}" alt="" class="seleted__race__flag">`;
      });
      break;
    }
    case "Greenskins": {
      const greenskinsFlags = [
        require("../images/Greenskins/Broken_Axe.png"),
        require("../images/Greenskins/Crooked_Moon.png"),
        require("../images/Greenskins/Greenskins.png"),
        require("../images/Greenskins/The_Bloody_Handz.png"),
      ];
      greenskinsFlags.forEach((flag) => {
        resultsImgs.innerHTML += `<img src="${flag}" alt="" class="seleted__race__flag">`;
      });
      break;
    }
    case "High Elfs": {
      const highElfsFlags = [
        require("../images/High Elves/Avelorn.png"),
        require("../images/High Elves/Eataine.png"),
        require("../images/High Elves/Knights_of_Caledor.png"),
        require("../images/High Elves/Nagarythe.png"),
        require("../images/High Elves/Order_of_Loremasters.png"),
        require("../images/High Elves/Yvresse.png"),
      ];
      highElfsFlags.forEach((flag) => {
        resultsImgs.innerHTML += `<img src="${flag}" alt="" class="seleted__race__flag">`;
      });
      break;
    }
    case "Dark Elfs": {
      const darkElfsFlags = [
        require("../images/Dark Elves/Cult_of_Pleasure.png"),
        require("../images/Dark Elves/Naggarond.png"),
        require("../images/Dark Elves/The_Blessed_Dread.png"),
        require("../images/Dark Elves/The_Thousand_Maws.png"),
        require("../images/Dark Elves/Wh2_main_def_hag_graef_crest.png"),
        require("../images/Dark Elves/Wh2_main_def_har_ganeth_crest.png"),
      ];
      darkElfsFlags.forEach((flag) => {
        resultsImgs.innerHTML += `<img src="${flag}" alt="" class="seleted__race__flag">`;
      });
      break;
    }
    case "Skaven": {
      const skavenFlags = [
        require("../images/Skaven/Clan_Rictus.png"),
        require("../images/Skaven/Clan_Skryre.png"),
        require("../images/Skaven/Wh2_main_skv_clan_eshin_crest.png"),
        require("../images/Skaven/Wh2_main_skv_clan_mors_crest.png"),
        require("../images/Skaven/Wh2_main_skv_clan_moulder_crest.png"),
        require("../images/Skaven/Wh2_main_skv_clan_pestilens_crest.png"),
      ];
      skavenFlags.forEach((flag) => {
        resultsImgs.innerHTML += `<img src="${flag}" alt="" class="seleted__race__flag">`;
      });
      break;
    }
    case "Lizardmen": {
      const lizardmenFlags = [
        require("../images/Lizardmen/Cult_of_Sotek.png"),
        require("../images/Lizardmen/Ghosts_of_Pahaux.png"),
        require("../images/Lizardmen/Hexoatl.png"),
        require("../images/Lizardmen/Last_Defenders.png"),
        require("../images/Lizardmen/Spirit_of_the_Jungle.png"),
        require("../images/Lizardmen/Wh2_main_lzd_itza_crest.png"),
        require("../images/Lizardmen/Wh2_main_lzd_tlaqua_crest.png"),
      ];
      lizardmenFlags.forEach((flag) => {
        resultsImgs.innerHTML += `<img src="${flag}" alt="" class="seleted__race__flag">`;
      });
      break;
    }
    case "Bretonnia": {
      const bretonniaFlags = [
        require("../images/Bretonnia/Chevaliers_de_Lyonesse.png"),
        require("../images/Bretonnia/Bordeleaux.png"),
        require("../images/Bretonnia/Bretonnia.png"),
        require("../images/Bretonnia/Carcassonne.png"),
      ];
      bretonniaFlags.forEach((flag) => {
        resultsImgs.innerHTML += `<img src="${flag}" alt="" class="seleted__race__flag">`;
      });
      break;
    }
    case "Chaos": {
      const chaosFlag = require("../images/chaos/Warriors_of_Chaos.png");
      resultsImgs.innerHTML += `<img src="${chaosFlag}" alt="" class="seleted__race__flag">`;
      break;
    }
    default: {
      const norscaFlag = [
        require("../images/Norsca/Norsca.png"),
        require("../images/Norsca/Wintertooth.png"),
      ];
      norscaFlag.forEach((flag) => {
        resultsImgs.innerHTML += `<img src="${flag}" alt="" class="seleted__race__flag">`;
      });
    }
  }
};

mobileMenuBtn.addEventListener("click", () => {
  mobileMenuBtn.classList.toggle("is-active");
  mobileMenuBtn.classList.contains("is-active")
    ? (mobileMenuBtn.ariaExpanded = true)
    : (mobileMenuBtn.ariaExpanded = false);
  navBar.classList.toggle("open");
  body.classList.toggle("nav__open");
});

GetRaceBtn.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopImmediatePropagation();
  getMortalRace();
  hiddenSections();
});

addonsCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", (e) =>
    e.target.nextElementSibling.classList.toggle("marked")
  );
});
