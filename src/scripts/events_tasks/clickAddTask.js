// import { statuses } from './data/statuses'
import { delayRemovalAnimation } from '../data/func'
import { addTaskTextarea } from './addTaskTextarea'

// let taskBoardCounter = {
//     board1: 0,
//     board2: 0,
//     board3: 0,
// };

// при нажатии на "добавить задачу"
export const addTask = e => {
    const board = e.target.closest('[data-board]');
    const boardButton = e.target.closest('[data-board-footer]');
    
    if (boardButton) {
        const boardField = boardButton.previousElementSibling;
        const input = document.querySelector('[data-header-input]');
        const textareaTemplate = `
            <div class="board__task face-in-down" data-board-task>    
                <textarea class="board__task-area" name="taskName" rows="1" placeholder="Введите название задачи"
                data-board-task-textarea></textarea>
            </div> 
        `;
        const task = board.querySelector('[data-board-task]');
        const taskTextarea = board.querySelector('[data-board-task-textarea]');
       
        if (input && input.value === '') {
            input.classList.add('blinking');
            delayRemovalAnimation(input, 'blinking', 300);
            input.focus();
            return
        }
    
        if ((input && input.value !== '')) {
            boardField.insertAdjacentHTML('beforeend', textareaTemplate);
            const taskTextarea = board.querySelector('[data-board-task-textarea]');
            taskTextarea.focus()
            // taskBoardCounter[boardId] += 1;
            // boardButton.closest('[data-board]').querySelector('[data-header-counter]').innerHTML = taskBoardCounter[boardId];
        }

        if (taskTextarea && taskTextarea.value === '') {
            // statuses.taskAnimationStatus = true;
            task.classList.add('tremor');
            task.classList.remove('face-in-down');
            delayRemovalAnimation(task, 'tremor', 300);
            taskTextarea.focus();
        }

        if (taskTextarea && taskTextarea.value !== '' ) {
            addTaskTextarea(task, taskTextarea)

            boardField.insertAdjacentHTML('beforeend', textareaTemplate);
            const textarea = board.querySelector('[data-board-task-textarea]');
            textarea.focus()
        }
        
        if (!input && !taskTextarea) {
            boardField.insertAdjacentHTML('beforeend', textareaTemplate);
            const taskTextarea = board.querySelector('[data-board-task-textarea]');
            taskTextarea.focus()
        }

    }
};





