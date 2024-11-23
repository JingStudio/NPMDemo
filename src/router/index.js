import { createMemoryHistory, createRouter } from 'vue-router'

import Dashboard from '../views/dashboard/index.vue'
import Toast from '../views/toast/index.vue'

const routes = [
  { path: '/', component: Dashboard },
  { path: '/toastify', component: Toast },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router