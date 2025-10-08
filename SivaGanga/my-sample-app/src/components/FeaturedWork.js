// components/FeaturedWork.jsx
import React from "react";

const projects = [
    { title: "E-commerce Platform", desc: "A modern, responsive e-commerce solution with focus on user experience and conversion optimization. Built with scalability and performance in mind.", link: "React", link2: "Node.js", link3: "MongoDB", link4: "Stripe", src: "images/imgg1.png" },
    { title: "Brand Identity System", desc: "Complete visual identity redesign for a tech startup, including logo, guidelines, and digital assets. Creating a cohesive brand experience across all touchpoints.", link: "Illustrator", link2: "Photoshop", link3: "Figma", link4: "After Effects", src: "images/img2.png" },
    { title: "Mobile App Design", desc: "Intuitive mobile app interface for a fitness tracking application with focus on accessibility and user engagement through gamification.", link: "Figma", link2: "Principle", link3: "React Native", link4: "Lottie", src: "images/imgg2.png" },
    { title: "Dashboard Interface", desc: "Clean and functional dashboard design for data analytics platform with complex information architecture and real-time data visualization.", link: "Vue.js", link2: "D3.js", link3: "SCSS", link4: "Charts.js", src: "images/imgg4.png" },
    { title: "Mobile App Design", desc: "Modern marketing website with interactive animations and optimized conversion funnels. Built for maximum performance and SEO.", link: "Next.js", link2: "Framer Motion", link3: "Tailwind CSS ", link4: "Vercel", src: "images/img5.png" },
    { title: "Creative Portfolio", desc: "Artistic portfolio website featuring immersive galleries, smooth transitions, and creative storytelling for a digital artist.", link: "React", link2: "Three.js", link3: "GSAP", link4: "WebGL", src: "images/img6.png" },

];

const FeaturedWork = () => {
    return (
        <section id="Work" className="min-h-screen px-6 py-16 flex flex-col items-center bg-white">
            <h2 className="md:text-5xl text-3xl font-semibold text-purple-500 mb-12 text-center">Featured Work</h2>
            <div className="w-12 h-1 bg-purple-500 rounded-full mb-12"></div>



            <div className="grid md:grid-cols-3 gap-8">
                {projects.map((project) => (

                    <div key={project.title} className="p-6 bg-gray-50 rounded-3xl shadow-md hover:shadow-xl transition hover:shadow-xl transition transform hover:-translate-y-3 ">
                        <img src={project.src} className="hover: blue-400 mb-6" />
                        <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-gray-500 mb-4">{project.desc}</p>
                        <div className="flex flex-wrap gap-4 justify-start md:justify-start mt-12">
                            <button className="px-3 py-1 bg-gray-100 rounded-full text-gray-600 border border-gray-200 font-semibold hover:bg-indigo-500 transition
                               hover:text-white transform transition hover:scale-110 ">
                                {project.link}
                            </button>
                            <button className="px-3 py-1 bg-gray-100 rounded-full  text-gray-600 border border-gray-200 font-semibold hover:bg-indigo-500 transition
                            hover:text-white transform transition hover:scale-110 ">
                                {project.link2}
                            </button>
                            <button className="px-3 py-1 bg-gray-100 rounded-full  text-gray-600 border border-gray-200 font-semibold hover:bg-indigo-500 transition
                              hover:text-white transform transition hover:scale-110 ">
                                {project.link3}
                            </button>
                            <button className="px-3 py-1 bg-gray-100 rounded-full  text-gray-600 border border-gray-200 font-semibold hover:bg-indigo-500 transition
                           hover:text-white transform transition hover:scale-110 ">
                                {project.link4}
                            </button>
                        </div>
                    </div>

                ))}
            </div>

        </section>

    );
};

export default FeaturedWork;
