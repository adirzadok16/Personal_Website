import { Navbar } from './Components/Navbar'
import { ProfileSection } from './Components/ProfileSection'
import { AboutSection } from './Components/AboutSection'
import { ProjectsSection } from './Components/ProjectsSection'
import { ContactSection } from './Components/ContactSection'

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <ProfileSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <footer>
        <div className='flex justify-center items-center h-20 bg-gray-100'>
          <p className='text-gray-600 text-lg'>© {new Date().getFullYear()} Adir Zadok. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App

