import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-women-health.jpg';

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-accent-teal flex items-center py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="animate-fade-in-up pl-0 lg:pl-8">
            <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-6" style={{color: '#217576'}}>
              Managing Women's Health
              <span className="block">Throughout Their Lifetime</span>
            </h1>
            
            {/* Pricing and Services */}
            <div className="bg-white border border-primary/20 rounded-2xl p-6 mb-8 shadow-soft">
              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="text-lg font-bold text-primary">
                    Same-day $100 ultrasound test + $75 office visit = $175 total
                  </div>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <span className="text-base font-semibold text-green-800">Free urine pregnancy tests</span>
                  </div>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <span className="text-base font-semibold text-primary">We are accepting all types of AHCCCS health insurance plans</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="animate-fade-in-up">
            <img
              src={heroImage}
              alt="Diverse group of women representing comprehensive women's health care"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;