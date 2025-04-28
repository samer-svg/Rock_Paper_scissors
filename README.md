# 🪨 📄 ✂️ Rock-Paper-Scissors Game

A browser-based Rock-Paper-Scissors game with score tracking, autoplay mode, and keyboard controls. Built with vanilla JavaScript.

## ✨ Features

- **Classic Gameplay**: Play against the computer
- **Score Tracking**: Wins, losses, and ties persist via localStorage
- **Auto Play Mode**: Watch the computer play itself
- **Keyboard Controls**:
  - `r` for Rock ✊
  - `p` for Paper 🖐️
  - `s` for Scissors ✌️
  - `a` for Auto Play
  - `Backspace` to reset scores
- **Responsive Design**: Works on desktop and mobile

## 🎮 How to Play

1. Choose your move:
   - Click buttons (✊ 🖐️ ✌️) **OR** 
   - Press keys (r/p/s)
2. Computer makes random move
3. See immediate result (win/lose/tie)
4. Track your stats over time
5. Try **Auto Play** mode to watch the AI battle!

## ⚙️ Technical Highlights

```javascript
// Core game logic
if (yourMove === '✊') {
  if (computerMove === '✌️') result = 'you win.';
  if (computerMove === '🖐️') result = 'you lose.';
}

// Auto-play implementation
setInterval(() => {
  const playerMove = computerMoveAuto();
  playGame(playerMove);
}, 1000);
