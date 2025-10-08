import React from "react";

const ContactSection = () => {
  return (
    <section
      id="Contact"
      className="min-h-screen px-6 py-16 flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 relative overflow-hidden text-white"
    >
    
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      <div className="relative z-10 max-w-3xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
    
        <p className="text-lg mb-12 text-gray-200">
          Ready to bring your vision to life? Let's discuss how we can create something amazing together.
          I'm always excited to take on new challenges and collaborate on innovative projects.
        </p>

        <form className="space-y-12">
        
          <div className=" grid md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-semibold block text-left mb-4">Name</label>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full px-5 py-3 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-600 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <div>
              <label className="text-sm font-semibold block text-left mb-4">Email</label>


              <input
                type="email"
                placeholder="your.email@example.com"
                className="w-full px-5 py-3 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-600 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
          </div>

         
          <div>
            <label className="text-sm font-semibold block text-left mb-4">Subject</label>
            <input
              type="text"
              placeholder="What's this about?"
              className="w-full px-5 py-3 rounded-lg  bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-600 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          

          <div>
            <label className="text-sm font-semibold block text-left mb-4">Message</label>
            <textarea
              rows="5"
              placeholder="Tell me about your project..."
              className="w-full px-5 py-3 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-600 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-5 py-3 bg-indigo-400 text-white-400 font-bold rounded-full shadow-md hover:border border-white/20 transform transition"
            >
              Send Message
            </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
