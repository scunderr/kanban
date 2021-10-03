import { getHeaderMenu, closeStyleMenu, makesVisibleArrow, makesInvisibleArrow} from './scripts/board_menu.js'
import { addTask } from './scripts/board_tasks.js'
import { changeTitle } from './scripts/board_title.js'
import { boardBtn, addBoardBtn } from './scripts/header_addBoard-btn.js'
import './assets/add-list.png'
import './css/style.css';
import './css/board_header.css';
import './css/board_menu.css';

const arrowBoardHeader = document.querySelector('[data-boards-field]');

document.addEventListener('click', getHeaderMenu);
arrowBoardHeader.addEventListener('mouseover', makesVisibleArrow);
arrowBoardHeader.addEventListener('mouseout', makesInvisibleArrow);
document.addEventListener('click', closeStyleMenu);
document.addEventListener('click', addTask);
document.addEventListener('click', changeTitle);
boardBtn.addEventListener('click', addBoardBtn);