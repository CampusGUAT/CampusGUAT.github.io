import DefaultTheme from 'vitepress/theme'
import HomeSearchBar from './components/HomeSearchBar.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('HomeSearchBar', HomeSearchBar)
  }
}
