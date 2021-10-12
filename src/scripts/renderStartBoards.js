import { content } from './data/content';

export const renderStartBoards = (index) => {
    const boardsField = document.querySelector('#boardsField')
    const startBlockTemplate = `
        <div id="${content.startBoards[index].id}" class="board" data-board>
            <div class="board__header" data-board-header>
                <div class="board__header-main" data-header-main>
                    <div class="board__header-logo" data-board-header-logo>
                        ${content.startBoards[index].icon}
                    </div>
                    <div class="board__header-title" data-header-title>
                        ${content.startBoards[index].title}
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
        
        boardsField.insertAdjacentHTML('beforeend', startBlockTemplate);
}


