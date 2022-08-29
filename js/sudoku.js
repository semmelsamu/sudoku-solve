
function init(sudoku) {

    let result = '';

    let id = 0;

    for(let i = 0; i <= 8; i++) {

        result += '<tr>';

        for(let j = 0; j <= 8; j++) {

            id++;
            result += '<td><input onClick="this.select();" type="number" min="1" max="9" name="'+id+'" id="'+id+'"</td>';

        }

        result += '</tr>';
    }

    sudoku.innerHTML = result;
}

function parse(sudoku) {

    let result = Array();

    let id = 0;

    for(let i = 0; i <= 8; i++) {

        let row = Array();

        for(let j = 0; j <= 8; j++) {

            id++;
            row.push(document.getElementById(id).value);

        }

        result.push(row);
    }

    return result;
}

function render(values) {

    let id = 0;

    for(let i = 0; i <= 8; i++) {

        for(let j = 0; j <= 8; j++) {

            id++;
            document.getElementById(id).value = values[i][j];

        }
    }
}