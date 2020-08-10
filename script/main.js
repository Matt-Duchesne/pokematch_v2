"use strict";

document.addEventListener('DOMContentLoaded', () => {

  const jeu = document.querySelector('.jeu')
  const resultat = document.querySelector('#resultat')
  const message = document.querySelector('#message')
  const msg_erreur = document.querySelector('#erreur')
  const reset = document.querySelector('#reset')
  const nb_erreur = []
  const paires_trouvees = []
  let en_cours = 0
  let choix = []
  let choix_id = []
   
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

const deck_easy = [
  {nom: 'pikachu', image: 'assets/images/pikachu.png', son: 'assets/sounds/pikachu.mp3'},
  {nom: 'bulbasaur', image: 'assets/images/bulbasaur.png', son: 'assets/sounds/bulbasaur.mp3'},
  {nom: 'charmander', image: 'assets/images/charmander.png', son: 'assets/sounds/charmander.mp3'},
  {nom: 'eevee', image: 'assets/images/eevee.png', son: 'assets/sounds/eevee.mp3'},
  {nom: 'jigglypuff', image: 'assets/images/jigglypuff.png', son: 'assets/sounds/jigglypuff.mp3'},
  {nom: 'magikarp', image: 'assets/images/magikarp.png', son: 'assets/sounds/magikarp.mp3'},
  {nom: 'squirtle', image: 'assets/images/squirtle.png', son: 'assets/sounds/squirtle.mp3'},
  {nom: 'pikachu', image: 'assets/images/pikachu.png', son: 'assets/sounds/pikachu.mp3'},
  {nom: 'bulbasaur', image: 'assets/images/bulbasaur.png', son: 'assets/sounds/bulbasaur.mp3'},
  {nom: 'charmander', image: 'assets/images/charmander.png', son: 'assets/sounds/charmander.mp3'},
  {nom: 'eevee', image: 'assets/images/eevee.png', son: 'assets/sounds/eevee.mp3'},
  {nom: 'jigglypuff', image: 'assets/images/jigglypuff.png', son: 'assets/sounds/jigglypuff.mp3'},
  {nom: 'magikarp', image: 'assets/images/magikarp.png', son: 'assets/sounds/magikarp.mp3'},
  {nom: 'squirtle', image: 'assets/images/squirtle.png', son: 'assets/sounds/squirtle.mp3'},
]

// const deck_normal = [
//   {nom: 'pikachu', image: 'assets/images/pikachu.png', son: 'assets/sounds/pikachu.mp3'},
//   {nom: 'bulbasaur', image: 'assets/images/bulbasaur.png', son: 'assets/sounds/bulbasaur.mp3'},
//   {nom: 'charmander', image: 'assets/images/charmander.png', son: 'assets/sounds/charmander.mp3'},
//   {nom: 'pikachu', image: 'assets/images/pikachu.png', son: 'assets/sounds/pikachu.mp3'},
//   {nom: 'bulbasaur', image: 'assets/images/bulbasaur.png', son: 'assets/sounds/bulbasaur.mp3'},
//   {nom: 'charmander', image: 'assets/images/charmander.png', son: 'assets/sounds/charmander.mp3'},
// ]

const deck = [deck_easy, deck_normal]

message.textContent = 'Trouvez les paires pour les capturer!'

deck_easy.sort(() => 0.5 - Math.random())
deck_normal.sort(() => 0.5 - Math.random())

function temps(){let temps= Date.now();   
  setInterval(function() {
    document.getElementById('temps_affichage').innerHTML = ((Date.now() - temps) / 1000).toFixed(0) + ' seconde(s)';
  }, 1000);}

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

// retourne la carte et affiche l'image derrière. Fait de façon à ce que le joueur ne puisse pas tricher avec un 'inspect'.
// l'image est attribuée au moment ou le joueur clique sur la carte grace au data-set qui est relié au array plus haut
// le d'id de la carte choisie ainsi que son nom sont envoyés dans deux array (choix et choix_id). Ces arrays serviront à faire la validation
// si deux selections sont faite, la fonction de validation est enclanchée avec un délai d'une seconde.
// cette fonction est non fonctionnelle si le joueur tente de faire plus de deux sélections.
function flip() {
  if (choix.length < 2) {
    let clic = new Audio('assets/sounds/flip.mp3')
    clic.play()
    clic.volume = 1
    let carte_id = this.getAttribute('data-id')
    choix.push(deck_normal[carte_id].nom)
    choix_id.push(carte_id)
    this.setAttribute('src', deck_normal[carte_id].image)
    this.classList.add('flip')
    this.classList.add('choix')
    if (choix.length === 2) {
      setTimeout(verif_paire, 1000)
    }
    en_cours++
    if(en_cours < 2){
      temps()
    }
  }
}

// vérification d'une paire
// 
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
    cartes[premChoix].setAttribute('src', 'assets/images/captured_transparent.gif')
    cartes[deuxChoix].setAttribute('src', 'assets/images/captured_transparent.gif')
    setTimeout(function(){cartes[premChoix].setAttribute('src', 'assets/images/clear2.gif')}, 2500)
    setTimeout(function(){cartes[deuxChoix].setAttribute('src', 'assets/images/clear2.gif')}, 2500)
    setTimeout(function(){cartes[premChoix].style.boxShadow = 'none'}, 100)
    setTimeout(function(){cartes[deuxChoix].style.boxShadow = 'none'}, 100)
    cartes[premChoix].style.borderColor = "transparent"
    cartes[deuxChoix].style.borderColor = "transparent"
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
    choix_id = []
    setTimeout(function () {
      message.textContent = '';
    }, 2000);
  }

  choix = []
  choix_id = []
  let errMoinsBonus = nb_erreur.length - paires_trouvees.length
  resultat.textContent = paires_trouvees.length
  msg_erreur.textContent = errMoinsBonus

// conditions de victoire
// 
  if (paires_trouvees.length === deck_normal.length / 2 && errMoinsBonus <= 20) {
      stopAllAudio()
      let son = new Audio('assets/sounds/victory1.mp3')
      son.play()
      son.volume = 0.5
      jeu.innerHTML = '';
      jeu.classList.add('victoire1') 
  } else if (paires_trouvees.length === deck_normal.length / 2 && errMoinsBonus > 20 && errMoinsBonus <= 30) {
      stopAllAudio()
      let son1 = new Audio('assets/sounds/victory2.mp3')
      son1.play()
      son1.volume = 0.5
      jeu.innerHTML = '';
      jeu.classList.add('victoire2') 
  } else if (paires_trouvees.length === deck_normal.length / 2 && errMoinsBonus > 30) {
      stopAllAudio()
      let son2 = new Audio('assets/sounds/you_lose.mp3')
      son2.play()
      son2.volume = 0.3
      jeu.innerHTML = '';
      jeu.classList.add('fail') 
  }
}

// Bouton qui sert à remettre le jeu à zéro
reset.addEventListener('click', function() {
  location.reload();
})

// ***** Section musique *****
let gym = document.querySelector('#gym');
let wild = document.querySelector('#wild');
let route1 = document.querySelector('#route1')
let theme = document.querySelector('#theme')
let stop = document.querySelector('#stop')
let music_all = document.querySelectorAll('audio');

//fonction qui arrête toute musique en cours
function stopAllAudio(){
	music_all.forEach(function(audio){
		audio.pause();
	});
}

//chaque bouton pointe vers un input 'button' sur lequel est attribué un thème musical
document.querySelector('#play-1').addEventListener('click', function(){
	stopAllAudio();
  gym.play();
  gym.volume = 0.3
})
document.querySelector('#play-2').addEventListener('click', function(){
	stopAllAudio();
  wild.play();
})
document.querySelector('#play-3').addEventListener('click', function(){
	stopAllAudio();
	route1.play();
})
document.querySelector('#play-4').addEventListener('click', function(){
	stopAllAudio();
  theme.play();
  theme.volume = 0.5
})
document.querySelector('#stop').addEventListener('click', function(){
	stopAllAudio();
})


creerJeu_norm()
});




