let saveEl=document.getElementById("save-el")
let countEl=document.getElementById("count-el")
let count=0
let total=0

function increment(){
    count+=1
    countEl.textContent=count
}

function decrement(){
    count=count-1
    //if count less than zero, diplay as zero
    if (count<0)
    {
        count=0
    }
    countEl.innerText=count
} 



function save(){
    let countstr=count+" - "
    saveEl.textContent+=countstr
    count=0
    countEl.innerText=count
    
}

