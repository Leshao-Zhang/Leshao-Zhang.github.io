const sudoku = function(ID){
    let sudo = document.querySelector(ID);

    //init rows cols squres
    let rows = [];
    let cols = [];
    let squres = [];

    for(let i=0;i<9;i++){ rows[i]="[];" cols[i]="[];" squres[i]="[];" } const squreno="function(x,y){" return math.floor(x 3)*3+math.floor(y 3); for(let i="0;i<9;i++){" j="0;j<9;j++){" new unit(rows[i],cols[j],squres[squreno(i,j)]); ui squre of squres){ let block="document.createElement('div');" block.classname="sudoBlock" ; unit squre){ input="document.createElement('input');" input.classname="sudoInput" input.onchange="()" => {unit.value = input.value};
            block.appendChild(input);
        }
        sudo.appendChild(block);
    }

}

//define units
class unit {

    constructor(row, col, squre) {
        this.value = 0;
        this.optionVal = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        row.push(this);
        col.push(this);
        squre.push(this);
        this.blocks = [row, col, squre];
    }

    set value(val) {
        this.value = val;
        for (let block of blocks) {
            for (let unit of block) {
                unit.remove(val);
            }
        }
    }

    get value(){
        return this.value;
    }

    remove(val) {
        if (this.value != 0)
            return;
        this.optionVal.splice(val - 1, 1);
        if (this.optionVal.length == 1) {
            this.value = this.optionVal[0];
        }
    }

}</9;i++){>