import Navigation from '@/pages/Navigation';
import ServicesSection from '@/pages/ServicesSection';
import Footer from '@/pages/Footer';

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;