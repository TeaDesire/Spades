const CARD_TYPES = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
const NUMBER_CARDS = ['ACE', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'JACK', 'Queen', 'KING'];
const DECK = {}
const dealtCards = {}

function createDeck() {
    for(let i = 0; i < 4; i++) {
        DECK[CARD_TYPES[i]] = [...NUMBER_CARDS]
    }
}

function dealCards(CURRENT_PLAYERS) {
    createDeck();

    if (CURRENT_PLAYERS.length === 3) {
        DECK['Clubs'] = DECK['Clubs'].filter(c => c !== '2');
    } else if (CURRENT_PLAYERS.length < 3 || CURRENT_PLAYERS.length > 5) {
        console.log("Too Little or Much Players")
        return 0;
    }

    const DECK_AMMOUT = Object.values(DECK)
        .reduce((sum, cards) => sum + cards.length, 0);

    const evenCardSplit = Math.floor(DECK_AMMOUT / CURRENT_PLAYERS.length);

    for (let player of CURRENT_PLAYERS) {
        player.hand = [];

        while (player.hand.length < evenCardSplit) {
            const suit = CARD_TYPES[Math.floor(Math.random() * CARD_TYPES.length)];
            const rank = DECK[suit][Math.floor(Math.random() * DECK[suit].length)];

            const cardID = Math.random().toString(36).substring(2, 10);

            if (!dealtCards[cardID]) {
                dealtCards[cardID] = true;
                player.hand.push({suit, rank, cardID})
            }
        }
    }
}