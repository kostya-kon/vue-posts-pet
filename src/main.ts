import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia';
import { router } from './router';
import { usePosts } from './stores/posts';


const app = createApp(App)
app.use(createPinia())

const postsStore = usePosts();

Promise.all([
  postsStore.fetchPosts()
]).then(() => {
  app.use(router)
  app.mount('#app')
})