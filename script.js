const emojis = ["🤡","😎","🤠","😱","👿","🤖"];
const cards = [];
let flipped = 0;
let matchesFound = 0;
let emoji = "";

let previousCard;
let presentCard;

let flippedBool = false;

function cardClick(card){
    if(card.textContent == "?" && flippedBool == false){
        //create cards by clicking them
        if( !( cards.some(c => c.card === card)) ){

            emoji = emojis[Math.floor(Math.random() * emojis.length)];


            let emojiCounter = cards.filter(c => c.emoji === emoji).length;

            while(emojiCounter >= 2){
                emoji = emojis[Math.floor(Math.random() * emojis.length)];
                emojiCounter = cards.filter(c => c.emoji === emoji).length;
            }
            
            


            const memoryCard = {card, emoji}
            cards.push(memoryCard);
        }

        //save chosen cards
        previousCard = presentCard;
        presentCard = card;

        //show its emoji in viewport (or new)
        card.textContent = cards.find(c => c.card === card).emoji;

        card.style.backgroundColor = "red";
        if(presentCard != previousCard){
            flipped++;
        }

 
        //console.log(cards); checking logs
        

        //check if cards match
        if(flipped == 2){
            //console.log(presentCard, previousCard); checking
            flippedBool = true;
            checkMatch(presentCard, previousCard);
        }
        //console.log(flipped); checking flipp counter

    }
}

function checkMatch(presentCardValue, previousCardValue){
    if(presentCardValue.textContent == previousCardValue.textContent){
        presentCardValue.style.backgroundColor = "green";
        previousCardValue.style.backgroundColor = "green";

        previousCard = null;
        presentCard = null;
        flippedBool = false;
        flipped = 0;
    } else {
        setTimeout( () => {
            presentCardValue.style.backgroundColor = "#007bff";
            previousCardValue.style.backgroundColor = "#007bff";

            presentCardValue.textContent = "?";
            previousCardValue.textContent = "?";
            flippedBool = false;
            flipped = 0;
            previousCard = null;
            presentCard = null;
        }, 1000);
    }
    
}

