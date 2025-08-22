let active = false;
let CURRENT_PLAYERS = [];

let BET_POOL = 17;

function onStart() {
    active = true;
    while(CURRENT_PLAYERS.length < 3) {
        let id = Math.random().toString(36).substring(2, 10);
        CURRENT_PLAYERS.push(new Player(id));
    }

    dealCards(CURRENT_PLAYERS);
    gameLoop();
}


onStart();

function gameLoop() {
    if (!active) return;

    requestAnimationFrame(gameLoop);
}

function onStop() {
    active = false;
}
