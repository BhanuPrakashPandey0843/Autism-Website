import React from "react";
import { FaBullhorn, FaBrain, FaPuzzlePiece, FaSchool, FaUsers, FaStar } from "react-icons/fa";

{/* Features  */ }
const features = [
  {
    title: "Understanding",
    description:
      "Autism spectrum disorder (ASD) affects how individuals communicate, learn, behave, and interact with others due to differences in the brain.",
    icon: "🧠",
  },
  {
    title: "Support & Empathy",
    description:
      "Every individual with autism is unique. Providing patience, empathy, and personalized support makes a meaningful impact.",
    icon: "🤝",
  },
  {
    title: "Communication",
    description:
      "Communication styles may vary—from verbal to nonverbal. Creating inclusive environments supports expression in all forms.",
    icon: "💬",
  },
  {
    title: "Awareness & Advocacy",
    description:
      "Promoting awareness and acceptance encourages inclusive communities and helps break down stigma.",
    icon: "📢",
  },
];

{/* Process Steps */ }
const autismSteps = [
  {
    title: "Awareness",
    icon: <FaBullhorn />,
    description:
      "Raising awareness helps society understand the challenges and strengths of people with autism. Education reduces stigma and promotes acceptance.",
  },
  {
    title: "Early Diagnosis",
    icon: <FaBrain />,
    description:
      "Early identification through screening and assessment allows for timely support and intervention during crucial developmental years.",
  },
  {
    title: "Personalized Support",
    icon: <FaPuzzlePiece />,
    description:
      "Every individual with autism is unique. Personalized education, therapy, and communication strategies are essential for growth.",
  },
  {
    title: "Inclusive Education",
    icon: <FaSchool />,
    description:
      "Creating inclusive learning environments ensures that students with autism receive the support they need to thrive academically and socially.",
  },
  {
    title: "Community & Family",
    icon: <FaUsers />,
    description:
      "Families and caregivers play a key role. Strong support systems and communities foster belonging, resilience, and confidence.",
  },
  {
    title: "Empowerment & Independence",
    icon: <FaStar />,
    description:
      "The ultimate goal is to empower individuals with autism to live fulfilling lives with independence, dignity, and purpose.",
  },
];

const Aboutuss = () => {
  return (
    <>
      {/* AboutUs First Section */}
      <section className="w-full min-h-screen bg-white text-gray-800 p-8 md:p-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side - Image */}
          <div className="w-full lg:w-1/2 overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500">
            <img
              src="/images/AboutusImageWorkingpeople.jpg"
              alt="Team working together"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side - Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300">
              About us
            </h2>
            <p className="text-lg text-gray-600">
              Growveil Thrive Hub is dedicated to creating compassionate digital solutions that empower individuals affected by Autism Spectrum Disorder (ASD).
            </p>
            <p className="text-gray-700">
              Autism spectrum disorder (ASD) is a lifelong developmental disability that affects how people communicate, learn, behave, and interact with others. It's caused by differences in the brain. Our mission is to provide meaningful support to individuals, families, and caregivers navigating life with autism.
            </p>
            <p className="text-gray-700">
              At Growveil Thrive Hub, we focus on developing intuitive tools, educational resources, and interactive platforms that cater to the unique needs of autistic individuals. Our team of empathetic developers, educators, and health professionals work together to create environments that promote inclusivity, independence, and confidence.
            </p>

            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition duration-300">
              Get in touch
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white pt-0 pb-15 px-6 lg:px-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Understanding Autism</h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-700">
            Autism spectrum disorder (ASD) is a lifelong developmental disability that affects how people communicate, learn, behave, and interact with others. It's caused by differences in the brain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:border-blue-400 hover:shadow-blue-100 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start space-x-4">
                <div className="text-4xl text-blue-500 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-16 px-6 lg:px-24">
        <div className="flex flex-col lg:flex-row lg:space-x-16 items-start">
          {/* Left: Text + Image */}
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h2 className="text-4xl font-bold mb-4">Understanding Autism</h2>
            <p className="text-lg text-gray-700 mb-6">
              Autism spectrum disorder (ASD) is a lifelong developmental condition
              that affects how a person communicates, learns, behaves, and
              interacts socially. Here's a general process that highlights
              awareness, support, and growth for individuals with autism.
            </p>
            <button className="px-5 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300">
              Get in Touch
            </button>

            <div className="mt-8 relative overflow-hidden rounded-2xl shadow-lg group">
              <img
                src="/images/Doctor_explains_patients.jpg"
                alt="Autism Support Illustration"
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
                <h3 className="text-xl font-semibold">Support, Understand, Empower</h3>
                <p className="text-sm">Every individual with autism deserves acceptance and the opportunity to thrive.</p>
              </div>
            </div>
          </div>

          {/* Right: Process Steps */}
          <div className="lg:w-1/2 space-y-6">
            {autismSteps.map((step, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all duration-300 group"
              >
                <div className="text-3xl text-blue-500 transition-transform duration-300 group-hover:scale-110">
                  {step.icon}
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-1">
                    {step.title}
                  </h4>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
};

export default Aboutuss;
