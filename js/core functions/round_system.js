function createTurns(CURRENT_PLAYERS) {
    TURN_ORDER = [...CURRENT_PLAYERS];

    TURN_ORDER.sort((a, b) => {
        const aHasThreeOfClubs = a.hand.some(card => card.suit === 'Clubs' && card.rank === '3');
        const bHasThreeOfClubs = b.hand.some(card => card.suit === 'Clubs' && card.rank === '3');

        if (aHasThreeOfClubs && !bHasThreeOfClubs) return -1;
        if (!aHasThreeOfClubs && bHasThreeOfClubs) return 1;
        return 0; 
    });

    console.log(TURN_ORDER);
}

function shuffleTurns() {
    for (let i = TURN_ORDER.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i - 1)) + 1;
        [TURN_ORDER[i], TURN_ORDER[j]] = [TURN_ORDER[j], TURN_ORDER[i]];
    }
}
