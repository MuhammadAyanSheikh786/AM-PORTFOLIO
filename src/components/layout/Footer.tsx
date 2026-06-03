export default function Footer() {
  return (
    <footer className="border-t border-dark-700 pt-16 pb-8 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg font-bold text-white mb-3">
              <span className="text-gradient">AM DEV STUDIO</span>
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Premium digital experiences crafted with cutting-edge technology. We transform your vision into reality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-3 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {["Services", "About", "Portfolio", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="text-gray-500 hover:text-cyan-400 text-sm transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-3 uppercase tracking-wider">Services</h4>
            <ul className="space-y-2">
              {["MERN Stack", "Graphics Design", "AI Integration", "Shopify", "WordPress"].map((s) => (
                <li key={s}>
                  <span className="text-gray-500 text-sm">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-3 uppercase tracking-wider">Get In Touch</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-500 text-sm">contact@amdevstudio.com</span></li>
              <li><span className="text-gray-500 text-sm">Pakistan</span></li>
              <li className="flex gap-4 pt-2">
                {["Twitter", "LinkedIn", "GitHub"].map((s) => (
                  <a key={s} href="#" className="text-gray-500 hover:text-cyan-400 text-sm transition-colors">{s}</a>
                ))}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} AM DEV STUDIO. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-600">
            <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
