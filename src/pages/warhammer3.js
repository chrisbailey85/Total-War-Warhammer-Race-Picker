const mobileMenuBtn = document.querySelector('.hamburger')
const navBar = document.querySelector('.nav__bar')
const body = document.querySelector('body')
const GetRaceBtn = document.querySelector('.get__race')
const seletedRace = document.querySelector('.race__name')
const formSection = document.querySelector('.form__section')
const loadingSection = document.querySelector('.loading')
const seletedRaceSetion = document.querySelector('.seleted__race')
const resultsImgs = document.querySelector('.images__container')
const addonsCheckboxes = document.querySelectorAll('.addons')
const shuffleImgsContainer = document.querySelector('.shuffle')

const getWarhammerThreeRace = () => {
  let races = [
    'Kislev',
    'Grand Cathay',
    'Khorne',
    'Oracles of Tzeentch',
    'Seducers of Slaanesh',
    'Poxmakers of Nurgle',
    'Daemons of Chaos',
  ]
  addonsCheckbox(races)
  let randomIdx = Math.floor(Math.random() * races.length)
  let seletedRaceName = races[randomIdx]
  seletedRace.textContent = seletedRaceName
  getFlagImgs(seletedRaceName)
}

const addonsCheckbox = (races) => {
  addonsCheckboxes.forEach((checkbox) => {
    if (!checkbox.checked) {
      races.push(checkbox.name)
    }
  })
}

// const shuffing = () => {
//   const flags = []
//   let count = 0

//   while (count < 5) {
//     let randomImg = flags[Math.floor(Math.random() * flags.length)]
//     shuffleImgsContainer.innerHTML += `<img src="${randomImg}" alt="" class="shuffle__imgs">`
//     count++
//   }
//   setInterval(() => {
//     const shuffleImgs = document.querySelectorAll('.shuffle__imgs')
//     let randomImg = shuffleImgs[Math.floor(Math.random() * shuffleImgs.length)]
//     shuffleImgs.forEach((img) => img.classList.remove('anim'))
//     randomImg.classList.add('anim')
//   }, 1000)
// }

const hiddenSections = () => {
  formSection.classList.add('hidden')
  loadingSection.classList.remove('hidden')
  setTimeout(() => {
    loadingSection.innerHTML = `<lottie-player src="https://assets2.lottiefiles.com/packages/lf20_jlrxxylp.json"  background="transparent"  speed="1.1"  style="width: 300px; height: 300px;"  loop autoplay></lottie-player>`
  }, 100)

  setTimeout(() => {
    loadingSection.classList.add('hidden')
    seletedRaceSetion.classList.remove('hidden')
  }, 5000)
}

const getFlagImgs = (seletedRace) => {
  switch (seletedRace) {
    case 'Kislev': {
      const kislevCoastFlags = [
        require('../images/Kislev/The_Great_Orthodoxy.png'),
        require('../images/Kislev/The_Ice_Court.png'),
      ]
      kislevCoastFlags.forEach((flag) => {
        resultsImgs.innerHTML += `<img src="${flag}" alt="" class="seleted__race__flag">`
      })
      break
    }
    case 'Grand Cathay': {
      const kislevCoastFlags = [
        require('../images/Grand Cathay/The_Northern_Provinces.png'),
        require('../images/Grand Cathay/The_Western_Provinces.png'),
      ]
      kislevCoastFlags.forEach((flag) => {
        resultsImgs.innerHTML += `<img src="${flag}" alt="" class="seleted__race__flag">`
      })
      break
    }
    case 'Ogre Kingdoms': {
      const ogreCoastFlags = [
        require('../images/Ogre Kingdoms/Disciples_of_the_Maw.png'),
        require('../images/Ogre Kingdoms/Goldtooth.png'),
      ]
      ogreCoastFlags.forEach((flag) => {
        resultsImgs.innerHTML += `<img src="${flag}" alt="" class="seleted__race__flag">`
      })
      break
    }
    case 'Khorne': {
      const khorneCoastFlag = require('../images/Khorne/Exiles_of_Khorne.png')
      resultsImgs.innerHTML += `<img src="${khorneCoastFlag}" alt="" class="seleted__race__flag">`
      break
    }
    case 'Daemons of Chaos': {
      const daemonsCoastFlag = require('../images/Daemons of Chaos/Legion_of_Chaos.png')
      resultsImgs.innerHTML += `<img src="${daemonsCoastFlag}" alt="" class="seleted__race__flag">`
      break
    }
    case 'Slaanesh': {
      const slaaneshCoastFlag = require('../images/Slaanesh/Seducers_of_Slaanesh.png')
      resultsImgs.innerHTML += `<img src="${slaaneshCoastFlag}" alt="" class="seleted__race__flag">`
      break
    }
    default: {
      const tzeentchhCoastFlag = require('../images/Tzeentch/Oracles_of_Tzeentch.png')
      resultsImgs.innerHTML += `<img src="${tzeentchhCoastFlag}" alt="" class="seleted__race__flag">`
    }
  }
}

mobileMenuBtn.addEventListener('click', () => {
  mobileMenuBtn.classList.toggle('is-active')
  mobileMenuBtn.classList.contains('is-active')
    ? (mobileMenuBtn.ariaExpanded = true)
    : (mobileMenuBtn.ariaExpanded = false)
  navBar.classList.toggle('open')
  body.classList.toggle('nav__open')
})

GetRaceBtn.addEventListener('click', (e) => {
  e.preventDefault()
  e.stopImmediatePropagation()
  getWarhammerThreeRace()
  hiddenSections()
})

addonsCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener('click', (e) =>
    e.target.nextElementSibling.classList.toggle('marked')
  )
})
