import { icons } from '../data/icons';

// const counterBoardHeader = document.querySelectorAll('[data-header-counter]');
export const stateСhangeArrow = (activeArrow, showing) => {
    const arrArrowBoardHeader = document.querySelectorAll('[data-header-arrow]');
    arrArrowBoardHeader.forEach(elem => {
        if (elem !== activeArrow) {
            elem.style.visibility = showing;
        }
    })
}

export const arrowBoardHeader = document.querySelector('[data-boards-field]');

export const makesVisibleArrow = e => {
    const arrowHeader = e.target.closest('[data-header-arrow]');
    if (arrowHeader !== null) {
        arrowHeader.style.opacity = `1`
    }
}

export const makesInvisibleArrow = e => {
    const arrowHeader = e.target.closest('[data-header-arrow]');
    if (arrowHeader !== null) {
        arrowHeader.style.opacity = `0`
    }
}

// События при клике на стрелку в хедере борда
export const getHeaderMenu = e => {
    const arrowHeaderMenu = e.target.dataset.arrow;
    // const headerMenu = e.target.closest('[data-header-menu]');
    const styleMenu = document.querySelector('[data-style-menu]');
    
    if (arrowHeaderMenu !== undefined) {
        const board = e.target.closest('[data-board]');
        const boardPoint = e.target.closest('[data-header-menu]').querySelector('[data-board-point]');
        const arrowHeaderChild = e.target.closest('[data-header-arrow]');
        const arrowParent = e.target.parentElement;
        if (styleMenu === null) {
            const template =  `
                <div class="board__style-menu" data-style-menu>
                    <div class="style-menu__title">
                        <div class="style-menu__text">
                            Внешний вид
                        </div>
                        <div class="style-menu-close" data-menu-close>
                            <i class="fa fa-times" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div class="style-menu__header-colors" data-board-colors>
                        <div id="defaultHeader" class="style-menu__color default-color" data-header-color="rgba(61, 153, 153, .2)">
                                
                        </div>
                        <div id="redHeader" class="style-menu__color red" data-header-color="red">

                        </div>
                        <div id="yellowHeader" class="style-menu__color yellow" data-header-color="yellow">
                            
                        </div>
                        <div id="greenHeader" class="style-menu__color green" data-header-color="green">
                            
                        </div>
                    </div>
                    <div class="style-menu__icons">
                        <div id="coffeeIcon" class="style-menu__icon coffeeCup">
                            ${icons.boardLogoIcons.coffeeCup}
                        </div>
                        <div class="style-menu__icon clock">
                            ${icons.boardLogoIcons.clock}
                        </div>
                        <div class="style-menu__icon music">
                            ${icons.boardLogoIcons.music}
                        </div>
                    </div>
                </div>
            `;

            boardPoint.innerHTML = template;
            arrowParent.innerHTML = icons.boardArrowIcons.chevronUp;

            stateСhangeArrow(arrowHeaderChild, 'hidden');
        }

        if (styleMenu !== null) {
            styleMenu.remove();
            arrowParent.innerHTML = icons.boardArrowIcons.chevronDown;
            stateСhangeArrow(arrowHeaderChild, 'visible');  
        }
        board.setAttribute('class', 'board')
    }
};

// События при клике за пределами стайл-меню  
// document.addEventListener('click', (e) => {
//     const styleMenu = e.target.closest('[data-style-menu]');
//     console.log(e.target.closest('[data-style-menu]'))
// //    if (styleMenu !== null && !e.target.closest('[data-style-menu]') ) {
// //         styleMenu.remove();
// //    }
// });

