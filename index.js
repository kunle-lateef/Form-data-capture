const textInplut = document.getElementById(`text-input`)
const form = document.getElementById(`form`)
const display = document.getElementById(`display-container`)

let UserInputArray = []

form.addEventListener("submit", function(event){
    event.preventDefault

    let userData = textInplut.value

    const userobject = {
        nameFromForm : userData
    }

    UserInputArray.push(userobject)
    form.reset()
    printToUi()
})

function printToUi(){
    display.innerHTML = " "
    UserInputArray.forEach(function(item){

        let userName = item.nameFromForm

        let nameelement = document.createElement(`P`)
        nameelement.textContent = `Welcome ${userName}`

        display.append(nameelement)
    })
}