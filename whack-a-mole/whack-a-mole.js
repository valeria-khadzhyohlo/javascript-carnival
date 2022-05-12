  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

let cells = document.getElementsByTagName('TD')
let moleImage = document.createElement('img')
moleImage.classList.add('mole')
moleImage.src='mole.PNG'


clicked =()=>{
  moleImage.onclick=whackedMole()
  moleImage.onclick = ()=>{
    play()
    moleImage.remove();
    whackedMole()
  }
  }

//Random mole show up
whackedMole = () =>{
  let randomIndex = Math.floor(Math.random()*24)
  let cell = cells[randomIndex]
  cell.appendChild(moleImage)
}
clicked()

let play =()=> new Audio(src='whack-audio.wav').play()




console.log("Whack-a-Mole!")