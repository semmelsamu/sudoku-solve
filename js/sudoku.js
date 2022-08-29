
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
            value = values[i][j];
            if(Number.isInteger(value))
                document.getElementById(id).value = value;

        }
    }
}

function solve(values) {

    for(let i = 0; i <= 8; i++) {

        for(let j = 0; j <= 8; j++) {

            if(values[i][j] == "")
                values[i][j] = [1,2,3,4,5,6,7,8,9];
            else
                values[i][j] = parseInt(values[i][j]);

        }
    }

    for(let it = 0; it <= 10; it++)
    {

        for(let i = 0; i <= 8; i++) {

            for(let j = 0; j <= 8; j++) {

                let value = values[i][j];

                if(Number.isInteger(value)) {

                    // Column
                    for(let m = 0; m <= 8; m++) {
                        remove = values[i][m];
                        if(remove.constructor === Array) {
                            index = remove.indexOf(value);
                            if(index !== -1) values[i][m].splice(index, 1);
                        }
                    }

                    // Row
                    for(let m = 0; m <= 8; m++) {
                        remove = values[m][j];
                        if(remove.constructor === Array) {
                            index = remove.indexOf(value);
                            if(index !== -1) values[m][j].splice(index, 1);
                        }
                    }

                    // Square
                    mx = Math.floor((i)/3)*3;
                    nx = Math.floor((j)/3)*3;
                    for(let m = mx; m <= mx+2; m++) {
                        for(let n = nx; n <= nx+2; n++) {
                            remove = values[m][n];
                            if(remove.constructor === Array) {
                                index = remove.indexOf(value);
                                if(index !== -1) values[m][n].splice(index, 1);
                            }
                        }
                    }
                }
            }
        }

        // 1-item Array to Int

        for(let i = 0; i <= 8; i++) {
            for(let j = 0; j <= 8; j++) {
                let value = values[i][j];
                if(!Number.isInteger(value)) {
                    if(value.length == 1)
                    {
                        values[i][j] = parseInt(values[i][j].shift());
                    }
                }
            }
        }

        render(values);

    }

    return values;
}