import Navigation from '@/pages/Navigation';
import Footer from '@/pages/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Play, Heart, Shield, Award, Star, Phone, Calendar, MapPin, Sparkles, Users, Clock, CheckCircle, DollarSign, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-women-health.jpg';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{backgroundColor: '#217576'}}>
        <div className="absolute inset-0  z-10"></div>
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="Women's Health" className="w-full h-full object-cover opacity-30" />
        </div>
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 mb-8">
              <Sparkles className="w-5 h-5 text-yellow-300 mr-2" />
              <span className="text-white font-medium">Trusted by 15,000+ Women</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 md:mb-8 leading-tight">
              Arizona Women
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Specialists
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
              Comprehensive healthcare services for women at every stage of life. Experience compassionate care with cutting-edge medical expertise.
            </p>
            
            <div className="flex justify-center mb-8 md:mb-16 px-4">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 font-bold px-8 py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
                  Schedule Appointment
                  <Calendar className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
            
            {/* Pricing Cards in Hero */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto px-4">
              <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <CardContent className="p-4 text-center">
                  <DollarSign className="w-8 h-8 text-yellow-300 mx-auto mb-2" />
                  <p className="text-yellow-200 text-sm font-medium">Same-day $100 ultrasound test + $75 office visit = $175 total</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <CardContent className="p-4 text-center">
                  <CreditCard className="w-8 h-8 text-green-300 mx-auto mb-2" />
                  <p className="text-green-200 text-sm font-medium">We are accepting all types of AHCCCS health insurance plans</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <CardContent className="p-4 text-center">
                  <CheckCircle className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <p className="text-blue-200 text-sm font-medium">Free urine pregnancy tests</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

      </section>

{/* Features Section */}
      <section className="py-20 bg-accent-teal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title text-primary">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience healthcare that puts you first with our comprehensive approach to women's wellness
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white rounded-3xl shadow-xl border-0 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Compassionate Care</h3>
                <p className="text-gray-600">Personalized attention and empathetic support for every patient's unique journey</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white rounded-3xl shadow-xl border-0 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Advanced Technology</h3>
                <p className="text-gray-600">State-of-the-art medical equipment and innovative treatment approaches</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white rounded-3xl shadow-xl border-0 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Team</h3>
                <p className="text-gray-600">Board-certified specialists with years of experience in women's healthcare</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Index;