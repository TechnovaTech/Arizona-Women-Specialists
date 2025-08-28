import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { GraduationCap, Award, MapPin, Clock, Star, User } from 'lucide-react';

const ProvidersSection = () => {
  const providers = {
    physicians: [
      {
        name: 'Dr. Sarah Johnson, MD',
        specialty: 'Reproductive Endocrinology',
        education: 'Harvard Medical School',
        experience: '15 years',
        location: 'Main Campus',
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face',
        certifications: ['Board Certified', 'Fellowship Trained', 'Research Leader'],
      },
      {
        name: 'Dr. Maria Rodriguez, MD',
        specialty: 'Maternal-Fetal Medicine',
        education: 'Johns Hopkins University',
        experience: '12 years',
        location: 'Downtown Clinic',
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face',
        certifications: ['Board Certified', 'High-Risk Pregnancy Specialist'],
      },
      {
        name: 'Dr. Emily Chen, MD',
        specialty: 'Gynecologic Oncology',
        education: 'Stanford University',
        experience: '18 years',
        location: 'Cancer Center',
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face',
        certifications: ['Board Certified', 'Surgical Oncology', 'Research Director'],
      },
      {
        name: 'Dr. Michael Brown, MD',
        specialty: 'General OBGYN',
        education: 'Yale Medical School',
        experience: '20 years',
        location: 'Main Campus',
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face',
        certifications: ['Board Certified', 'Minimally Invasive Surgery'],
      },
    ],
    midwives: [
      {
        name: 'Lisa Thompson, CNM',
        specialty: 'Certified Nurse Midwife',
        education: 'University of California',
        experience: '10 years',
        location: 'Birth Center',
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150&h=150&fit=crop&crop=face',
        certifications: ['CNM Certified', 'Water Birth Specialist', 'Lactation Consultant'],
      },
      {
        name: 'Jennifer Martinez, CNM',
        specialty: 'Certified Nurse Midwife',
        education: 'Emory University',
        experience: '8 years',
        location: 'Family Clinic',
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=150&h=150&fit=crop&crop=face',
        certifications: ['CNM Certified', 'Prenatal Yoga Instructor'],
      },
    ],
    practitioners: [
      {
        name: 'Rachel Green, NP',
        specialty: 'Women\'s Health Nurse Practitioner',
        education: 'Duke University',
        experience: '7 years',
        location: 'Wellness Center',
        rating: 4.7,
        image: 'https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=150&h=150&fit=crop&crop=face',
        certifications: ['WHNP Certified', 'Menopause Specialist'],
      },
      {
        name: 'Amanda Davis, PA-C',
        specialty: 'Physician Assistant',
        education: 'Georgetown University',
        experience: '6 years',
        location: 'Primary Care',
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=150&h=150&fit=crop&crop=face',
        certifications: ['PA-C Certified', 'Adolescent Health Specialist'],
      },
    ],
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  };

  const ProviderCard = ({ provider }: { provider: any }) => (
    <Card className="hover-lift shadow-card bg-background border-0">
      <CardHeader className="pb-4">
        <div className="flex flex-col items-center text-center mb-4">
          <div className="w-20 h-20 rounded-full overflow-hidden mb-3 shadow-lg border-2 border-primary/20">
            <img 
              src={provider.image} 
              alt={provider.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.nextElementSibling!.classList.remove('hidden');
              }}
            />
            <div className="w-full h-full bg-gradient-hero rounded-full flex items-center justify-center hidden">
              <span className="text-white font-bold text-lg">{getInitials(provider.name)}</span>
            </div>
          </div>
        </div>
        <div className="flex items-start justify-between mb-2">
          <div className="text-center w-full">
            <CardTitle className="text-lg text-primary mb-1">{provider.name}</CardTitle>
            <CardDescription className="text-muted-foreground font-medium">
              {provider.specialty}
            </CardDescription>
          </div>
          <div className="flex items-center space-x-1 text-yellow-500 absolute top-4 right-4">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-medium text-foreground">{provider.rating}</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <div>
          <h4 className="font-semibold text-sm text-primary mb-2 flex items-center">
            <Award className="w-4 h-4 mr-2" />
            Certifications
          </h4>
          <div className="flex flex-wrap gap-1">
            {provider.certifications.map((cert: string) => (
              <Badge
                key={cert}
                variant="outline"
                className="text-xs bg-accent-teal border-primary/20"
              >
                {cert}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="providers" className="py-20 bg-accent-teal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="section-title text-primary">Our Healthcare Providers</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Meet our experienced team of physicians, nurse practitioners, and certified midwives dedicated to your wellbeing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {[...providers.physicians, ...providers.midwives, ...providers.practitioners].slice(0, 3).map((provider, index) => (
            <div key={provider.name} className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-200">
              <div className="text-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4 shadow-lg border-2 border-emerald-100">
                  <img src={provider.image} alt={provider.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{provider.name}</h3>
                <p className="text-emerald-600 font-medium">{provider.specialty}</p>
                <div className="flex items-center justify-center mt-2">
                  
                  <span className="ml-1 text-sm font-medium">{provider.rating}</span>
                </div>
              </div>
              <div className="space-y-2">
                {provider.certifications.slice(0, 2).map((cert, i) => (
                  <div key={i} className="bg-emerald-50 px-3 py-1 rounded-full text-sm  from-teal-600 to-cyan-600 text-center">
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



export default ProvidersSection;