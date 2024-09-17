const inpt = document.getElementById("inpt");
const sbmt = document.querySelector("#sbmt");
let itemContainer = document.querySelector("#contentItem");
let warning = document.querySelector(".warn");

sbmt.addEventListener("click", function(e){
    var itemValue = inpt.value;
    if(inpt.value == ""){
        warning.textContent = "Please Enter Something..";
        warning.style.color = "red";
        warning.style.display = "block";
    }else{
        warning.style.display = "none";
        var contentItem = document.createElement("div");
        contentItem.setAttribute('class', "content");
        itemContainer.appendChild(contentItem);
        var para = document.createElement("p");
        para.innerText = itemValue;
        contentItem.appendChild(para);
    
        var btn = document.createElement("button");
        btn.setAttribute('class',"del");
        btn.innerHTML = `<i class="fa fa-times" aria-hidden="true"></i>`;
        contentItem.appendChild(btn);
        btn.addEventListener("click", function(){
        this.parentNode.remove();
        });
        inpt.value = "";
    }
    e.preventDefault();
});

