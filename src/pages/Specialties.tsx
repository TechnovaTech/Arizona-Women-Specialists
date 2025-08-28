import Navigation from '@/pages/Navigation';
import SpecialtiesSection from '@/pages/SpecialtiesSection';
import Footer from '@/pages/Footer';

const Specialties = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <SpecialtiesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Specialties;