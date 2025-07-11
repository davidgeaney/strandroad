
import { useState } from "react";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    news: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="h-screen bg-[#ece6db] flex flex-col overflow-hidden">
      {/* Header */}
      <header className="bg-[#ece6db] border-b border-gray-300">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="text-2xl font-serif text-gray-800 hover:text-gray-600 transition-colors">
              STRAND ROAD
            </Link>

            {/* Navigation */}
            <nav className="flex items-center gap-8">
              <Link to="/" className="text-gray-700 hover:text-gray-900">
                Home
              </Link>
              <Link to="/menu" className="text-gray-700 hover:text-gray-900">
                Menu
              </Link>
              <span className="text-gray-900 font-medium">Contact</span>
            </nav>

            {/* Reserve Button */}
            <button className="bg-black text-white px-6 py-2 rounded">
              Reserve
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex overflow-y-auto">
        {/* Left Side - Contact Form */}
        <div className="w-full md:w-1/2 bg-[#ece6db] p-6 md:p-12 flex flex-col justify-between">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* First Name */}
              <div>
                <label className="block text-xs font-semibold tracking-widest text-gray-600 mb-2 uppercase">
                  FIRST NAME
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-transparent border border-gray-400 rounded-none focus:outline-none focus:border-gray-600 text-gray-800"
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-xs font-semibold tracking-widest text-gray-600 mb-2 uppercase">
                  LAST NAME
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Your last name"
                  className="w-full px-4 py-3 bg-transparent border border-gray-400 rounded-none focus:outline-none focus:border-gray-600 text-gray-800"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold tracking-widest text-gray-600 mb-2 uppercase">
                  E-MAIL
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 bg-transparent border border-gray-400 rounded-none focus:outline-none focus:border-gray-600 text-gray-800"
                />
              </div>

              {/* News */}
              <div>
                <label className="block text-xs font-semibold tracking-widest text-gray-600 mb-2 uppercase">
                  YOUR MESSAGE
                </label>
                <textarea
                  name="yourMessage"
                  value={formData.news}
                  onChange={handleInputChange}
                  placeholder="Your message"
                  rows={4}
                  className="w-full px-4 py-3 bg-transparent border border-gray-400 rounded-none focus:outline-none focus:border-gray-600 text-gray-800 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-black text-white py-4 px-6 hover:bg-gray-800 transition-colors font-medium tracking-wider"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>

          {/* Copyright */}
          <div className="mt-12">
            <p className="text-xs font-mono tracking-wider text-gray-600"> 2024 STRAND ROAD. ALL RIGHTS RESERVED.</p>
          </div>
        </div>

        {/* Right Side - Restaurant Image */}
        <div className="hidden md:block w-1/2 relative">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: "url('/images/strandcontactimg.jpg')" }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
