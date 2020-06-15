const sudoku = function(ID){
    let sudo = document.querySelector(ID);

    //init rows cols squres
    let rows = [];
    let cols = [];
    let squres = [];

    for(let i=0;i<9;i++){
        rows[i] = [];
        cols[i] = [];
        squres[i] = [];
    }

    const squreNo = function(x,y){
        return Math.floor(x/3)*3+Math.floor(y/3);
    }

    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
            new unit(rows[i],cols[j],squres[squreNo(i,j)]);
        }
    }

    //UI
    for(let squre of squres){
        let block = document.createElement('div');
        block.className = 'sudoBlock';
        for(let unit of squre){
            let input = document.createElement('input');
            input.className = 'sudoInput';
            input.onchange = () => {unit.value = input.value};
            block.appendChild(input);
        }
        sudo.appendChild(block);
    }

}

class sudo{

    constructor(initMatrix){
        for(let i=0;i<9;i++){
            for(let j=0;j<9;j++){
                new unit(i,j,squreNo(i,j));
            }
        }
    }

    squreNo(x,y){
        return Math.floor(x/3)*3+Math.floor(y/3);
    }

}

//define units
class unit {

    constructor(row, col, squre) {
        this.value = 0;
        this.row = row;
        this.col = col;
        this.squre = squre;
    }

    set value(val) {
        this.value = val;
    }

    get value(){
        return this.value;
    }

    get row(){
        return this.row;
    }

    get col(){
        return this.col;
    }

    get squre(){
        return this.squre;
    }

}