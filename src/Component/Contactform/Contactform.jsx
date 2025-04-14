import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const form = new FormData();
    form.append("access_key", "put-api-key-here");
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("phone", formData.phone);
    form.append("interest", formData.interest);
    form.append("message", formData.message);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: form,
    });

    const data = await response.json();
    setLoading(false);

    if (data.success) {
      setStatus({ type: "success", message: "Message sent successfully!" });
      setFormData({ name: "", email: "", phone: "", interest: "", message: "" });
    } else {
      setStatus({ type: "error", message: "Failed to send message. Try again!" });
    }
  };

  return (
    <div className="bg-gradient-to-br from-purple-50 via-white to-purple-100 min-h-screen py-20 px-6 md:px-16 font-[DM Sans]">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Reach Growveil Thrive Hub
        </h2>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          Discover personalized therapies crafted to improve everyday life, wellness, and growth for individuals on the spectrum.
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-2xl transition-all duration-300 hover:shadow-purple-300">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="tel"
              name="phone"
              placeholder="+91 000 0000000"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
            />
            <select
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              required
              className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
            >
              <option value="">Interested in</option>
              <option>Therapy</option>
              <option>Treatment</option>
              <option>Medicine</option>
              <option>Others</option>
            </select>
          </div>

          <textarea
            name="message"
            placeholder="Your message..."
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none h-32 resize-none"
          ></textarea>

          {status && (
            <div
              className={`text-white px-4 py-3 rounded-xl font-medium ${
                status.type === "success" ? "bg-green-500" : "bg-red-500"
              }`}
            >
              {status.message}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full md:w-auto px-8 py-4 bg-gradient-to-r text-center from-purple-500 via-blue-500 to-purple-600 text-white rounded-full text-lg font-semibold shadow-lg hover:shadow-purple-400 transition duration-300 disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
