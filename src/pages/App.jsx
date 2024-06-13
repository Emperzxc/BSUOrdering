import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import WorkFlow from '../components/WorkFlow';
import Products from '../components/Products';
import Testimony from '../components/Testimony';
import Footer from '../components/Footer';



const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <WorkFlow />
        <Products />
        <Testimony />
        <Footer/>
      </div>
    </>
  )
}

export default App
