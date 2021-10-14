import { elements } from "./data/elements";

export const removeInput = e => {
    const input = document.querySelector('[data-header-input]');
    const board = input.closest('[data-board]');
    const headerMain = board.querySelector('[data-header-main]');
    const defaultBoardConditions =  board.id === 'board1' 
                                    || board.id === 'board2' 
                                    || board.id === 'board3';    

    if (defaultBoardConditions && input.value === '' && e.target !== elements.boardTitle) {
        input.remove();
        headerMain.append(elements.boardTitle);
    }
}