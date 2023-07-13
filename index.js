let myLeads = []
const inputEl = document.querySelector('#input-el')
const inputBtn = document.querySelector('#input-btn')
const ulEl = document.querySelector('#ul-el')

// inputEl.addEventListener('input', function () {
//     ulEl.innerHTML += `<li>${inputEl.value}</li>`
// })

let leadsFromStorage = JSON.parse(localStorage.getItem('myLeads'))
// console.log(leadsFromStorage)

inputBtn.addEventListener('click', function() {
    myLeads.push(inputEl.value)
    inputEl.value = ''

    localStorage.setItem('myLeads', JSON.stringify(myLeads))
    
    // console.log(localStorage.getItem('myLeads')) 
    renderLeads()
})


const renderLeads = () => {
    let listItems = ''

    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a href='${myLeads[i]}' target='_blank'>
                     ${myLeads[i]}
                </a>
            </li>
        `
    }
        ulEl.innerHTML = listItems
}
