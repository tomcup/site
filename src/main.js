import('bootstrap/scss/bootstrap.scss')
import('bootstrap-icons/font/bootstrap-icons.scss')

import { Home } from './js/Home'
import { About } from './js/About'

import { Layout } from './js/Layout'

document.documentElement.setAttribute('data-bs-theme', 'dark')

m.route(document.body, "/", {
    "/": {
        render: function() { return m(Layout, m(Home)) },
    },
    "/about": {
        render: function() { return m(Layout, m(About)) },
    }
})