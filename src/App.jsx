import AppFooter from './components/AppFooter'
import AppHeader from './components/AppHeader'
import AppMain from './components/AppMain'
import { comics } from './assets/js/data.js'
import { headerLinks } from './assets/js/data.js'
import { footerLinks } from './assets/js/data.js'

function App() {

  return (
    <>
      <AppHeader links={headerLinks} />
      <AppMain comics={comics} />
      <AppFooter links={footerLinks} />
    </>
  )
}

export default App
