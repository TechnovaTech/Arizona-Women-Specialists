

const ObgynSpecialtiesSection = () => {
  const specialties = [
    { icon: "🔬", title: "Colposcopy & Dysplasia", items: ["Cervical cancer screening", "HPV testing", "LEEP procedures"] },
    { icon: "🤱", title: "Maternal Medicine", items: ["High-risk pregnancy care", "Genetic counseling", "Ultrasound exams"] },
    { icon: "🧬", title: "Fertility Treatment", items: ["Infertility solutions", "Hormonal therapy", "PCOS treatment"] },
    { icon: "⚕️", title: "Surgical Care", items: ["Cancer surgery", "Minimally invasive procedures", "Pelvic surgery"] },
    { icon: "🩺", title: "Urology Care", items: ["Incontinence treatment", "Pelvic prolapse", "Urodynamic testing"] },
    { icon: "🍼", title: "Pregnancy Support", items: ["Diabetes management", "Substance abuse counseling", "Prenatal care"] }
  ];

  return (
    <section id="specialties" className="py-20 bg-gradient-to-br from-teal-50 to-cyan-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-6">OBGYN Specialties</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Advanced women's healthcare with specialized treatment across all areas</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((specialty, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">{specialty.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{specialty.title}</h3>
              </div>
              <ul className="space-y-2">
                {specialty.items.map((item, i) => (
                  <li key={i} className="flex items-start text-gray-600">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ObgynSpecialtiesSection;