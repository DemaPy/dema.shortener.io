import { CallToAction, Features, Footer, Form, HeroSection, Links, NavBar } from "./components"
import { styles } from "./constants/style"


function App() {

  return (
    <main className={`${styles.constainer} ${styles.paddingX} m-auto bg-slate-200 overflow-hidden`}>
      <NavBar />
      <HeroSection />
      <Form />
      <Links />
      <Features />
      <CallToAction />
      <Footer />
    </main>
  )
}

export default App
