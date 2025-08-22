const CARD_TYPES = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
const NUMBER_CARDS = ['ACE', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'JACK', 'Queen', 'KING'];

function createDeck() {
    const DECK = [];
    for (let suit of CARD_TYPES) {
        for(let rank of NUMBER_CARDS) {
            DECK.push({suit, rank});
        }
    }

    return DECK;
}

function shuffleCards(DECK) {
    for (let i = DECK.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [DECK[i], DECK[j]] = [DECK[j], DECK[i]];
    }
    return DECK;
}

function dealCards(CURRENT_PLAYERS) {
    if (CURRENT_PLAYERS.length < 3 || CURRENT_PLAYERS.length > 5) {
        console.log("Too Little or Too Many Players");
        return;
    }
    
    let deck = createDeck();

    if (CURRENT_PLAYERS.length === 3) {
        deck = deck.filter(c => !(c.suit === 'Clubs' && c.rank === '2'));
    }

    shuffleCards(deck);

    for (let player of CURRENT_PLAYERS) {
        player.hand = [];
    }

    let index = 0;
    while (deck.length > 0) {
        let card = deck.pop();
        CURRENT_PLAYERS[index].hand.push(card);
        index = (index + 1) % CURRENT_PLAYERS.length;
    }
}
