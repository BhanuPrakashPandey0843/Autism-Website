import React from "react";

const Price = () => {
  const services = [
    "Behavioral Therapy Support",
    "Individual Counseling",
    "Speech & Language Sessions",
    "Social Skill Building",
    "Parental Guidance",
    "Personalized Learning Plans",
    "24/7 Emotional Helpline",
    "Virtual Consultation",
  ];

  const plans = [
    {
      name: "Free",
      price: "Free",
      duration: "/ Lifetime",
      features: [true, true, false, false, false, false, false, false],
      button: "Get Started",
    },
    {
      name: "$25",
      price: "$25",
      duration: "/ Month",
      features: [true, true, true, true, false, false, false, false],
      button: "Choose This Plan",
    },
    {
      name: "$40",
      price: "$40",
      duration: "/ Month",
      features: [true, true, true, true, true, true, true, true],
      button: "Choose This Plan",
    },
  ];

  return (
    <div className="w-full bg-gradient-to-r from-blue-50 to-cyan-50 py-16 px-4 md:px-10 lg:px-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-blue-900 mb-4">Growveil Thrive Hub Plans</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Empowering individuals on the autism spectrum with flexible and compassionate support plans designed to meet every unique need.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Left Column (Service Titles) */}
        <div className="bg-blue-900 text-white rounded-2xl py-8 px-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold">Support Services</h3>
            <span className="text-xs bg-cyan-400 text-blue-900 px-2 py-1 rounded-md font-bold">20% OFF</span>
          </div>
          {services.map((service, index) => (
            <p key={index} className="py-3 border-b border-blue-800 text-sm">
              {service}
            </p>
          ))}
        </div>

        {/* Pricing Columns */}
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
          >
            <div className="text-center py-6 border-b">
              <h3 className="text-3xl font-bold text-blue-900">{plan.price}</h3>
              <p className="text-sm text-gray-500">{plan.duration}</p>
            </div>
            <div className="px-6">
              {plan.features.map((enabled, i) => (
                <div
                  key={i}
                  className="flex justify-center py-4 border-b text-lg"
                >
                  {enabled ? (
                    <span className="text-blue-900">✔</span>
                  ) : (
                    <span className="text-gray-300">✖</span>
                  )}
                </div>
              ))}
            </div>
            <div className="p-6 text-center">
              <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-2 rounded-full transition-all">
                {plan.button}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Price;
