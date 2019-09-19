(function () {
    /* Add your code here */
    let index = 0;
    var card_array = [];
    let title = document.getElementById("titleInput");
    let content = document.getElementById("inputArea");
    let list_div = document.getElementById("notecardList");
    let addButton = document.getElementById("submitButton");
    let delButton = document.getElementById("deleteButton");
    let searchButton = document.getElementById("searchBar");

    addButton.addEventListener("click", () => {
        let card = document.createElement("div")
        card.className = "card"
        card.id = index
        card_title = document.createElement("h4")
        card_title.className = "card-title"
        card_title.innerHTML = title.value
        card_content = document.createElement("p")
        card_content.className = "card-text"
        card_content.innerHTML = content.value 
        card.appendChild(card_title)
        card.appendChild(card_content)
        card.addEventListener("click", () => {
           card.style.borderLeft = "4px solid #FF4500"
           card.id = -1
        })
        card_array.push(card);
        index = index + 1;
        list_div.appendChild(card);
    })

    delButton.addEventListener("click", () => {     
        for(var i=0; i<card_array.length; i++){
            if (card_array[i].id == -1){
                card_array[i].parentNode.removeChild(card_array[i]); 
                card_array.splice(i, 1); 
                i = -1;
            }
        }    
    })

    searchButton.addEventListener('input', (e) => {
        search_text = e.target.value;
        console.log(search_text)
        update_array = card_array.filter(function(card){
            return card.childNodes[0].innerHTML.startsWith(search_text);   
        }); 
        while(list_div.firstChild){
            list_div.removeChild(list_div.firstChild);
        }
        for(var i=0; i<update_array.length; i++){
            list_div.appendChild(update_array[i]);
        }
        console.log(update_array);
    });
}())



