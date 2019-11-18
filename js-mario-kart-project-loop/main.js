// Mario Kart Project
'use strict';


// Global Variables
let numBan = 0;
let numGreenShell = 0;
let numStar = 0;
let numGoldenMushroom = 0;
let numBulletBill = 0;

// Event Listeners
document.getElementById('rnd-itm').addEventListener('click', randomItem)
document.getElementById('plus5').addEventListener('click', plusFive)
document.getElementById('until10bullbill').addEventListener('click', until10BulletBills)
document.getElementById('run').addEventListener('click', runBtn)




// Event Functions
function randomItem() {
    // Generate a random number
    let randNum = Math.random();

    // Generate Item   
     if (randNum < 0.75) {
        // generate either banana or green shell
        let randItm = Math.random();
        
        if (randItm < 0.5) {
            console.log('banana')
            numBan++;
            document.getElementById('banana').innerHTML = numBan
            document.getElementById('results').innerHTML += '<img src="media/Giant_Banana_-_Koopa_Kart_8_Deluxe.png">';

        } else if (randItm < 0.8) {
            console.log('star')
            numStar++;
            document.getElementById('star').innerHTML = numStar;
            document.getElementById('results').innerHTML += '<img src="media/star.png">';


        } else {
            console.log('greenshell')
            numGreenShell++;
            document.getElementById('green-shell').innerHTML = numGreenShell;
            document.getElementById('results').innerHTML += '<img src="media/Green_Shell_Artwork_-_Mario_Kart_Wii.png">';

        }
   
   
    } else if (randNum < 0.85) {
        console.log('golden')
        numGoldenMushroom++
        document.getElementById('golden-mushroom').innerHTML = numGoldenMushroom;
        document.getElementById('results').innerHTML += '<img src="media/28597.png">';

    } else { 
        console.log('bullet-bill')
        numBulletBill++
        document.getElementById('bullet-bill').innerHTML = numBulletBill;
        document.getElementById('results').innerHTML += '<img src="media/Bullet_Bill_-_Koopa_Kart_Wii.png">';


    }


} 

function plusFive() {
    for (let n = 0; n < 5; n++)
        randomItem();
}

function until10BulletBills() {
    let count = 0
    while (numBulletBill < 10) {
        randomItem();
        count++
    }
    console.log('Count: ' + count)

    
   
}

function runBtn() {
    let count = 0
    let inputNumber = Number(document.getElementById('input').value);
    for (let i = 0; i < inputNumber; i++) {
        randomItem()
        count++

    }

}

