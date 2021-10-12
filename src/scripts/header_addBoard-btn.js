import {icons} from './data/icons';

export const boardBtn = document.querySelector('#add-board-btn');

export const addBoardBtn = () => {
    const boardsField = document.querySelector('#boardsField');
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
    boardsField.insertAdjacentHTML('afterbegin', template);

    const input = boardsField.querySelector('[data-header-input]')
    
    input.focus();
};
