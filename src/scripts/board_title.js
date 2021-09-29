export const changeTitle = e => {
    const targetDataset = e.target.dataset;
    const boardHeaderMain = e.target.closest('[data-header-main]');
    const boardHeaderTitle = e.target.closest('[data-header-title]');
    const boardHeaderInput = e.target.closest('[data-header-input]');

    if (targetDataset.headerTitle !== undefined) {
        const template = `
            <input class="board__header-input" type="text" value="${boardHeaderTitle.innerHTML.trim()}" 
            onclick="this.select();" data-header-input>
        `;

        boardHeaderTitle.remove();
        boardHeaderMain.insertAdjacentHTML('beforeend', template);
    }

    if (boardHeaderInput === null && boardHeaderTitle === null) {  
        const input = document.querySelector('[data-header-input]');

        if (input !== null && input.value !== '') {
            const boardHeaderMain = input.parentElement;
            const template = `
                <div class="board__header-title" data-header-title>
                    ${input.value}
                </div>
            `;

            input.remove();
            boardHeaderMain.insertAdjacentHTML('beforeend', template);  
        } 
    }
};
