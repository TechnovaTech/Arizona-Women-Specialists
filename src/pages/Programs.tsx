import Navigation from '@/pages/Navigation';
import SpecializedProgramsSection from '@/pages/SpecializedProgramsSection';
import Footer from '@/pages/Footer';

const Programs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <SpecializedProgramsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Programs;