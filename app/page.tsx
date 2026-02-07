import { BoltIcon, PaintBrushIcon, LockClosedIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/solid';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <div className="navbar bg-base-100 shadow-lg">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">TimeClimbers</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero min-h-[600px] bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">Build Your Digital Future</h1>
            <p className="text-xl mb-8">
              We create exceptional web and mobile applications that drive business growth and delight users
            </p>
            <div className="flex gap-4 justify-center">
              <a href="#services" className="btn btn-secondary btn-lg">Our Services</a>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">What We Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-primary">Web Development</h3>
                <p>Modern, responsive websites built with cutting-edge technologies like React, Next.js, and more.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-accent">Learn More</button>
                </div>
              </div>
            </div>
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-primary">Mobile Apps</h3>
                <p>Native and cross-platform mobile applications for iOS and Android that users love.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-accent">Learn More</button>
                </div>
              </div>
            </div>
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-primary">Consulting</h3>
                <p>Strategic technical guidance to help your business make the right technology decisions.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-accent">Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-primary text-primary-content w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BoltIcon className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg mb-2">Fast Delivery</h3>
              <p className="text-sm">Quick turnaround without compromising quality</p>
            </div>
            <div className="text-center">
              <div className="bg-secondary text-secondary-content w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <PaintBrushIcon className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg mb-2">Modern Design</h3>
              <p className="text-sm">Beautiful, user-friendly interfaces</p>
            </div>
            <div className="text-center">
              <div className="bg-accent text-accent-content w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <LockClosedIcon className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg mb-2">Secure</h3>
              <p className="text-sm">Built with security best practices</p>
            </div>
            <div className="text-center">
              <div className="bg-info text-info-content w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DevicePhoneMobileIcon className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg mb-2">Responsive</h3>
              <p className="text-sm">Works perfectly on all devices</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">About TimeClimbers</h2>
            <p className="text-lg mb-6">
              We are a team of passionate developers and designers dedicated to creating 
              digital experiences that make a difference. With years of experience in web 
              and mobile development, we bring your ideas to life with precision and creativity.
            </p>
            <p className="text-lg">
              Whether you&apos;re a startup looking to launch your first product or an 
              established business seeking to modernize your digital presence, we have 
              the expertise to help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer footer-center p-10 bg-base-100 text-base-content">
        <aside>
          <p className="font-bold text-xl">TimeClimbers</p>
          <p>Building the future, one app at a time</p>
          <p>© 2026 TimeClimbers. All rights reserved.</p>
        </aside>
      </footer>
    </div>
  );
}
