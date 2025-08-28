import Navigation from './Navigation';
import ContactSection from './ContactSection';
import Footer from './Footer';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;