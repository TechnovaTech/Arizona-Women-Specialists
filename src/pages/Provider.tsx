import Navigation from './Navigation';
import ProvidersSection from './ProvidersSection';
import Footer from './Footer';

const Provider = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <ProvidersSection />
      </main>
      <Footer />
    </div>
  );
};

export default Provider;