let diceImages = {
    "diceOne": "https://www.media4math.com/sites/default/files/library_asset/images/MathClipArt--Single-Die-with-1-Showing.png",
    "diceTwo": "https://www.media4math.com/sites/default/files/library_asset/images/MathClipArt--Single-Die-with-2-Showing.png",
    "diceThree": "https://www.media4math.com/sites/default/files/library_asset/images/MathClipArt--Single-Die-with-3-Showing.png",
    "diceFour": "https://www.media4math.com/sites/default/files/library_asset/images/MathClipArt--Single-Die-with-4-Showing.png",
    "diceFive": "https://www.media4math.com/sites/default/files/library_asset/images/MathClipArt--Single-Die-with-5-Showing.png",
    "diceSix": "https://www.media4math.com/sites/default/files/library_asset/images/MathClipArt--Single-Die-with-6-Showing.png"
};

   document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("myBtn").onclick = () => {

        let randomNumberOne = Math.floor(Math.random() * 6) + 1;
        let randomNumberTwo = Math.floor(Math.random() * 6) + 1;

        let randomImageOne = null;
        let imageOne = document.querySelector("img.imgOne");

        let randomImageTwo = null;
        let imageTwo = document.querySelector("img.imgTwo");

        let randomOne = (randomNumberOne, randomImageOne, imageOne) => {
          if(randomNumberOne === 1) {
            randomImageOne = diceImages.diceOne;
            imageOne.setAttribute("src", randomImageOne);
       } else if (randomNumberOne === 2) {
         randomImageOne = diceImages.diceTwo;
         imageOne.setAttribute("src", randomImageOne);
       } else if (randomNumberOne === 3) {
         randomImageOne = diceImages.diceThree;
         imageOne.setAttribute("src", randomImageOne);
       } else if (randomNumberOne === 4) {
         randomImageOne = diceImages.diceFour;
         imageOne.setAttribute("src", randomImageOne);
       } else if (randomNumberOne === 5) {
         randomImageOne = diceImages.diceFive;
         imageOne.setAttribute("src", randomImageOne);
       } else if (randomNumberOne === 6) {
         randomImageOne = diceImages.diceSix;
         imageOne.setAttribute("src", randomImageOne);
       }
        }
           randomOne(randomNumberOne, randomImageOne, imageOne);

              
        let randomTwo = (randomNumberTwo, randomImageTwo, imageTwo) => {
          if(randomNumberTwo === 1) {
            randomImageTwo = diceImages.diceOne;
            imageTwo.setAttribute("src", randomImageTwo);
       } else if (randomNumberTwo === 2) {
         randomImageTwo = diceImages.diceTwo;
         imageTwo.setAttribute("src", randomImageTwo);
       } else if (randomNumberTwo === 3) {
         randomImageTwo = diceImages.diceThree;
         imageTwo.setAttribute("src", randomImageTwo);
       } else if (randomNumberTwo === 4) {
         randomImageTwo = diceImages.diceFour;
         imageTwo.setAttribute("src", randomImageTwo);
       } else if (randomNumberTwo === 5) {
         randomImageTwo = diceImages.diceFive;
         imageTwo.setAttribute("src", randomImageTwo);
       } else if (randomNumberTwo === 6) {
         randomImageTwo = diceImages.diceSix;
         imageTwo.setAttribute("src", randomImageTwo);
       }
        }
           randomTwo(randomNumberTwo, randomImageTwo, imageTwo);

          let Winner = (randomNumberOne, randomNumberTwo) => {
            if(randomNumberOne > randomNumberTwo) {
              document.getElementById("winner").innerHTML = "<span style='font-family: fantasy; font-size: 1.5em' >P</span>layer1 Wins!!";
          } else if(randomNumberTwo > randomNumberOne) { 
              document.getElementById("winner").innerHTML = "<span style='font-family: fantasy; font-size: 1.5em' >P</span>layer2 Wins!!";
          } else {
           document.getElementById("winner").innerHTML = "<span style='font-family: fantasy; font-size: 1.5em' >D</span>raw!!!!!!!!!!!!";
          }
          }

          Winner(randomNumberOne, randomNumberTwo);
        }

       
        
     }
);
            
            
        


      


   
