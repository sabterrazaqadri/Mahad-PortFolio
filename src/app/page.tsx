// pages/index.js
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mahad Raza Qadri</title>
        <meta name="description" content="Mahad Raza Qadri – Full‑Stack Developer" />
      </Head>

      <div className="min-h-screen bg-gray-950 text-gray-100 font-sans antialiased">
        <nav className="w-full bg-white/90 backdrop-blur-sm p-4 shadow-lg">
          <div className="container mx-auto flex justify-between items-center">
            <a href="#hero" className="text-3xl font-extrabold text-gray-900 tracking-wide">
              Mahad Raza Qadri
            </a>
            <div className="space-x-8 hidden md:flex">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map(section => (
                <a
                  key={section}
                  href={`#${section.toLowerCase()}`}
                  className="text-lg text-gray-800 hover:text-gray-600 transition-colors duration-300"
                >
                  {section}
                </a>
              ))}
            </div>
            <button className="md:hidden text-gray-800 hover:text-gray-600 focus:outline-none">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </nav>

        <section id="hero" className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-white to-gray-200 text-center py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="diagonal-lines" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                  <line x1="0" y1="0" x2="10" y2="10" stroke="#cbd5e1" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#diagonal-lines)" />
            </svg>
          </div>
          <div className="relative z-10 max-w-5xl mx-auto animate-fadeInUp">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 text-gray-900">
              Transforming Ideas into{' '}
              <span className="text-blue-700 block sm:inline-block">Digital Reality</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              I'm Mahad Raza Qadri, a dedicated developer crafting captivating websites and custom applications that drive success.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="#contact"
                className="inline-block bg-gray-900 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 active:scale-95"
              >
                Get a Free Consultation
              </a>
              <a
                href="#portfolio"
                className="inline-block border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 active:scale-95"
              >
                View My Work
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 px-4 bg-gray-900">
          <div className="container mx-auto max-w-5xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Who is Mahad Raza Qadri?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed">
              I am a passionate and innovative full-stack developer with a keen eye for detail and a
              commitment to delivering high-quality digital solutions...
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-cyan-400">
                  My Philosophy
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Every project begins with a deep understanding of your vision...
                </p>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-cyan-400">
                  Why Choose Me?
                </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-3">
                  {[
                    'Client-Centric Approach: Your goals and satisfaction are my top priority.',
                    'Cutting-Edge Technologies: Utilizing the latest tools for optimal performance and future scalability.',
                    'Responsive & Intuitive Design: Ensuring a seamless user experience across all devices.',
                    'Scalable Solutions: Building applications and websites that grow with your business.',
                    'Timely Delivery: Respecting deadlines without compromising on quality or attention to detail.',
                  ].map((item, idx) => (
                    <li key={idx}>
                      <strong className="text-white">{item.split(':')[0]}:</strong>
                      {item.split(':')[1]}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 px-4 bg-gray-950">
          <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              My Expertise & Services
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Offering a comprehensive suite of services to bring your digital ideas to life.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: 'desktop', title: 'Custom Website Development', desc: 'From elegant static sites to complex web applications...' },
                { icon: 'mobile-alt', title: 'Bespoke App Solutions', desc: 'Need a unique application to streamline operations...' },
                { icon: 'shopping-cart', title: 'E-commerce Development', desc: 'Build a powerful online store that converts visitors...' },
                { icon: 'drafting-compass', title: 'UI/UX Design & Prototyping', desc: 'Crafting engaging and intuitive user interfaces...' },
                { icon: 'code-branch', title: 'API Integration & Development', desc: 'Seamlessly connect your systems and services...' },
                { icon: 'tachometer-alt', title: 'Performance & SEO Optimization', desc: 'Ensure your website loads fast and ranks high...' },
              ].map((s, idx) => (
                <div
                  key={idx}
                  className="bg-gray-800 p-8 rounded-xl shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 transform hover:-translate-y-3 hover:scale-[1.02]"
                >
                  <div className="text-cyan-400 text-5xl mb-6">
                    <i className={`fas fa-${s.icon}`}></i>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">{s.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="py-20 px-4 bg-gray-900">
          <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              My Recent Work
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              A glimpse into some projects where ideas transformed into tangible digital solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {['Alpha', 'Beta', 'Gamma'].map((name, idx) => (
                <div
                  key={idx}
                  className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden hover:shadow-cyan-500/30 transition-all duration-300 transform hover:-translate-y-3 hover:scale-[1.02]"
                >
                  <img
                    src={`https://via.placeholder.com/600x400/0F172A/06B6D4?text=Project+${name}`}
                    alt={`Project ${name}`}
                    className="w-full h-48 object-cover object-center"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-2 text-white">
                      {name === 'Alpha'
                        ? 'E-commerce Platform Redesign'
                        : name === 'Beta'
                        ? 'Custom CRM Web Application'
                        : 'Interactive Educational Portal'}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {name === 'Alpha'
                        ? 'A complete overhaul of a fashion e-commerce site...'
                        : name === 'Beta'
                        ? 'Developed a bespoke CRM to manage client interactions...'
                        : 'Built an engaging online learning platform...'}
                    </p>
                    <a
                      href="#"
                      className="text-cyan-400 hover:text-cyan-500 hover:underline text-lg font-medium transition-colors duration-300"
                    >
                      View Case Study &rarr;
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 px-4 bg-gray-950">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let's collaborate and bring your digital vision to life...
            </p>
            <div className="bg-gray-800 p-8 rounded-xl shadow-2xl">
              <form className="grid grid-cols-1 gap-6">
                {[
                  { type: 'text', placeholder: 'Your Name' },
                  { type: 'email', placeholder: 'Your Email' },
                  { type: 'text', placeholder: 'Subject' },
                ].map((field, i) => (
                  <input
                    key={i}
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full p-4 rounded-lg bg-gray-700 border border-gray-600 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-200"
                  />
                ))}
                <textarea
                  placeholder="Your Message"
                  rows="6"
                  className="w-full p-4 rounded-lg bg-gray-700 border border-gray-600 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-200"
                />
                <button
                  type="submit"
                  className="bg-cyan-500 hover:bg-cyan-600 text-gray-950 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 active:scale-95"
                >
                  Send Message
                </button>
              </form>
              <div className="mt-12 text-gray-300">
                <p className="text-lg mb-4">Or connect with me directly:</p>
                <div className="flex justify-center space-x-8">
                  {[
                    { href: '#', icon: 'fab fa-linkedin' },
                    { href: '#', icon: 'fab fa-github' },
                    { href: 'mailto:your.email@example.com', icon: 'fas fa-envelope' },
                  ].map((s, i) => (
                    <a
                      key={i}
                      href={s.href}
                      className="text-cyan-400 hover:text-cyan-500 text-4xl transition-colors duration-300"
                    >
                      <i className={s.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-gray-900 py-8 px-4 text-center text-gray-400 text-sm">
          <div className="container mx-auto">
            <p className="mb-2">&copy; {new Date().getFullYear()} Mahad Raza Qadri. All rights reserved.</p>
            <p>
              Designed and Developed with{' '}
              <span className="text-red-500 inline-block animate-pulse">&hearts;</span> by Mahad Raza Qadri
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
