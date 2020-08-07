"use strict";

document.addEventListener('DOMContentLoaded', () => {

  const jeu = document.querySelector('.jeu')
  const resultat = document.querySelector('#resultat')
  const message = document.querySelector('#message')
  const msg_erreur = document.querySelector('#erreur')
  const indice = document.querySelector('#indice')
  const nb_erreur = []
  let win = false
  let choix = []
  let choix_id = []
  const paires_trouvees = []
  

  const deck_normal = [
    {nom: 'pikachu', image: 'assets/images/pikachu.png', son: 'assets/sounds/pikachu.mp3'},
    {nom: 'bulbasaur', image: 'assets/images/bulbasaur.png', son: 'assets/sounds/bulbasaur.mp3'},
    {nom: 'charmander', image: 'assets/images/charmander.png', son: 'assets/sounds/charmander.mp3'},
    {nom: 'eevee', image: 'assets/images/eevee.png', son: 'assets/sounds/eevee.mp3'},
    {nom: 'farfetchd', image: 'assets/images/farfetchd.png', son: 'assets/sounds/farfetchd.mp3'},
    {nom: 'gengar', image: 'assets/images/gengar.png', son: 'assets/sounds/gengar.mp3'},
    {nom: 'growlithe', image: 'assets/images/growlithe.png', son: 'assets/sounds/growlithe.mp3'},
    {nom: 'jigglypuff', image: 'assets/images/jigglypuff.png', son: 'assets/sounds/jigglypuff.mp3'},
    {nom: 'magikarp', image: 'assets/images/magikarp.png', son: 'assets/sounds/magikarp.mp3'},
    {nom: 'mew', image: 'assets/images/mew.png', son: 'assets/sounds/mew.mp3'},
    {nom: 'mewtwo', image: 'assets/images/mewtwo.png', son: 'assets/sounds/mewtwo.mp3'},
    {nom: 'ponyta', image: 'assets/images/ponyta.png', son: 'assets/sounds/ponyta.mp3'},
    {nom: 'snorlax', image: 'assets/images/snorlax.png', son: 'assets/sounds/snorlax.mp3'},
    {nom: 'squirtle', image: 'assets/images/squirtle.png', son: 'assets/sounds/squirtle.mp3'},
    {nom: 'pikachu', image: 'assets/images/pikachu.png', son: 'assets/sounds/pikachu.mp3'},
    {nom: 'bulbasaur', image: 'assets/images/bulbasaur.png', son: 'assets/sounds/bulbasaur.mp3'},
    {nom: 'charmander', image: 'assets/images/charmander.png', son: 'assets/sounds/charmander.mp3'},
    {nom: 'eevee', image: 'assets/images/eevee.png', son: 'assets/sounds/eevee.mp3'},
    {nom: 'farfetchd', image: 'assets/images/farfetchd.png', son: 'assets/sounds/farfetchd.mp3'},
    {nom: 'gengar', image: 'assets/images/gengar.png', son: 'assets/sounds/gengar.mp3'},
    {nom: 'growlithe', image: 'assets/images/growlithe.png', son: 'assets/sounds/growlithe.mp3'},
    {nom: 'jigglypuff', image: 'assets/images/jigglypuff.png', son: 'assets/sounds/jigglypuff.mp3'},
    {nom: 'magikarp', image: 'assets/images/magikarp.png', son: 'assets/sounds/magikarp.mp3'},
    {nom: 'mew', image: 'assets/images/mew.png', son: 'assets/sounds/mew.mp3'},
    {nom: 'mewtwo', image: 'assets/images/mewtwo.png', son: 'assets/sounds/mewtwo.mp3'},
    {nom: 'ponyta', image: 'assets/images/ponyta.png', son: 'assets/sounds/ponyta.mp3'},
    {nom: 'snorlax', image: 'assets/images/snorlax.png', son: 'assets/sounds/snorlax.mp3'},
    {nom: 'squirtle', image: 'assets/images/squirtle.png', son: 'assets/sounds/squirtle.mp3'},
  ]

message.textContent = 'Trouvez les paires pour les capturer!'

deck_normal.sort(() => 0.5 - Math.random())

function creerJeu_norm() {
  for (let i = 0; i < deck_normal.length; i++) {
    let carte = document.createElement('img')
    carte.setAttribute('data-id', i)
    carte.setAttribute('class', 'carte')
    carte.setAttribute('src', 'assets/images/grass.png')
    carte.addEventListener('click', flip)
    jeu.appendChild(carte)
  }
}

function flip() {
  if (choix.length < 2) {
    let carte_id = this.getAttribute('data-id')
    choix.push(deck_normal[carte_id].nom)
    choix_id.push(carte_id)
    this.setAttribute('src', deck_normal[carte_id].image)
    this.classList.add('flip')
    this.classList.add('choix')
    if (choix.length === 2) {
      setTimeout(verif_paire, 700)
    }
  }
}

// function unflip() {
//   cartes[premChoix].classList.remove('choix', 'flip')
//   cartes[deuxChoix].classList.remove('choix', 'flip')
//   cartes[premChoix].setAttribute('src', 'assets/images/grass.png')
//   cartes[deuxChoix].setAttribute('src', 'assets/images/grass.png')
// }

indice.addEventListener('click', function () {
  message.textContent = "Fonctionnalité à venir : )"
  setTimeout(function () {
    message.textContent = '';
  }, 2000);
})

function verif_paire() {
  let cartes = document.querySelectorAll('img')
  const premChoix = choix_id[0]
  const deuxChoix = choix_id[1]

  if (premChoix == deuxChoix) {
    message.textContent = "Erreur, vous ne pouvez pas selectionner la même carte"
    cartes[premChoix].classList.remove('choix', 'flip')
    cartes[deuxChoix].classList.remove('choix', 'flip')
    cartes[premChoix].setAttribute('src', 'assets/images/grass.png')
    cartes[deuxChoix].setAttribute('src', 'assets/images/grass.png')

  } else if (choix[0] === choix[1]) {
    cartes[premChoix].setAttribute('src', 'assets/images/captured.gif')
    cartes[deuxChoix].setAttribute('src', 'assets/images/captured.gif')
    setTimeout(function(){cartes[premChoix].setAttribute('src', 'assets/images/blank.gif')}, 2500)
    setTimeout(function(){cartes[deuxChoix].setAttribute('src', 'assets/images/blank.gif')}, 2500)
    cartes[premChoix].style.borderColor = "#5b7383"
    cartes[deuxChoix].style.borderColor = "#5b7383"
    cartes[premChoix].classList.remove('choix', 'flip')
    cartes[deuxChoix].classList.remove('choix', 'flip')
    cartes[premChoix].removeEventListener('click', flip)
    cartes[deuxChoix].removeEventListener('click', flip)
    paires_trouvees.push(choix)
    choix = []
    message.textContent = 'Capturé!'
    setTimeout(function () {
      message.textContent = '';
    }, 2000)
  } else {
    cartes[premChoix].classList.remove('choix', 'flip')
    cartes[deuxChoix].classList.remove('choix', 'flip')
    cartes[premChoix].setAttribute('src', 'assets/images/grass.png')
    cartes[deuxChoix].setAttribute('src', 'assets/images/grass.png')
    message.textContent = `Il s'est échappé : (`
    nb_erreur.push(choix)
    choix = []
    setTimeout(function () {
      message.textContent = '';
    }, 2000);
  }

  choix = []
  choix_id = []
  let errMoinsBonus = nb_erreur.length - paires_trouvees.length
  resultat.textContent = paires_trouvees.length
  msg_erreur.textContent = errMoinsBonus
  if (paires_trouvees.length === deck_normal.length / 2 && errMoinsBonus <= 20) {
    message.textContent = 'Incroyable! : O'
  }
  if (paires_trouvees.length === deck_normal.length / 2 && errMoinsBonus > 25 && errMoinsBonus <= 35) {
    message.textContent = `Bravo! Ça n'a pas été facile!`
  }
  if (paires_trouvees.length === deck_normal.length / 2 && errMoinsBonus > 35) {
    message.textContent = 'Votre mémoire fait défaut!'
  }
}

if(win == true){
  let son = new Audio('assets/sounds/victory.mp3')
    son.play()
    son.volume = 0.3;
}

creerJeu_norm()
});




