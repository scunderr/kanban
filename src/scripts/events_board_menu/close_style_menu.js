import { icons } from '../data/icons';
import { stateСhangeArrow } from './board_menu';

// События при клике на крестик в стайл-меню   
export const closeStyleMenu = (e) => {
    const styleMenu = document.querySelector('[data-style-menu]');
    const arrowHeaderChild = e.target.closest('[data-header-arrow]');

    if (styleMenu !== null) {
        const closeButton = document.querySelector('[data-menu-close]');
        
        if (e.target.parentElement === closeButton) {
            const headerMenu = e.target.closest('[data-header-menu]').querySelector('[data-header-arrow]');
            styleMenu.remove();
            headerMenu.innerHTML = icons.boardArrowIcons.chevronDown;

            stateСhangeArrow(arrowHeaderChild, 'visible'); 
        }
    }  
};