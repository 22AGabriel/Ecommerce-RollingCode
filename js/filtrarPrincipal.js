const d = document;

function filtroCard(input,selector){
    d.addEventListener("keyup",e =>{
        if(e.target.matches(input)){
            // console.log(e.key)
            d.querySelectorAll(selector).forEach(elemento =>elemento.textContent.toLowerCase().includes(e.target.value)? elemento.classList.remove("filterCardP"):elemento.classList.add("filterCardP"));
        }
        
        
    
    })
}



filtroCard(".inputFilterCard",".filterC")