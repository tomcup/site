var Header = 
m("header.container.d-flex.flex-wrap.align-items-center.justify-content-center.justify-content-md-between.py-3.mb-4.border-bottom", [
    m(m.route.Link, {href: '/', "aria-label": "Logo", class: "d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"},[
        m("i.bi-umbrella.me-2", { style: "font-size: 1.4rem" }),
        m("span.fs-4", "Header")
    ]
    ),
    m("ul.nav.col-12.col-md-auto.mb-2.justify-content-center.mb-md-0",[
        m("li.nav-link.px-2.link-secondary", m(m.route.Link, {href: '/'}, "Home")),
        m("li.nav-link.px-2.link-secondary", m(m.route.Link, {href: '/about'}, "About"))
    ])
])

export { Header }