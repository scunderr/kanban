export const addTaskTextarea = (task, taskTextarea) => {
    const taskField = document.querySelector('[data-board-task-textarea]').closest('[data-board-field]');
        const readyTaskTemplate = `
            <div class="board__ready-task">
                <div class="board__ready-task-pin"></div>
                 ${taskTextarea.value}
            </div>
        `;

        task.remove();
        taskField.insertAdjacentHTML('beforeend', readyTaskTemplate);
}