import { renderBoards } from './scripts/renderStartBoards'
import { content } from './scripts/data/content'

import { getHeaderMenu, makesVisibleArrow, makesInvisibleArrow} from './scripts/board_menu/board_menu'
import { closeStyleMenu } from './scripts/board_menu/close_style_menu'
import { changesHeaderStyle } from './scripts/board_menu/changing_header_color_and_icon'
import { addTask } from './scripts/board_tasks'
import { changeTitle } from './scripts/change_board_title'
import { removeBoard } from './scripts/remove_new_board_without_title'
import { removeInput } from './scripts/remove_input'
import { boardBtn, addBoardBtn } from './scripts/add_board'
import './assets/add-list.png'
import './styles/style.css'

const boardsField = document.querySelector('#boardsField')
const arrowBoardHeader = document.querySelector('[data-boards-field]');
const dataStartBoard = content.startBoards;

content.startBoards.forEach((elem, index) => {
    boardsField.insertAdjacentHTML('afterbegin', renderBoards(dataStartBoard, index));
})


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

