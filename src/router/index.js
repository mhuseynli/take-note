import {createRouter, createWebHashHistory} from "vue-router";
// # COMPONENTS
import NotesView from '@/views/NotesView.vue'
import EditNoteView from '@/views/EditNoteView.vue'
import StatsView from '@/views/StatsView.vue'

// # ROUTE LIST
const routes = [
    {
        path: '/',
        name: 'notes',
        component: NotesView
    },
    {
        path: '/edit-note/:id',
        name: 'edit-note',
        component: EditNoteView
    },
    {
        path: '/stats',
        name: 'stats',
        component: StatsView
    }
]

// # ROUTER
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;