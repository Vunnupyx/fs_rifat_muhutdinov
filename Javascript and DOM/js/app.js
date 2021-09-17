let id = 78;

let tableData = [
    {
        id: 77,
        dateCreate: '2021-09-09',
        fileType: '1',
        nameOfUsers: 'ulala.xlsx',
        nameOfServer: 'a1ad4f2e-2722-4fc3-b707-573d321cbd6a',
        fileLink: '/file/77'
    },
    {
        id: 76,
        dateCreate: '2020-06-08',
        fileType: '0',
        nameOfUsers: 'ulala.xlsx',
        nameOfServer: 'a1ad4f2e-2722-4fc3-b707-573d321cbd6a',
        fileLink: '/file/77'
    },
    {
        id: 75,
        dateCreate: '2020-06-08',
        fileType: '1',
        nameOfUsers: 'ulala.xlsx',
        nameOfServer: 'a1ad4f2e-2722-4fc3-b707-573d321cbd6a',
        fileLink: '/file/77'
    }
]

const table = document.querySelector('tbody')

window.onload = () => {
    for (let tableItem of tableData) {
        table.insertAdjacentHTML('beforeend', `
        <tr>
            <td>${tableItem.id}</td>
            <td><input type="date" name="dateStringLocalDate" value="${tableItem.dateCreate}"></td>
            <td>
                <select id="select_${tableItem.id}" name="extension" required="">
                    <option value="UPLOAD">Файл на загрузку</option>
                    <option value="PDF">PDF файл</option>
                </select></td>
            <td><input name="name" value="${tableItem.nameOfUsers}"></td>
            <td>${tableItem.nameOfServer}</td>
            <td>${tableItem.fileLink}</td>
            <td><div class="checkedSave"></div></td>
            <td><div class="checkedDell">x</div></td>
        </tr>
        `)
    }
}


document.querySelector(".record__btn").addEventListener("click", () => {

    let dateCreate = document.getElementById('dateCreate').value;
    let file = document.getElementById('file').value.split('/').pop().split('\\').pop();
    let index = document.getElementById('select').selectedIndex;

    table.insertAdjacentHTML('beforeend', `
        <tr>
            <td>${id}</td>
            <td><input type="date" name="dateStringLocalDate" value="${dateCreate}"></td>
            <td>
                <select id="select_${id}">
                    <option value="UPLOAD">Файл на загрузку</option>
                    <option value="PDF">PDF файл</option>
                </select></td>
            <td><input name="name" value="${file}"></td>
            <td></td>
            <td>/file/${id}</td>
            <td><div class="checkedSave"></div></td>
            <td><div class="checkedDell">x</div></td>
        </tr>
        `)
    updateSelectByIndex(id, index)

    function updateSelectByIndex(id, index) {
        const select = document.getElementById(`select_${id}`)
        select.options[index].setAttribute('selected', "");
    }

    id++;
});

function onSaveRow(e) {
    if (!e.target.classList.contains("checkedSave")) {
        return;
    }
    const btn = e.target;
    let tr = btn.parentElement.parentElement;
    let tds = tr.children;

    let id = tds[0].textContent;
    let dateCreate = tds[1].firstChild.value;
    let fileType = tds[2].lastChild.selectedIndex;
    let nameOfUsers = tds[3].firstChild.value;

    (async () => {
        let response = await fetch('tralala', {
            method: 'POST',
            body: JSON.stringify({id: id, dateCreate: dateCreate, fileType: fileType, nameOfUsers: nameOfUsers}),
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        if (response.ok || true) {
            alert(`Данные сохранились!`)
            let result = await response.json();
            console.log(result)
        } else {
            console.log('ошибка fetch')
        }

    })()
}

function onDeleteRow(e) {
    if (!e.target.classList.contains("checkedDell")) {
        return;
    }

    const btn = e.target;
    btn.closest("tr").remove();
}


table.addEventListener('click', onDeleteRow)
table.addEventListener('click', onSaveRow)