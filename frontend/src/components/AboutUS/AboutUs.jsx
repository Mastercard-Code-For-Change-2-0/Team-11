import React from "react";

function AboutUs() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Katalyst</h1>
        <p className="max-w-3xl mx-auto text-lg">
          Empowering women in STEM education to become future leaders and
          catalysts of change.
        </p>
      </section>

      {/* Our Story */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-6 text-red-600">Our Story</h2>
        <p className="mb-4">
          Katalyst was started in 2007 by{" "}
          <strong>Third Sector Partners (TSP)</strong>, a pioneering executive
          search firm dedicated exclusively to socially relevant organizations
          in the social, environmental, and corporate sustainability sectors.
        </p>
        <p className="mb-4">
          Recognizing the need to address the gender gap and empower women, TSP
          launched Katalyst with the mission to support women pursuing higher
          education, especially in STEM fields. The goal was simple yet
          transformative: <strong>educate a woman, educate a nation.</strong>
        </p>
        <p>
          Starting with a cohort of just 10 young women, Katalyst has grown into
          a thriving community across Mumbai, Pune, Bengaluru, and Delhi,
          empowering <strong>1914 women (896 currently enrolled)</strong> to
          date.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div className="bg-red-100 p-6 rounded-2xl shadow">
            <h3 className="text-2xl font-bold mb-4 text-red-600">Mission</h3>
            <p>
              To accelerate the growth of young women in professional education,
              through developmental interventions and an enabling environment,
              to enhance self-belief and leadership.
            </p>
          </div>
          <div className="bg-yellow-100 p-6 rounded-2xl shadow">
            <h3 className="text-2xl font-bold mb-4 text-yellow-600">Vision</h3>
            <p>Empowering Women for Equality in Opportunity and Leadership.</p>
          </div>
        </div>
      </section>

      {/* Why Katalyst */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-6 text-red-600">Why Katalyst?</h2>
        <p className="mb-4">
          As an NGO for professional education, Katalyst believes that bringing
          more women into STEM and professional sectors can create a ripple
          effect on families, communities, and nations.
        </p>
        <p className="mb-4">
          Education is the most effective way to reduce poverty. With women
          making up half of a nation’s potential talent base, their education
          and inclusion in leadership roles is crucial for global
          competitiveness and social progress.
        </p>
        <p>
          Katalyst provides a unique 600-hour proprietary,
          scientifically-researched curriculum, 1:1 mentorship, internships,
          corporate exposure, financial support, and medical insurance —
          ensuring women are ready to lead in professional environments.
        </p>
      </section>

      {/* Impact Numbers */}
      <section className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 py-12 text-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-5xl font-bold">51</h3>
            <p className="mt-2 text-lg">Colleges</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold">55</h3>
            <p className="mt-2 text-lg">Corporate Partners</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold">10</h3>
            <p className="mt-2 text-lg">Trainers</p>
          </div>
        </div>
      </section>

      {/* Alumni & Impact */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-6 text-red-600">Our Impact</h2>
        <p>
          Today, Katalyst alumni occupy senior positions in prestigious MNCs,
          large Indian companies, and Civil & Administrative Services — both in
          India and abroad. They are living proof that when women are empowered
          with education, mentorship, and opportunity, they rise to leadership
          roles and catalyze positive change.
        </p>
      </section>
    </div>
  );
}

export default AboutUs;
