
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
    <div className="h-screen flex flex-col overflow-hidden" style={{ backgroundColor: '#001514' }}>
      {/* Header */}
      <header className="border-b border-gray-700 flex-shrink-0" style={{ backgroundColor: '#001514' }}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="text-2xl font-serif text-yellow-400 hover:text-yellow-300 transition-colors">
              STRAND ROAD
            </Link>

            {/* Navigation - Hidden on mobile, shown on md and up */}
            <nav className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-white hover:text-yellow-400 transition-colors">
                Home
              </Link>
              <Link to="/menu" className="text-white hover:text-yellow-400 transition-colors">
                Menu
              </Link>
              <span className="text-yellow-400 font-medium">Contact</span>
            </nav>
            
            {/* Spacer for mobile to push reserve button to the right */}
            <div className="md:hidden flex-1"></div>

            {/* Reserve Button */}
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded transition-colors">
              Reserve
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* Left Side - Contact Form */}
        <div className="w-full md:w-1/2 bg-[#02040F] p-6 md:p-12 overflow-hidden">
          <div className="h-full flex flex-col">
            <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col">
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
                  className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-none focus:outline-none focus:border-yellow-400 text-white placeholder-gray-400"
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
                  className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-none focus:outline-none focus:border-yellow-400 text-white placeholder-gray-400"
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
                  className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-none focus:outline-none focus:border-yellow-400 text-white placeholder-gray-400"
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
                  className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-none focus:outline-none focus:border-yellow-400 text-white placeholder-gray-400 resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-black py-3 px-6 hover:bg-yellow-500 transition-colors font-medium tracking-wider"
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>

          {/* Copyright */}
          <div className="mt-12">
            <p className="text-xs font-mono tracking-wider text-gray-400"> 2024 STRAND ROAD. ALL RIGHTS RESERVED.</p>
          </div>
        </div>

        {/* Right Side - Restaurant Image */}
        <div className="hidden md:block w-1/2 relative">
          <div 
            className="absolute inset-0 bg-cover bg-center h-full" 
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
