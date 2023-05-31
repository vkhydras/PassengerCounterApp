let count = 0;
let arry=[];

function add(){
    count+=1;
    document.getElementById("count-el").innerHTML = count;
}
function save(){
    arry.push(count);
    document.getElementById("previous").innerHTML +=count + " ~ ";
    document.getElementById("lastsave").innerHTML = "<br>" + "Last saved was: " + "<br>" + "time:" + new Date().getHours() + ":" + new Date().getMinutes() + " ~~  people counted = " + count;
    count = 0;
    document.getElementById("count-el").innerHTML = count;
    arry.add(count);
}
function total(){
    let sum= arry.reduce(total);
    let time = new Date().getHours() + ":" + new Date().getMinutes();
     
    function total(total,value){
        return total + value;
    }
    document.getElementById("sum").innerHTML = "Current total: " +"<br>" + "time:" + time + " : total people = " +  sum;
}

