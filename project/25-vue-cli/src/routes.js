import Home from './components/Home.vue'
import Contact from './components/Contact.vue'
import User from './components/User.vue'

export const routes = [

    {path: '/', component: Home},
    {path: '/contact', component: Contact},
    {path: '/user/:id', component: User}

];