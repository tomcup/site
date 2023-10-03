import { Header } from "./Components/Header"
import { Footer } from "./Components/Footer"

var Layout = {
    view: function(vnode) {
        return [
            Header,
            m("main.container", vnode.children),
            Footer,
        ]
    }
}

export { Layout }