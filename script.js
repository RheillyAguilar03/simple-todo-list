

let myList = []
const inputText = document.getElementById("input-text")
const addButton = document.getElementById("add-button")
const listItems = document.getElementById("list-items")




addButton.addEventListener('click', function() {

    if(inputText.value === "") {
        alert("Type your Todo Task")
    } else {
    //console.log('click')
    myList.push(inputText.value)
    //console.log(myList)
    todolistFunction()
    inputText.value = ""
    }

})



function todolistFunction() {

    let listNumber = ""
    for(let i = 0; i < myList.length; i++) {

        listNumber += `<p> ${myList[i]} 
                            <button onclick="myList.splice(${i}, 1); 
                            todolistFunction(); ">
                            Delete
                            </button> 
                        <p>`
    }
    listItems.innerHTML = listNumber
}





