import { renderBoards } from './scripts/renderStartBoards'
import { content } from './scripts/data/content'

import { getHeaderMenu, makesVisibleArrow, makesInvisibleArrow} from './scripts/events_board_menu/board_menu'
import { closeStyleMenu } from './scripts/events_board_menu/close_style_menu'
import { changesHeaderStyle } from './scripts/events_board_menu/changing_header_color_and_icon'
import { addTask } from './scripts/events_tasks/clickAddTask'
import { removeTaskTextarea } from './scripts/events_tasks/removeEmptyTask'
import { changeTitle } from './scripts/events_boards/change_board_title'
import { removeBoard } from './scripts/events_boards/remove_new_board_without_title'
import { removeInput } from './scripts/events_boards/remove_header_input'
import { boardBtn, addBoard } from './scripts/events_boards/add_board'
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
document.addEventListener('click', removeTaskTextarea)
document.addEventListener('click', changeTitle);
document.addEventListener('click', removeBoard);
document.addEventListener('click', removeInput);
boardBtn.addEventListener('click', addBoard);

