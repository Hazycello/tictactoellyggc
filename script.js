// script.js

document.addEventListener('DOMContentLoaded', () => {
    const humanVsHumanButton = document.getElementById('human-vs-human');
    const aiVsHumanButton = document.getElementById('ai-vs-human');
    const gameBoard = document.getElementById('game-board');
    const aiDifficulty = document.getElementById('ai-difficulty');
    const difficultyButtons = document.querySelectorAll('.difficulty');

    humanVsHumanButton.addEventListener('click', () => {
        setupBoard();
        aiDifficulty.classList.add('hidden');
    });

    aiVsHumanButton.addEventListener('click', () => {
        setupBoard();
        aiDifficulty.classList.remove('hidden');
    });

    difficultyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const level = button.getAttribute('data-level');
            setupAI(level);
        });
    });

    function setupBoard() {
        gameBoard.innerHTML = ''; // Clear the board
        for (let i = 0; i < 9; i++) {
            const cell = document.createElement('div');
            cell.addEventListener('click', () => cellClick(cell));
            gameBoard.appendChild(cell);
        }
        gameBoard.classList.remove('hidden');
    }

    function cellClick(cell) {
        // Handle cell click
        if (!cell.textContent) {
            cell.textContent = '🌕'; // Example of placing moon
            // Add logic for alternating turns and game state
            if (aiVsHumanButton.classList.contains('active')) {
                // AI move after player
                setTimeout(() => aiMove(), 500);
            }
        }
    }

    function setupAI(level) {
        // Configure AI based on difficulty level
        console.log(`AI difficulty level: ${level}`);
        // Implement AI behavior based on difficulty level
    }

    function aiMove() {
        // Add AI move logic here
    }
});