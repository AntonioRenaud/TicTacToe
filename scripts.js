//module for the gameboard

const gameBoard = (() => {
    let container = document.querySelector('.container');
    let boardGrid = document.querySelector('.board-grid');
    const boardArray = [];
    let i = 1;
    
    //Event listener to mark the cells, by adding the X or Circle class
    boardGrid.addEventListener('click', function(e){
        // variable to capture the specific cell that was clicked upon
        let targetCell = e.target;
        if (!targetCell.classList.contains('marked') && targetCell.classList.contains('cell')){
            //counter to help keep track of the turns, if i is a even number, it is X's turn
            //if i is odd, it is circle's turn
            i++;
            if (i % 2 === 0 ) {
                targetCell.classList.add('x');
                targetCell.classList.add('marked');
                //pushes the specific mark and the position to the boardArray,
                // with every index of the array being the turn
                boardArray.push(`x-${targetCell.dataset.cell}`);
                
            } else {
                targetCell.classList.add('circle');
                targetCell.classList.add('marked');
                
                boardArray.push(`circle-${targetCell.dataset.cell}`);
                }
          }
             
        });
    return {
        boardArray,
    };
})();
//fill the cells

//create players

//check winner

//keep score