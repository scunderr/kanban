let taskBoardCounter = {
    board1: 0,
    board2: 0,
    board3: 0,
};

// при нажатии на "добавить задачу"
export const addTask = e => {
    const board = e.target.closest('[data-board]');
    const boardButton = e.target.closest('[data-board-footer]');
    
    if (boardButton) {
        const boardId = board.id;
        const boardField = boardButton.previousElementSibling;
        const boardFieldTemplate = `
            <div class="board__task" data-board-task>    
                <textarea class="board__task-area" name="taskName" rows="1" placeholder="Введите имя задачи" data-board-task-textarea></textarea>
            </div> 
        `;
        const task = board.querySelector('[data-board-task]');
        const taskTextarea = board.querySelector('[data-board-task-textarea]');

        if (taskTextarea) {
            // task.remove();
            return task.classList.add('tremor')
        }

        boardField.insertAdjacentHTML('beforeend', boardFieldTemplate);
        taskBoardCounter[boardId] += 1;

        boardButton.closest('[data-board]').querySelector('[data-header-counter]').innerHTML = taskBoardCounter[boardId];
    }
};

// при нажатии за пределы "добавить задачу" и при существовании пустого инпута
document.addEventListener('click', e => {
    const task = document.querySelector('[data-board-task]');
    const taskTextarea = document.querySelector('[data-board-task-textarea]');
    const boardButton = e.target.closest('[data-board-footer]');

    if (task !== null 
        && e.target !== taskTextarea 
        && e.target !== task 
        && !boardButton 
        && taskTextarea.value === '') {  
            task.remove();
    }
    console.log(taskTextarea.value)
});

// при нажатии за пределы "добавить задачу" и при заполненном инпуте
// document.addEventListener('click', e => {
//     const task = document.querySelector('[data-board-task]');
//     const taskTextarea = document.querySelector('[data-board-task-textarea]');
//     const boardButton = e.target.closest('[data-board-footer]');

//     if (task !== null && e.target !== taskTextarea && e.target !== task && !boardButton) {
//         task.remove();
//         console.log(e.target)
//     }
// });
