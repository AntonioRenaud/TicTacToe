//module for the gameboard

const gameBoard = (() => {
    let container = document.querySelector('.container');
    let boardGrid = document.querySelector('.board-grid');
    const boardArray = [];
    let i = 0;
    
    boardGrid.addEventListener('click', function(e){
        let targetCell = e.target;
        if (!targetCell.classList.contains('marked') && targetCell.classList.contains('cell')){
            i++;
            if (i % 2 === 0 ) {
                targetCell.classList.add('circle');
                targetCell.classList.add('marked');
                boardArray.push(`circle-${targetCell.dataset.cell}`);
            } else {
                targetCell.classList.add('x');
                targetCell.classList.add('marked');
                boardArray.push(`x-${targetCell.dataset.cell}`);
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