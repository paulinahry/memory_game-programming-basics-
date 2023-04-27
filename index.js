console.log('hello');

//---------------------------- MY NOTES----------------------------------------------
////// The querySelector() method returns the first element that matches a CSS selector. // can use here getElementById as well //querySelectorAll - all
//-----------------------------------------------------------------------------------


const gameSection = document.getElementById('game');
const playersMoves = document.querySelector('span');
let moves = 10;

//setting players movs in span 
playersMoves.textContent = moves

//data generating (img) in array of objects
// [{imgSrc:'./images/hero}]
// images.src = imgSrc

//--------function that stores images in array of objects

const getData = () => [
     {imgSrc: './images/cassie_cage.jpg', imgName: 'cassie-cage'},
     {imgSrc: './images/goro.jpeg', imgName: 'goro'},
     {imgSrc: './images/finishhim.jpeg', imgName: 'finishhim'},
     {imgSrc: './images/kitana.jpeg', imgName: 'kitana'},
     {imgSrc: './images/mizuri.jpg', imgName: 'mizuri'},
     {imgSrc: './images/tanya.jpg', imgName: 'tanya'},
     {imgSrc: './images/sub-zero.jpeg', imgName: 'sub-zero'},
     {imgSrc: './images/raiden.jpeg', imgName: 'raiden'},
     {imgSrc: './images/kung-lao.jpg', imgName: 'kung-lao'},
     {imgSrc: './images/fatality.jpeg', imgName: 'fatality'},

     {imgSrc: './images/cassie_cage.jpg', imgName: 'cassie-cage'},
     {imgSrc: './images/goro.jpeg', imgName: 'goro'},
     {imgSrc: './images/finishhim.jpeg', imgName: 'finishhim'},
     {imgSrc: './images/kitana.jpeg', imgName: 'kitana'},
     {imgSrc: './images/mizuri.jpg', imgName: 'mizuri'},
     {imgSrc: './images/tanya.jpg', imgName: 'tanya'},
     {imgSrc: './images/sub-zero.jpeg', imgName: 'sub-zero'},
     {imgSrc: './images/raiden.jpeg', imgName: 'raiden'},
     {imgSrc: './images/kung-lao.jpg', imgName: 'kung-lao'},
     {imgSrc: './images/fatality.jpeg', imgName: 'fatality'},
];


//-------------random function for cards using sort function

const randomCards = () => {
    const cardData = getData();
    // return cardData = Math.floor(Math.random()*Math.floor(cardData.length))
    return cardData.sort(() => Math.random() -0.5);
}
// randomCards()

//----------------------------------MY NOTES-----------------------------------------
//appendChild() method is used to insert a new node or reposition an existing node as the last child of a particular parent node
//appendChild is used to insert new node in DOM. innerHTML is a property of DOM that allows to replace content of an element with different HTML, which automatically gets parsed into DOM nodes.
//-----------------------------------------------------------------------------------




//--------------------------card generator function
const createCards = ( ) => {
    const cardData = randomCards();
    //inserting HTML code (generate one card), thats why need to use loop becaouse want 20 cards 
    cardData.forEach( (item) => {
        const card = document.createElement('div');
        const front = document.createElement('img');
        const back = document.createElement('div');
        card.classList = 'card';
        front.classList = 'front';
        back.classList = 'back';

        //adding info to card
        front.src = item.imgSrc;

        //adding atributte 'name' witch take the name of image
        card.setAttribute('name', item.imgName)

        gameSection.appendChild(card);// section(parent element) append new div clas='card'  
        card.appendChild(front);
        card.appendChild(back);


        card.addEventListener('click', (item) => {
            card.classList.toggle('toggleCard');
            checkCards(item)
        })
    });
    
};


//--------------------------check cARDS IF THE SAME 
const checkCards = (elem) => {
    console.log(elem)
    const clickedCard = elem.target;
    clickedCard.classList.add('flipped')
    clickedCard.classList.add('opacity')

    console.log(clickedCard);
    //adding new flip class ( use to check if they match)
    const flippedCards = document.querySelectorAll('.flipped')

    //if two of them are flipped, check if match 
    //when click, adding a '.flipped' class and then check
    if(flippedCards.length ===2){
        if(flippedCards[0].getAttribute('name')===
            flippedCards[1].getAttribute('name')){
                console.log("That's right!")

                flippedCards.forEach(card => {
                    card.classList.remove('flipped')

                    card.style.pointerEvents = 'none' //ist nicht clickbar
                   
                    setTimeout( () => card.style.opacity ='25%',  2500)                  
                })

            }else {
                console.log('Try again...')

                flippedCards.forEach( card => {
                    card.classList.remove('flipped')
                    setTimeout(()=> card.classList.remove('toggleCard'),1500)
                });

                moves--
                playersMoves.textContent = moves

                if(moves ===0 ){
                    playAgain.classList.add('active-playagain')
                    playAgainBtn.classList.add('btn-active')
                    overlay.classList.add('active')
                    clickPlayAgain()              
                }
            } 
    }
}


// ---------------------------restart function 
function restart () {
    let cardData = randomCards();
    let cards = document.querySelectorAll('.card')
    cardData.forEach(( card, index) => {
        cards[index].classList.remove('toggleCard')

            //randomize
        cards[index].style.pointerEvents = 'all'
        cards[index].setAttribute('name', card.name)

    } );
    moves = 10;
    playersMoves.textContent = moves;
};

createCards();

//----------------------play again pop up 
const playAgain = document.getElementById('playAgainSection')
const playAgainBtn = document.getElementById('playAgainBtn')
const overlay = document.getElementById('overlay')


//--------------------------play again function
function clickPlayAgain() {
    playAgainBtn.onclick = () =>{
        playAgain.classList.remove('active-playagain');
        playAgainBtn.classList.remove('btn-active');
        overlay.classList.remove('active');
        restart();
    };
}


//----------------------end--------------------------





