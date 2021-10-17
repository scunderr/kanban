import { addTaskTextarea } from './addTaskTextarea'

export const removeTaskTextarea = e => {
    const task = document.querySelector('[data-board-task]');
    const taskTextarea = document.querySelector('[data-board-task-textarea]');
    const boardButton = e.target.closest('[data-board-footer]');
    const taskConditions =  e.target !== taskTextarea 
                            && e.target !== task 
                            && !boardButton;

    if (taskTextarea.value === '' && task !== null && taskConditions ) {  
        task.remove();
    }

    if (taskTextarea.value !== '' && taskConditions ) {
        addTaskTextarea(task, taskTextarea)
    }
};