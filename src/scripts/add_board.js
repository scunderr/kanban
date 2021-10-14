import { statuses } from './data/statuses';
import { elements } from './data/elements';
import { delayRemovalAnimation } from './data/func'; 
import { renderBoards } from './renderStartBoards';
import { content } from './data/content'

export const boardBtn = document.querySelector('#add-board-btn');

export const addBoardBtn = (e) => {
    const boardsField = document.querySelector('#boardsField'); 
    let input = boardsField.querySelector('[data-header-input]');
    const dataNewBoard = content.newBoards;

    // taskBoardCounter[`board-${createdBoardId}`] = 0;
    if (!input) {
        boardsField.insertAdjacentHTML('afterbegin', renderBoards(dataNewBoard, 0));
        boardsField.querySelector('[data-header-input]').focus();
    }
    
    if (e.target === elements.addBoardButton() && !statuses.boardStatus) {
        statuses.boardStatus = true;
        return
    }                               

    if (e.target === elements.addBoardButton()) {
        if (statuses.inputBoardAnimationStatus) {
            delayRemovalAnimation(input, 'blinking', 300);
        }

        if (input) {
            statuses.inputBoardAnimationStatus = true;
            input.classList.add('blinking');
            delayRemovalAnimation(input, 'blinking', 300);
        }

        input.focus(); 
    }
};
 

