import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Calendar,
  CheckCircle,
  DollarSign,
  CreditCard,
  Heart,
  Shield
} from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-20 bg-accent-teal">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
        
          <h2 className="text-5xl font-black bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-6">  Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your wellness journey? Contact us today
          </p>
          

        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
          {/* Appointment Form */}
          <Card className="bg-white rounded-3xl shadow-2xl border-0 overflow-hidden">
            <CardHeader className="text-white p-8" style={{backgroundColor: '#217576'}}>
              <CardTitle className="text-lg font-bold flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Appointment
              </CardTitle>
              <CardDescription className="text-white opacity-90 text-sm">
                Book your visit today - walk-ins welcome
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-gray-700 font-medium">First Name *</Label>
                    <Input 
                      id="firstName" 
                      placeholder="First name" 
                      className="mt-1 border-gray-300" 
                      style={{'--tw-ring-color': '#072F5F'}} 
                      onFocus={(e) => e.target.style.borderColor = '#072F5F'}
                      onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                      required 
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-gray-700 font-medium">Last Name *</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Last name" 
                      className="mt-1 border-gray-300" 
                      style={{'--tw-ring-color': '#072F5F'}} 
                      onFocus={(e) => e.target.style.borderColor = '#072F5F'}
                      onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                      required 
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="phone" className="text-gray-700 font-medium">Phone Number *</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="(555) 123-4567" 
                    className="mt-1 border-gray-300" 
                    style={{'--tw-ring-color': '#072F5F'}} 
                    onFocus={(e) => e.target.style.borderColor = '#072F5F'}
                    onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                    required 
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your.email@example.com" 
                    className="mt-1 border-gray-300" 
                    style={{'--tw-ring-color': '#072F5F'}} 
                    onFocus={(e) => e.target.style.borderColor = '#072F5F'}
                    onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date" className="text-gray-700 font-medium">Preferred Date</Label>
                    <Input 
                      id="date" 
                      type="date" 
                      className="mt-1 border-gray-300" 
                      style={{'--tw-ring-color': '#072F5F'}} 
                      onFocus={(e) => e.target.style.borderColor = '#072F5F'}
                      onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                    />
                  </div>
                  <div>
                    <Label htmlFor="time" className="text-gray-700 font-medium">Preferred Time</Label>
                    <select className="w-full mt-1 p-2 border border-gray-300 rounded-md" onFocus={(e) => e.target.style.borderColor = '#072F5F'} onBlur={(e) => e.target.style.borderColor = '#d1d5db'}>
                      <option value="">Select time</option>
                      <option value="morning">Morning (8AM-12PM)</option>
                      <option value="afternoon">Afternoon (12PM-5PM)</option>
                      <option value="evening">Evening (5PM-8PM)</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="service" className="text-gray-700 font-medium">Service Needed</Label>
                  <select className="w-full mt-1 p-2 border border-gray-300 rounded-md" onFocus={(e) => e.target.style.borderColor = '#072F5F'} onBlur={(e) => e.target.style.borderColor = '#d1d5db'}>
                    <option value="">Select service</option>
                    <option value="pregnancy-test">Pregnancy Test</option>
                    <option value="ultrasound">Ultrasound</option>
                    <option value="consultation">Consultation</option>
                    <option value="full-package">Complete Package ($175)</option>
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="notes" className="text-gray-700 font-medium">Additional Notes</Label>
                  <Textarea 
                    id="notes" 
                    placeholder="Any additional information or questions..." 
                    className="mt-1 border-gray-300" 
                    style={{'--tw-ring-color': '#072F5F'}} 
                    onFocus={(e) => e.target.style.borderColor = '#072F5F'}
                    onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                    rows={3}
                  />
                </div>
                
                <div className="flex justify-center">
                  <Button 
                    type="submit" 
                    className="w-48 h-10 text-white font-medium text-sm rounded-lg bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    Book Appointment
                  </Button>
                </div>
                
                <p className="text-sm text-gray-500 text-center">
                  Walk-ins welcome • Same-day appointments available
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Services & Pricing */}
          <div className="space-y-6">
{/* Contact Information */}
            <Card className="bg-white rounded-3xl shadow-2xl border-0 overflow-hidden">
              <CardHeader className="text-white p-8" style={{backgroundColor: '#217576'}}>
                <CardTitle className="text-lg font-bold flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-semibold text-gray-900">623-846-7597</p>
                      <p className="text-sm text-gray-600">Call for appointments</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-semibold text-gray-900">info@womenshealth.com</p>
                      <p className="text-sm text-gray-600">Email us anytime</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">4700 N 51st Ave</p>
                      <p className="text-gray-700">Phoenix, AZ 85031</p>
                      <p className="text-gray-700">United States</p>
                      <p className="text-sm text-gray-600">Easy parking available</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Hours</p>
                      <div className="text-gray-700 text-sm space-y-1">
                        <p>24/7 Emergency Support</p>
                        <p>Mon-Fri: 7AM-6PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>


          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;