  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //


var itemIndex = 0
let clothingIndex = 0
let clothing = ['body','head','shoes']

changeClothes = ()=>{
  let clothesSrc = "images/" + clothing[clothingIndex] + itemIndex + ".png"
  document.getElementById('message').innerHTML = 'Please choose the ' +  clothing[clothingIndex] + ' item'
  document.getElementById(clothing[clothingIndex]).src = clothesSrc
  
}

document.onkeydown = checkKey;
function checkKey(e) {
    e = e || window.event;
    //right
    if (e.keyCode == '39') {
      changeClothes()
      itemIndex += 1;
      if (itemIndex>6){
        itemIndex = 0
      }
    }
    //left
    else if (e.keyCode == '37') {
      changeClothes()
      itemIndex -= 1;
      if (itemIndex<0){
        itemIndex = 6
      }
    }
    //down
    else if (e.keyCode == '40') {
      clothingIndex -= 1;
      if (clothingIndex < 0){
        clothingIndex = 2
      }
    }
    //up
    else if (e.keyCode == '38') {
      clothingIndex += 1;
      if (clothingIndex > 2){ 
        clothingIndex = 0
      }
    }
  }


console.log("Dress The Clown!")