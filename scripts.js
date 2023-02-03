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
          }
          
             
        });
    return {
        boardArray,
        
    };
})();

//create players

const gamePlayer = (name, mark, score) => {
   let playerScore = 0;
   let playerName = '';
   let playerMark = '';
   playerScore = playerScore + mark;
   playerName = name;
   playerMark = mark
   return { playerName, playerScore, playerMark};
};

const player1 = gamePlayer('Player-1', 'x', '0');
const player2 = gamePlayer('Player-2', 'circle', '0');

//check winner

function winCheck() {

    //Groups Player1's and player2's moves in two different arrays and remove marked
    //to facilitate comparations with conditions
    player1Moves = gameBoard.boardArray.filter(item => item.includes('x'));
    player1Moves = player1Moves.map(j => j.slice(-1, j.lenght));
    player2Moves = gameBoard.boardArray.filter(item => item.includes('circle'));
    player2Moves = player2Moves.map(j => j.slice(-1, j.lenght));

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
    
    let checker = (arr, target) => target.every(v => arr.includes(v));



    winCondition.forEach(element => {
        
        if (checker(player1Moves, element)){
            console.log('Player one Won');
        }
        else if(checker(player2Moves, element)){
            console.log('Player Two Won');
        }
        



    });

   return {
        player1Moves,
        player2Moves,
    }; 

}
//keep score