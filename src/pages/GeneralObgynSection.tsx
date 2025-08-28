const GeneralObgynSection = () => {

  return (
    <section id="general" className="py-20 bg-accent-teal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="section-title text-primary">General OBGYN Care</h2>
          <p className="section-subtitle">
            Our OBGYN providers include physicians, advanced practitioners, and certified nurse midwives. 
            Our goal is to partner with you to support your unique health throughout the seasons of your life.
          </p>
        </div>

        <div className="bg-background rounded-2xl p-4 md:p-8 shadow-soft max-w-6xl mx-auto border-2" style={{borderColor: '#217576'}}>
          <h3 className="text-xl md:text-2xl font-bold text-primary mb-4 md:mb-6 text-center">General OBGYN Care</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            <div className="space-y-3">
              <h4 className="font-semibold text-primary mb-3">Our Services</h4>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Complete gynecological services, including annual well-woman exams</li>
                <li>• Contraceptive counseling and management, and family planning</li>
                <li>• Diagnosis and treatment of sexually-transmitted infections and diseases (STD)</li>
                <li>• Endometrial ablations</li>
                <li>• Maternity and delivery care</li>
                <li>• Patient education and counseling</li>
                <li>• Perimenopausal and menopausal care</li>
              </ul>
              <div className="mt-6">
                <h5 className="font-semibold text-primary mb-3">Treatment of gynecological issues, including:</h5>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Abnormal bleeding</li>
                  <li>• Chronic pelvic pain</li>
                  <li>• Difficult or painful sexual intercourse</li>
                  <li>• Dilation and curettage</li>
                  <li>• Dysfunctional uterine bleeding</li>
                  <li>• Endometriosis</li>
                  <li>• Menstrual cramping</li>
                  <li>• Premenstrual syndrome (PMS)</li>
                  <li>• Vaginal/vulvar disorders</li>
                </ul>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-primary mb-3">Medical Education Programs</h4>
              <p className="text-sm text-muted-foreground mb-4">
                As part of the Creighton University Arizona Health Education Alliance and in partnership with Valleywise Health, DMG's Department of Obstetrics and Gynecology (OBGYN) offers a residency program. For more information:
              </p>
              <div className="mb-6">
                <h5 className="font-semibold text-primary mb-2">OBGYN Residency</h5>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                In addition, DMG offers undergraduate education to medical students through four week electives including:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Gynecologic Surgery</li>
                <li>• Maternal-Fetal Medicine</li>
                <li>• Preparation for Practice</li>
                <li>• Specialty Ambulatory Clinics in OBGYN</li>
                <li>• Women's Health and Family Planning</li>
                <li>• Women's Imaging</li>
              </ul>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default GeneralObgynSection;