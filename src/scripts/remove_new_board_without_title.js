import { statuses } from './data/statuses';
import { elements } from './data/elements';

// const titleStartBoard = board.querySelector('[data-header-title]')

export const removeBoard = e => {
    const input = document.querySelector('[data-header-input]');
    const board = input.closest('[data-board]');
    const inputConditions = input !== null 
                            && input.value === '' 
                            && e.target !== input;

    const newBoardConditions =  board.id !== 'board1' 
                                    && board.id !== 'board2' 
                                    && board.id !== 'board3';       

    const boardRemovalConditions =  inputConditions 
                                    && newBoardConditions 
                                    

     if (boardRemovalConditions 
        && !statuses.boardStatus) {
            statuses.boardStatus = true;
            return
    }
                                
    if (boardRemovalConditions 
        && statuses.boardStatus 
        && e.target.closest('#add-board-btn') !== elements.addBoardButton()) {
            board.remove();
            statuses.boardStatus = false;
    } 

    // if (boardRemovalConditions && !statuses.boardStatus && e.target !== elements.addBoardButton()) {
    //     board.remove();
    //     statuses.boardStatus = false;
    //     console.log('fff')
    // } 
}    

