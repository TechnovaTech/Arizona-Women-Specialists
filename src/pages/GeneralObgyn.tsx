import Navigation from '@/pages/Navigation';
import GeneralObgynSection from '@/pages/GeneralObgynSection';
import Footer from '@/pages/Footer';

const GeneralObgyn = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <GeneralObgynSection />
      </main>
      <Footer />
    </div>
  );
};

export default GeneralObgyn;