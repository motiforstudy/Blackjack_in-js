

export function calculateHandValue(hand){

    let sumHand = 0;

    for (let card of hand){
        if (card["suite"] === "J" || "Q" || "K"){
            sumHand += 10
        } else if (card["suite"] === "A"){
            sumHand ++
        } else {
            sumHand += card["suite"]
        };
    };

    return sumHand
};


export 