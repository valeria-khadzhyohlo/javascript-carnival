  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
let unicorns = [0,0,0]
//declaring a variable for unicorn
let unicorn = document.getElementsByClassName('inflate-an-image')

for (let i=0; i < unicorns.length; i++){
  unicorn[i].onclick = ()=>{
    unicorn[i].src = changePicture(unicorn[i].src)
    if (changePicture(unicorn[i].src) == 'alert'){
      unicorn[i].src = alert(`🦄Unicorn ${[i+1]} says thank you!`)
      
    }
  }
}

//function that goes over each picture and replaces the number of it depending on a previous picture
function changePicture(image){
  str = image.split('');
  num = parseInt(str[str.length-5])
  if (num != 5){
    str[str.length-5] = (num += 1).toString()
  }else{
    return 'alert'
  }
  str = str.join('');
  return str
}



console.log("Inflate The Unicorn!")
