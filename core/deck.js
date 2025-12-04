

export function buildStandardDeck(){

    let deck = []

    let cardSign = ["H", "C", "D", "S"];
    let numbers = ["A" ,2,3,4,5,6,7,8,9,10, "J", "Q", "K"];

    for (let item of cardSign){
            for (let num of numbers){
                let card = {rank : item, suite : num};
                deck.push(card);
            };
    };

    return deck

};



export function shuffle_by_suit(fullDeck){

    let count = 0;

    while(count <= 5000){

        let indexI = Math.floor(Math.random() * 51);
        let indexJ = Math.floor(Math.random() * 51);

        if (indexI !== indexJ){
            if (fullDeck[indexI]["rank"] === "H"){
                if (indexJ % 5 === 0){
                    let tempIndex = fullDeck[indexI];
                    fullDeck[indexI] = fullDeck[indexJ];
                    fullDeck[indexJ] = tempIndex;
                    count ++;
                }
            }else if(fullDeck[indexI]["rank"] === "C"){
                if (indexJ % 3 === 0){
                    let tempIndex = fullDeck[indexI];
                    fullDeck[indexI] = fullDeck[indexJ];
                    fullDeck[indexJ] = tempIndex;
                    count ++;
                }
            }else if(fullDeck[indexI]["rank"] === "D"){
                if (indexJ % 2 === 0){
                    let tempIndex = fullDeck[indexI];
                    fullDeck[indexI] = fullDeck[indexJ];
                    fullDeck[indexJ] = tempIndex;
                    count ++;
                }
            }else if (fullDeck[indexI]["rank"] === "S"){
                                if (indexJ % 7 === 0){
                    let tempIndex = fullDeck[indexI];
                    fullDeck[indexI] = fullDeck[indexJ];
                    fullDeck[indexJ] = tempIndex;
                    count ++;
                }
            }
        }
    }
    return fullDeck
};