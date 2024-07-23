import {log} from 'console';
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(io);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../frontend/build')));

const gameState = {
  currentRound: 0,
  cardDisplay: [],
  players: [],
  bids: {}
}


function emitGameState() {
  io.emit('updateGameState', gameState);
}


io.on('connection', (socket) => {
  const playerId = {id: socket.id, cards:};
  console.log('New player connected:', socket.id);

  addPlayer(playerId);

  emitGameState();

  socket.on('disconnect', () => {
    console.log('Player disconnected', playerId);
    removePlayer(playerId);
    emitGameState();
  })
})


// game state handling
function setCards() {
  gameState.cardDisplay = [1, 5, 10, 20];
}

function addPlayer(id) {
  gameState.players.push(id);
}

function removePlayer(id) {
  gameState.players = gameState.players.filter((player) => player.id !== id)
}

function getPlayerIds() {
  return gameState.players.map((p) => p.id);
}


function setBid(id, card, bidValue) {
  gameState.bids[card][id]
}

function getBid(id, card) {
  return gameState.bids[card][id];
}

function payWinners() {
  const playerIds = getPlayerIds();
  const highest = {player: null, }
  for(let i = 0; i < playerIds.length; i++) {
    
  }

}


function roundEnd(){ 
  gameState.bids = {};
  gameState.currentRound++;
  setCards();
}
