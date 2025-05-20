const display = document.querySelector('body')
const btn = document.querySelector('.disk')

isday = true

btn.addEventListener('click', () => {
    if(isday) {
        display.style = '--is-Day: false'
        isday = false
    } else {
        display.style = '--is-Day: true'
        isday = true
    }
})


