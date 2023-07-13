let myLeads = []
const inputEl = document.querySelector('#input-el')
const inputBtn = document.querySelector('#input-btn')
const ulEl = document.querySelector('#ul-el')
const deleteBtn = document.querySelector('#delete-btn')
const tabBtn = document.querySelector('#tab-btn')

// inputEl.addEventListener('input', function () {
//     ulEl.innerHTML += `<li>${inputEl.value}</li>`
// })

const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'))

const render = (leads) => {
    let listItems = ''

    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a href='${leads[i]}' target='_blank'>
                     ${leads[i]}
                </a>
            </li>
        `
    }
        ulEl.innerHTML = listItems
}

if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

const tabs = [
    {url: "https://www.linkedin.com/in/per-harald-borgen/"}
]
tabBtn.addEventListener('click', function () {
    chrome.tabs.query({
        active: true,
        currentWindow: true,
    }, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem('myLeads', JSON.stringify(myLeads))
        render(myLeads)
    })
})

deleteBtn.addEventListener('dblclick', function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener('click', function() {
    myLeads.push(inputEl.value)
    inputEl.value = ''

    localStorage.setItem('myLeads', JSON.stringify(myLeads))

    render(myLeads)
})