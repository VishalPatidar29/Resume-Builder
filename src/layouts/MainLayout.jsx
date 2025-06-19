import { Outlet } from "react-router-dom";
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer'
import { ThemeProvider } from "../context/ThemeContext";

function MainLayout() {
  return (
   <ThemeProvider>
  
      <Header />

      <main className="md:px-6 lg:px-8 xl:px-18 px-4 py-3">
        <Outlet />
      </main>

      <Footer />
  </ThemeProvider>
  )
}

export default MainLayout