const SpecializedProgramsSection = () => {
  

  return (
    <section id="general" className="py-20 bg-accent-teal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="section-title text-primary">Specialized OBGYN Programs</h2>
          <p className="section-subtitle">
            In collaboration with Valleywise Health, DMG includes OBGYN specialists providing services and programs to support women with unique health challenges. These programs and services include:
          </p>
        </div>

        <div className="bg-background rounded-2xl p-8 shadow-soft max-w-6xl mx-auto border-2" style={{borderColor: '#217576'}}>
        
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h4 className="font-semibold text-primary mb-3">Internatal Care Clinic:</h4>
              <p className="text-sm text-muted-foreground mb-4">
             We offer special primary care services for women planning another pregnancy who have experienced:
              </p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Giving birth to small babies (under three pounds)</li>
                <li>• 3+ days of intensive neonatal care previously</li>
                <li>• Fetal demise</li>
                
              </ul>
              <div className="mt-6">
                 <h4 className="font-semibold text-primary mb-3">Teen Pregnancy Program:</h4>
                <p className="text-sm text-muted-foreground mb-4">
              DMG includes OBGYN providers with a commitment to providing the support and education needed for the youngest mothers to have a healthy pregnancy, and baby at birth and as the child grows.</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                   <li>• Healthy pregnancy and birth</li>
                <li>• Healthy relationships</li>
                <li>• Parenting and breastfeeding</li>
                
                  
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div>
               <h5 className="font-semibold text-primary mb-3">Refugee Women’s Health Clinic (RWHC):</h5>
                <p className="text-sm text-muted-foreground mb-4">
              The first of its kind in Arizona, RWHC was established to address the clinical care of women in the growing refugee and immigrant communities. With the goal of eliminating health disparities and cultural barriers to care, DMG OBGYN providers and RWHC staff provide the following services in a professional and culturally- and linguistically-appropriate manner:
              </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Delivery and post-partum care</li>
                  <li>• Family planning</li>
                  <li>• Gynecological care</li>
                  <li>• Health education, including nutrition and exercise</li>
                  <li>• Management of infertility and menopause</li>
                  <li>• Maternal and child health issues</li>
                  <li>• Preventive health services</li>
                  <li>• Routine and high-risk prenatal care</li>
                  
                </ul>
              </div>
              <div></div>
           
              
          </div>
        </div>
        </div>
        </div>
      
    </section>
  );
};

export default SpecializedProgramsSection;