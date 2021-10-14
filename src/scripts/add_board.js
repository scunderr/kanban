import {icons} from './data/icons';
import { statuses } from './data/statuses';
import { elements } from './data/elements';
import { delayRemovalAnimation } from './data/func'; 
import { renderStartBoards } from './renderStartBoards';

export const boardBtn = document.querySelector('#add-board-btn');

export const addBoardBtn = (e) => {
    const boardsField = document.querySelector('#boardsField');
    let input = boardsField.querySelector('[data-header-input]')
    const createdBoardId = Date.now();

    const template = `
        <div id="board-${createdBoardId}" class="board board-animation" data-board>
            <div class="board__header" data-board-header>
                <div class="board__header-main" data-header-main>
                    <div class="board__header-logo" data-board-header-logo>
                        ${icons.boardLogoIcons.question}
                    </div>
                <div class="board__header-title" data-header-title>
                    <input class="board__header-input" type="text" 
                    onclick="this.select();" data-header-input>
                </div>
            </div>
            <div class="board__header-menu" data-header-menu>
                <div class="board__header-counter"  onmousedown="return false" data-header-counter>0</div>
                <div class="board__header-arrow" data-header-arrow>
                    <i class="fa fa-chevron-down" aria-hidden="true" data-arrow></i>
                </div>
                <div class="board_point" data-board-point>
                                
                </div>
            </div>
            </div>
            <div class="board__field" data-board-field>
            
            </div>
            <button class="board__footer" data-board-footer>
                <span class="board__footer-plus">+</span>
                Добавить задачу
            </button>
        </div>
    `;

    // taskBoardCounter[`board-${createdBoardId}`] = 0;
    if (!input) {
        boardsField.insertAdjacentHTML('afterbegin', template);
        input = boardsField.querySelector('[data-header-input]')
        input.focus();
    }

    // const board = input.closest('[data-board]');
    // board.remove()
    input = boardsField.querySelector('[data-header-input]')
    
    if (e.target === elements.addBoardButton() && !statuses.boardStatus) {
        statuses.boardStatus = true;
        console.log(statuses.boardStatus)
        return
    }                               

    if (e.target === elements.addBoardButton()) {
        console.log('dggg')

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
 

