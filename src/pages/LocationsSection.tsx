import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Clock, Car, Navigation } from 'lucide-react';

const LocationsSection = () => {
  const locations = [
    {
      name: 'Main Medical Campus',
      address: '1234 Healthcare Boulevard, Phoenix, AZ 85001',
      phone: '(602) 555-0123',
      hours: 'Mon-Fri: 7:00 AM - 6:00 PM, Sat: 8:00 AM - 4:00 PM',
      services: ['Full OBGYN Services', 'Surgery Center', 'Lab Services', 'Imaging'],
      parking: 'Free Parking Available',
      featured: true,
    },
    {
      name: 'Downtown Women\'s Clinic',
      address: '567 Central Avenue, Phoenix, AZ 85003',
      phone: '(602) 555-0456',
      hours: 'Mon-Fri: 8:00 AM - 5:00 PM',
      services: ['General OBGYN', 'Prenatal Care', 'Family Planning'],
      parking: 'Validated Parking',
    },
    {
      name: 'North Scottsdale Location',
      address: '890 Scottsdale Road, Scottsdale, AZ 85251',
      phone: '(480) 555-0789',
      hours: 'Mon-Fri: 7:30 AM - 5:30 PM, Sat: 9:00 AM - 2:00 PM',
      services: ['Specialty Care', 'Fertility Services', 'Ultrasound'],
      parking: 'Free Parking',
    },
    {
      name: 'Mesa Family Health Center',
      address: '321 Mesa Drive, Mesa, AZ 85201',
      phone: '(480) 555-0321',
      hours: 'Mon-Fri: 8:00 AM - 6:00 PM',
      services: ['General OBGYN', 'Midwifery Care', 'Teen Health'],
      parking: 'Free Parking',
    },
    {
      name: 'Tempe Wellness Center',
      address: '654 University Drive, Tempe, AZ 85281',
      phone: '(480) 555-0654',
      hours: 'Mon-Fri: 7:00 AM - 5:00 PM',
      services: ['Preventive Care', 'Menopause Management', 'Wellness Exams'],
      parking: 'Street Parking',
    },
    {
      name: 'Chandler Birth Center',
      address: '987 Chandler Boulevard, Chandler, AZ 85225',
      phone: '(480) 555-0987',
      hours: 'Mon-Fri: 8:00 AM - 5:00 PM, On-call 24/7',
      services: ['Birth Center', 'Midwifery Care', 'Natural Birth Options'],
      parking: 'Free Parking',
      featured: true,
    },
  ];

  return (
    <section id="locations" className="py-20 bg-background">
      <div className="container mx-auto px-4">


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <Card
              key={location.name}
              className={`hover-lift transition-all duration-300 animate-scale-in ${
                location.featured
                  ? 'ring-2 ring-primary/20 shadow-elegant'
                  : 'shadow-card'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="card-title text-primary flex-1">
                    {location.name}
                  </CardTitle>
                  {location.featured && (
                    <Badge variant="secondary" className="bg-primary text-white ml-2">
                      Featured
                    </Badge>
                  )}
                </div>
                <CardDescription className="text-muted-foreground">
                  {location.address}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start text-sm">
                    <Phone className="w-4 h-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{location.phone}</span>
                  </div>
                  
                  <div className="flex items-start text-sm">
                    <Clock className="w-4 h-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{location.hours}</span>
                  </div>
                  
                  <div className="flex items-start text-sm">
                    <Car className="w-4 h-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{location.parking}</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-sm text-primary mb-2">Services Available:</h4>
                  <div className="flex flex-wrap gap-1">
                    {location.services.map((service) => (
                      <Badge
                        key={service}
                        variant="outline"
                        className="text-xs bg-accent-teal border-primary/20"
                      >
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Navigation className="w-4 h-4 mr-2" />
                    Directions
                  </Button>
                  <Button size="sm" className="flex-1 bg-gradient-hero hover:opacity-90">
                    Schedule
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <div className="bg-gradient-hero rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Find the Right Location for You</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              All of our locations offer comprehensive women's healthcare services. 
              Choose the location most convenient for you, or visit multiple locations as needed.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold">6</div>
                <div className="text-white/80 text-sm">Convenient Locations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-white/80 text-sm">Emergency Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">Free</div>
                <div className="text-white/80 text-sm">Parking Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">Same Day</div>
                <div className="text-white/80 text-sm">Appointments</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 transition-all duration-300"
              >
                <MapPin className="mr-2 w-5 h-5" />
                Find Nearest Location
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 transition-all duration-300"
              >
                View All Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;