import { statuses } from './statuses';

// const titleStartBoard = board.querySelector('[data-header-title]')

export const removeBoard = e => {
    const target = e.target;
    const input = document.querySelector('[data-header-input]');
    const board = input.closest('[data-board]');
    const headerMain = board.querySelector('[data-header-main]'); 
    const titleConditions = input !== null 
                            && input.value === '' 
                            && e.target !== input;
    const newBoardConditions =  board.id !== 'board1' 
                                    && board.id !== 'board2' 
                                    && board.id !== 'board3';  
    const defaultBoardConditions =  board.id === 'board1' 
                                    || board.id === 'board2' 
                                    || board.id === 'board3';         

    // console.log(board.id)

    if (titleConditions && newBoardConditions && !statuses.boardStatus) {
        statuses.boardStatus = true;
        return
    }

    if (titleConditions && newBoardConditions && statuses.boardStatus) {
        board.remove();
        statuses.boardStatus = false;
    } 
}    

export const removeInput = e => {
    const input = document.querySelector('[data-header-input]');
    const board = input.closest('[data-board]');
    const headerMain = board.querySelector('[data-header-title]'); 
    // const title = headerMain.querySelector('[data-header-title]'); 
    const defaultBoardConditions =  board.id === 'board1' 
                                    || board.id === 'board2' 
                                    || board.id === 'board3';    

    if (defaultBoardConditions && input.value === '' && statuses.titleStatus && e.target !== headerMain) {
        console.log(e.target)
        console.log( headerMain)
    }
}