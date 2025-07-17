import '../styles/App.css'
import Header from './Header'
import Footer from './Footer'
import PasswordCard from './PasswordCard'
import PasswordForm from './PasswordForm'

function App() {
  return (
    <main className='main-section'>
      <Header/>
      <PasswordForm/>
      <PasswordCard/>
      <Footer/>
    </main>
  )
}

export default App
