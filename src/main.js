// Import our custom CSS
import './scss/styles.scss'

// Import all of Bootstrap's JS
// import * as bootstrap from 'bootstrap'

var a = m(".container.py-4.px-3.mx-auto", [
    m("h1", "Hello: Mithril, Bootstrap and Webpack!"),
    m("button.btn.btn-primary", "Primary button")
])

m.render(document.body, a);