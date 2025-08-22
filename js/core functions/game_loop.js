const GAME_STATES = {
    waiting: 'waiting',
    running: 'running',
    start_menu: 'start_menu',
};

let currentState = GAME_STATES.start_menu;
let active = false;
let CURRENT_PLAYERS = [];

let TURN_ORDER = [];


let BET_POOL = 17;

function onStart() {
    currentState = GAME_STATES.running;
    while(CURRENT_PLAYERS.length < 3) {
        let id = Math.random().toString(36).substring(2, 10);
        CURRENT_PLAYERS.push(new Player(id));
    }

    dealCards(CURRENT_PLAYERS);
    createTurns(TURN_ORDER);
    gameLoop();
}

onStart();

function gameLoop() {
    if (currentState !== GAME_STATES.running) return;


    requestAnimationFrame(gameLoop);
}

function onStop() {
    currentState = GAME_STATES.start_menu;
}
