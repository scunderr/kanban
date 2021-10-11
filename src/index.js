import { getHeaderMenu, makesVisibleArrow, makesInvisibleArrow} from './scripts/board_menu/board_menu.js'
import { closeStyleMenu } from './scripts/board_menu/close_style_menu.js'

import { changesHeaderStyle } from './scripts/board_menu/changing_header_color_and_icon.js'
import { addTask } from './scripts/board_tasks.js'
import { changeTitle } from './scripts/change_board_title.js'
import { removeBoard, removeInput } from './scripts/remove_new_board_without_title.js'

import { boardBtn, addBoardBtn } from './scripts/header_addBoard-btn.js'
import './assets/add-list.png'
import './css/style.css'

const arrowBoardHeader = document.querySelector('[data-boards-field]');

document.addEventListener('click', getHeaderMenu);
document.addEventListener('click', changesHeaderStyle);

arrowBoardHeader.addEventListener('mouseover', makesVisibleArrow);
arrowBoardHeader.addEventListener('mouseout', makesInvisibleArrow);

document.addEventListener('click', closeStyleMenu);
document.addEventListener('click', addTask);
document.addEventListener('click', changeTitle);
document.addEventListener('click', removeBoard);
document.addEventListener('click', removeInput);
boardBtn.addEventListener('click', addBoardBtn);