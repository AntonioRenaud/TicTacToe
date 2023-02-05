//module for the gameboard

const gameBoard = (() => {
    let boardGrid = document.querySelector('.board-grid');
    const boardArray = [];
    let i = 0;


    
    //Event listener to mark the cells, by adding the X or Circle class
    boardGrid.addEventListener('click', function(e){
        // variable to capture the specific cell that was clicked upon
        let targetCell = e.target;
        // Will only add a class if it wasn't marked previously and is a cell
        if (!targetCell.classList.contains('marked') && targetCell.classList.contains('cell')){
            
            if (i % 2 === 0 ) {
                targetCell.classList.add('x');
                targetCell.classList.add('marked');
                //pushes the specific mark and the position to the boardArray,
                // with every index of the array being the turn and the position
                // taken from data-cell parameter of the cell
                boardArray.push(`x-${targetCell.dataset.cell}`);
                
            } else {
                targetCell.classList.add('circle');
                targetCell.classList.add('marked');
                
                boardArray.push(`circle-${targetCell.dataset.cell}`);
                }
            //counter to help keep track of the turns, if i is a even number, it is X's turn
            //if i is odd, it is circle's turn
            i++;
            if ( i > 4 ){
                gameRound.winCheck();
                
            }
          }
          
             
        });
        // Greys out remaining cells after a winner is found
        function blockCells () {
            let cell = document.querySelectorAll('.cell')
            cell.forEach(i =>
                {
                    if (!i.classList.contains('marked')){
                        i.classList.add('blocked');
                    }
                })
        } 
        //Changes the backgound color of the cells the looser choose to red
        function paintLoserRed(winner){
            let cell = document.querySelectorAll('.cell')
            if (winner === 'player-1') {
                cell.forEach(i => {
                        if (i.classList.contains('circle')){
                            i.classList.add('loser');
                        }
                })
            
            }
            
            else if(winner === 'player-2') {
                cell.forEach(i => {
                        if (i.classList.contains('x')){
                            i.classList.add('loser');
                        }
                })
            }    
        }  

    return {
        boardArray,
        blockCells,
        paintLoserRed
        
    };
})();

//create players

const gamePlayer = (name, score) => {
   let playerScore = 0;
   let playerName = '';
   playerScore = playerScore + score;
   playerName = name;
   return { playerName, playerScore};
};

const player1 = gamePlayer('Player-l', 0);
const player2 = gamePlayer('Player-2', 0);

//check winner




const gameRound = (() => {

    function winCheck() {


        //Groups Player1's and player2's moves in two different arrays and remove mark
        //to facilitate comparations with conditions
        let player1Moves = gameBoard.boardArray.filter(item => item.includes('x')).map(j => j.slice(-1, j.lenght));
        let player2Moves = gameBoard.boardArray.filter(item => item.includes('circle')).map(j => j.slice(-1, j.lenght));
    
       const winCondition = [
            ['0', '1', '2'],
            ['3', '4', '5'],
            ['6', '7', '8'],
            ['0', '3', '6'],
            ['1', '4', '7'],
            ['2', '5', '8'],
            ['0', '4', '8'],
            ['2', '4', '6']
       
        ]
        
        let checkIfIncludes = (array, array2) => array2.every(i => array.includes(i));
    
    
    
        winCondition.forEach(element => {
            
            if (checkIfIncludes(player1Moves, element)){
                console.log('Player one Won');
                gameBoard.blockCells();
                gameBoard.paintLoserRed('player-1');
                player1.playerScore++;
                updateScore();
               
                
            }
            else if(checkIfIncludes(player2Moves, element)){
                console.log('Player Two Won');
                gameBoard.blockCells();
                gameBoard.paintLoserRed('player-2');
                player2.playerScore++;
                updateScore();
            }

            else if( gameBoard.boardArray.length === 9 ) {
                console.log ('Is a Draw!');
            }
            
    
    
    
        });
    
       
    
    }

    function restartGame(){

    }

    function updateScore(){
        const player1Score = document.getElementById('score-1');
        const player2Score = document.getElementById('score-2');
        player1Score.textContent = player1.playerScore;
        player2Score.textContent = player2.playerScore;

    }

    return {
        winCheck
    }; 
})();
