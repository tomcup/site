var Footer = 
m("footer.container.d-flex.flex-wrap.justify-content-between.align-items-center.py-3.my-4.border-top",[
    m("p.col-md-4.mb-0.text-body-secondary", "© 2023 Tomcup"),
    m("ul.nav.col-md-4.justify-content-end", [
        m("li.nav-item", m(m.route.Link, {href: '/', class: "nav-link px-2 text-body-secondary"}, "Home")),
        m("li.nav-item", m(m.route.Link, {href: '/about', class: "nav-link px-2 text-body-secondary"}, "About"))
    ])
])

export { Footer }