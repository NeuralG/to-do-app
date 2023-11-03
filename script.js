function main(){

    const inputEl = document.getElementById("input")
    const buttonEl = document.getElementById("submit")
    const listEl = document.getElementById("list")
    const deleteEl = document.getElementById("delete")
    
    let myItems = []

    let count = 0

    function addToList(count,value){
        localStorage.setItem(count,value);
        fetchItems()
    }

    function render(){
        listEl.innerHTML = ""
        for (let i=0;i<myItems.length;i++){
            listEl.innerHTML += `<li>${myItems[i]}</li>`
        }
    }

    function fetchItems(){
        count = localStorage.length
        myItems = []
        for (let i=0;i<count;i++){
            let item = localStorage.getItem(`${i}`)
            myItems.push(item)
        }
        render()
    }

    buttonEl.addEventListener("click", function(){
        let myValue = inputEl.value
        if (myValue){
            addToList(count,myValue)
            inputEl.value = ""
        }
    })

    deleteEl.addEventListener("click", function(){
        localStorage.clear()
        location.reload()
    })
    
    fetchItems()

    inputEl.addEventListener("keypress",function(event){
        if (event.key === "Enter"){
            event.preventDefault()
            let myValue = inputEl.value
            if (myValue){
                addToList(count,myValue)
                inputEl.value = ""
            }
        }
    })

}

