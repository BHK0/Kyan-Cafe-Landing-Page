import Hero from './components/Hero';
import Features from './components/Features';
import Menu from './components/Menu';
import Locations from './components/Locations';
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Menu />
      <Locations />
      <SocialMedia />
      <Footer />
    </main>
  );
}
