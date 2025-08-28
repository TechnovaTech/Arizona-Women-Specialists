import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Microscope, Shield, Scissors, Activity, Heart, Stethoscope } from 'lucide-react';

const SpecialtiesSection = () => {
 


return (
    <section id="general" className="py-20 bg-accent-teal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="section-title text-primary">OBGYN Specialties</h2>
           <p className="section-subtitle">
            DMG’s OBGYN team also includes physicians with specialized training in:
          </p>
        </div>

        <div className="bg-background rounded-2xl p-8 shadow-soft max-w-6xl mx-auto border-2" style={{borderColor: '#217576'}}>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h4 className="font-semibold text-primary mb-3">Colposcopy and dysplasia, including:</h4>
             <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Cervical cancer screening</li>
                  <li>• Colposcopic evaluation and biopsies</li>
                  <li>• Cryotherapy</li>
                  <li>• Dysplasia</li>
                  <li>• HPV testing and vaccine</li>
                  <li>• Loop electrosurgical excision procedure (LEEP)</li>
                  <li>• Preinvasive cervical lesions</li>
                </ul>
              <div>
                <h4 className="font-semibold text-primary mb-3">Diabetes in pregnancy</h4>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-3">Gynecological oncology</h4>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-3">Gynecological surgery for cervical, vaginal, vulval and/or ovarian cancers, as well as radical pelvic surgery</h4>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-3">Gynecological urology, including:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Pelvic organ prolapse</li>
                  <li>• Pharmacologic therapy</li>
                  <li>• Urinary incontinence</li>
                  <li>• Urodynamic testing</li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-primary mb-3">Maternal and fetal medicine (perinatology), including:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Diabetes education</li>
                  <li>• Diagnostic testing</li>
                  <li>• Genetic counseling</li>
                  <li>• High-risk maternal and fetal care monitoring</li>
                  <li>• Ultrasound examinations</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-3">Reproductive endocrinology and fertility, which includes treatment of:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Amenorrhea (absence of menstruation)</li>
                  <li>• Delayed or precocious puberty</li>
                  <li>• Galactorrhea (nipple discharge)</li>
                  <li>• Hirsutism (growth of dark or coarse hair in a male-like pattern)</li>
                  <li>• Hormonal abnormalities</li>
                  <li>• Infertility</li>
                  <li>• Lactational insufficiency</li>
                  <li>• Polycystic ovary syndrome</li>
                  <li>• Recurrent miscarriage</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-3">Substance abuse in pregnancy</h4>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};


export default SpecialtiesSection;