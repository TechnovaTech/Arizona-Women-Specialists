import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Baby, Heart, Monitor, Shield, FileText } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Baby,
      title: 'Obstetrics',
      description: 'Are you pregnant or trying to get pregnant? Then you need obstetrics and gynecology care with Top ob gyn to manage your health before, during, and after your pregnancy. Arizona Women Specialists provide comprehensive obstetrics care at offices in Glendale and Phoenix, Arizona.',
    },
    {
      icon: Heart,
      title: 'Gynecology',
      description: 'Women\'s life stages center around their reproductive organs. Gynecology is an area of medicine that specializes in women\'s reproductive health. At Arizona Women Specialists provide comprehensive gynecology services with best gynecologist in Phoenix valley and Glendale, from well-woman exams to birth control to managing gynecological conditions like heavy periods.',
    },
    {
      icon: Monitor,
      title: 'Ultrasounds',
      description: 'Ultrasound is a diagnostic imaging tool that uses sound waves to create images of your internal organs. At Arizona Women\'s Specialists in Glendale and Phoenix, Arizona, BEST ob gyn (obstetrics and gynecology) practice has one of the most advanced ultrasound machines in assistance with gynaecologist, allowing them to get clear images.',
    },
    {
      icon: Shield,
      title: 'Birth Control',
      description: 'When feeling unsure about starting or growing your family, you may be considering your birth control options and offer many types of birth control, from the pill to tubal ligation. No matter where you are in your life, the team at Arizona Women\'s Specialists has a family planning option for you.',
    },
    {
      icon: FileText,
      title: 'Pap Smears',
      description: 'Not too long ago, women needed Pap smears every year to screen for cervical cancer. But with advances in medical knowledge, you no longer need an annual Pap smear with top gynecologist. However, if it\'s been a while since your last Pap smear or you have concerns about cervical cancer.',
    },
  ];

  return (
    <>
      <section id="services" className="py-20 bg-accent-teal">
        <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="section-title text-primary">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive women's healthcare services at every stage of life</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={service.title} className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-transparent bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-border" style={{backgroundImage: 'linear-gradient(white, white), linear-gradient(to right, #0d9488, #0891b2)', backgroundOrigin: 'border-box', backgroundClip: 'padding-box, border-box'}}>
                <div className="w-14 h-14 text-primary rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary " />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;