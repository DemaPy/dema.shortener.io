import { CallToAction, Features, Footer, Form, HeroSection, Links, NavBar } from "./components"
import { styles } from "./constants/style"


function App() {

  return (
    <>
      <div className="bg-[white] w-full">
        <main className={`${styles.constainer} ${styles.paddingX} m-auto overflow-hidden mb-[80px]`}>
          <NavBar />
          <HeroSection />
        </main>
      </div>
      <div className="bg-[#f0f1f6] w-full">
      <main className={`${styles.constainer} ${styles.paddingX} m-auto overflow-hidden relative -top-[65px]`}>
          <Form />
        </main>
        <main className={`${styles.constainer} ${styles.paddingX} m-auto overflow-hidden`}>
          <Features />
        </main>
        <CallToAction />
        <Footer />
      </div>
    </>

  )
}

export default App
