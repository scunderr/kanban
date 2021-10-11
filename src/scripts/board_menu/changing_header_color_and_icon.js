import {icons} from '../icons.js';

const headerColorSwitch = {
    colorCode: null,
    colorElement: null,
};

// События при клике на цвета и иконки в стайл-меню  
export const changesHeaderStyle = e => {
    const styleMenu = document.querySelector('[data-style-menu]');

    if (styleMenu !== null) {
        const boardHeader = e.target.closest('[data-board-header]');
        const iconOption = e.target.dataset.headerIcon;
        const colorOption = e.target.dataset.headerColor;
       
        if (colorOption) {
            if (headerColorSwitch.colorCode !== null) {
                const headerColors = e.target.parentElement.children;
                
                for(let elem of headerColors) {
                    
                    if (elem.dataset.headerColor === headerColorSwitch.colorElement.dataset.headerColor) {
                        elem.style.width = '30px';
                        elem.style.height = '30px';
                    }
                }  
            }
            boardHeader.style.background = colorOption;
            e.target.style.width = '40px';
            e.target.style.height = '40px';
            headerColorSwitch.colorCode = colorOption;
            headerColorSwitch.colorElement = e.target;
        }

        if (iconOption) {
            styleMenu.closest('[data-board-header]').querySelector('[data-board-header-logo]').innerHTML = icons.boardLogoIcons[iconOption];
        }
    }  
};
