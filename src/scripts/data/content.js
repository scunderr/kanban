export const content = {
    startBoards: [
        {id: 'board1', title: 'Завершенные', icon: '<i class="fa fa-check" aria-hidden="true"></i>'},
        {id: 'board2', title: 'В процессе', icon: '<i class="fa fa-laptop" aria-hidden="true"></i>'},
        {id: 'board3', title: 'Открытые', icon: '<i class="fa fa-bell-o" aria-hidden="true"></i>'},   
    ],

    newBoards: [
        {
            id: `board-${Date.now()}`, 
            title: '<input class="board__header-input" type="text" onclick="this.select();" data-header-input>',
            icon: '<i class="fa fa-question-circle-o" aria-hidden="true"></i>'
        }, 
    ]
}

 