let btn=document.querySelector("button");
let inp=document.querySelector("input");
let ol=document.querySelector("ol");
let li=document.querySelectorAll("li");


btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;

    let delBtn=document.createElement("button");
    delBtn.innerText="delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ol.appendChild(item);
    inp.value="";
});
ol.addEventListener("click",function(event){
    if(event.target.nodeName==="BUTTON"){
        let listItem=event.target.parentElement;
        // console.log("Deleted");
        listItem.remove();
    }
});
