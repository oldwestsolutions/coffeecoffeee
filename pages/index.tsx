import { motion } from 'framer-motion';
import Head from 'next/head';
import { FaCoffee, FaMapMarkerAlt, FaClock, FaInstagram, FaFacebook, FaTwitter, FaBars } from 'react-icons/fa';
import { useState } from 'react';
import MenuItem from '../components/MenuItem';
import Gallery from '../components/Gallery';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {
      name: "Espresso",
      description: "Our signature espresso blend, rich and full-bodied",
      price: "$3.50",
      image: "/images/espresso.jpg"
    },
    {
      name: "Cappuccino",
      description: "Perfectly balanced with steamed milk and foam",
      price: "$4.50",
      image: "/images/cappuccino.jpg"
    },
    {
      name: "Cold Brew",
      description: "Smooth and refreshing, brewed for 24 hours",
      price: "$4.00",
      image: "/images/cold-brew.jpg"
    }
  ];

  const galleryImages = [
    "/images/gallery-1.jpg",
    "/images/gallery-2.jpg",
    "/images/gallery-3.jpg",
    "/images/gallery-4.jpg",
    "/images/gallery-5.jpg",
    "/images/gallery-6.jpg"
  ];

  return (
    <>
      <Head>
        <title>Credit Coffee | Seattle</title>
        <meta name="description" content="A minimalist coffee experience in the heart of Seattle" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@400;500;600&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className="min-h-screen bg-coffee-light">
        {/* Navigation */}
        <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-serif text-coffee-dark">Credit Coffee</h1>
              </div>
              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-coffee-dark"
                >
                  <FaBars className="h-6 w-6" />
                </button>
              </div>
              {/* Desktop menu */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-center space-x-8">
                  <a href="#about" className="text-seattle-gray hover:text-coffee-dark">About</a>
                  <a href="#menu" className="text-seattle-gray hover:text-coffee-dark">Menu</a>
                  <a href="#gallery" className="text-seattle-gray hover:text-coffee-dark">Gallery</a>
                  <a href="#contact" className="text-seattle-gray hover:text-coffee-dark">Contact</a>
                </div>
              </div>
            </div>
          </div>
          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#about" className="block px-3 py-2 text-seattle-gray hover:text-coffee-dark">About</a>
                <a href="#menu" className="block px-3 py-2 text-seattle-gray hover:text-coffee-dark">Menu</a>
                <a href="#gallery" className="block px-3 py-2 text-seattle-gray hover:text-coffee-dark">Gallery</a>
                <a href="#contact" className="block px-3 py-2 text-seattle-gray hover:text-coffee-dark">Contact</a>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Image first on mobile */}
              <div className="w-full md:w-1/2 order-1 md:order-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-xl"
                >
                  <div className="absolute inset-0 bg-[url('/images/coffee-shop.jpg')] bg-cover bg-center" />
                </motion.div>
              </div>
              {/* Text content */}
              <div className="w-full md:w-1/2 order-2 md:order-1 text-center md:text-left">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-coffee-dark mb-4">Credit Coffee</h1>
                  <p className="text-lg md:text-xl text-seattle-gray mb-8">Minimalist coffee experience in Seattle</p>
                  <motion.a 
                    href="#menu"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn btn-primary inline-block"
                  >
                    View Menu
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-serif text-coffee-dark text-center mb-8 md:mb-12"
            >
              Our Story
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <p className="text-base md:text-lg text-seattle-gray leading-relaxed">
                  Founded in 2015 in the heart of Seattle, Credit Coffee was born from a simple idea: 
                  to create a space where coffee lovers could experience the perfect cup in a minimalist, 
                  distraction-free environment.
                </p>
                <p className="text-base md:text-lg text-seattle-gray leading-relaxed">
                  Our journey began with sourcing the finest beans from sustainable farms around the world. 
                  We've built direct relationships with farmers in Colombia, Ethiopia, and Brazil, ensuring 
                  fair trade practices and the highest quality beans.
                </p>
                <p className="text-base md:text-lg text-seattle-gray leading-relaxed">
                  What sets us apart is our commitment to the craft. Our in-house roasting process is 
                  carefully monitored to bring out the unique characteristics of each bean, creating 
                  complex, balanced flavors that tell a story in every sip.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-xl"
              >
                <div className="absolute inset-0 bg-[url('/images/roasting.jpg')] bg-cover bg-center" />
              </motion.div>
            </div>
            <div className="mt-16 grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-coffee-light rounded-lg"
              >
                <FaCoffee className="text-3xl text-coffee-dark mx-auto mb-4" />
                <h3 className="text-xl font-serif text-coffee-dark mb-2">Direct Trade</h3>
                <p className="text-seattle-gray">We work directly with farmers to ensure fair prices and sustainable practices.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-center p-6 bg-coffee-light rounded-lg"
              >
                <FaCoffee className="text-3xl text-coffee-dark mx-auto mb-4" />
                <h3 className="text-xl font-serif text-coffee-dark mb-2">In-House Roasting</h3>
                <p className="text-seattle-gray">Every bean is carefully roasted in our facility to bring out its unique character.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center p-6 bg-coffee-light rounded-lg"
              >
                <FaCoffee className="text-3xl text-coffee-dark mx-auto mb-4" />
                <h3 className="text-xl font-serif text-coffee-dark mb-2">Community Focus</h3>
                <p className="text-seattle-gray">We're committed to creating a welcoming space for coffee enthusiasts.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section id="menu" className="py-16 md:py-20 px-4 bg-coffee-light">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-serif text-coffee-dark text-center mb-8 md:mb-12"
            >
              Our Menu
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {menuItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <MenuItem {...item} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-16 md:py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-serif text-coffee-dark mb-4">Our Space</h2>
              <p className="text-lg text-seattle-gray max-w-2xl mx-auto">
                Step into our minimalist sanctuary where every detail is designed to enhance your coffee experience.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-serif text-coffee-dark">A Space for Connection</h3>
                <p className="text-seattle-gray leading-relaxed">
                  Our coffee shop is more than just a place to grab a drink. It's a carefully curated space 
                  designed to foster connection, creativity, and relaxation. From the warm lighting to the 
                  carefully selected furniture, every element has been chosen to create the perfect atmosphere.
                </p>
                <p className="text-seattle-gray leading-relaxed">
                  Whether you're looking for a quiet corner to work, a place to meet friends, or just a 
                  moment of peace with your favorite brew, you'll find it here.
                </p>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-primary inline-block"
                >
                  Get Directions
                </motion.a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-xl"
              >
                <div className="absolute inset-0 bg-[url('/images/space-1.jpg')] bg-cover bg-center" />
              </motion.div>
            </div>

            <Gallery images={[
              {
                src: "/images/space-2.jpg",
                title: "The Roasting Room",
                description: "Where the magic happens - our in-house roasting facility"
              },
              {
                src: "/images/space-3.jpg",
                title: "The Bar",
                description: "Watch our skilled baristas craft your perfect cup"
              },
              {
                src: "/images/space-4.jpg",
                title: "The Lounge",
                description: "Relax and enjoy your coffee in our comfortable seating area"
              },
              {
                src: "/images/space-5.jpg",
                title: "The Garden",
                description: "Our outdoor seating area, perfect for sunny Seattle days"
              },
              {
                src: "/images/space-6.jpg",
                title: "The Library",
                description: "A quiet corner for reading and reflection"
              },
              {
                src: "/images/space-7.jpg",
                title: "The Workshop",
                description: "Join us for coffee brewing classes and tastings"
              }
            ]} />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-20 px-4 bg-coffee-light">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-serif text-coffee-dark text-center mb-8 md:mb-12"
            >
              Visit Us
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <FaMapMarkerAlt className="text-3xl md:text-4xl text-coffee-dark mx-auto mb-4" />
                <h3 className="text-lg md:text-xl font-serif mb-2">Location</h3>
                <p className="text-seattle-gray">123 Coffee Street<br />Seattle, WA 98101</p>
              </div>
              <div className="text-center">
                <FaClock className="text-3xl md:text-4xl text-coffee-dark mx-auto mb-4" />
                <h3 className="text-lg md:text-xl font-serif mb-2">Hours</h3>
                <p className="text-seattle-gray">Mon-Fri: 6am - 6pm<br />Sat-Sun: 7am - 5pm</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center space-x-4 mb-4">
                  <FaInstagram className="text-2xl text-coffee-dark" />
                  <FaFacebook className="text-2xl text-coffee-dark" />
                  <FaTwitter className="text-2xl text-coffee-dark" />
                </div>
                <h3 className="text-lg md:text-xl font-serif mb-2">Follow Us</h3>
                <p className="text-seattle-gray">@creditcoffee</p>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Footer */}
        <footer className="bg-coffee-dark text-white">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-serif mb-4">Credit Coffee</h3>
                <p className="text-coffee-light mb-4">A minimalist coffee experience in the heart of Seattle.</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-coffee-light hover:text-white transition-colors">
                    <FaInstagram className="text-xl" />
                  </a>
                  <a href="#" className="text-coffee-light hover:text-white transition-colors">
                    <FaFacebook className="text-xl" />
                  </a>
                  <a href="#" className="text-coffee-light hover:text-white transition-colors">
                    <FaTwitter className="text-xl" />
                  </a>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-serif mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="#about" className="text-coffee-light hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#menu" className="text-coffee-light hover:text-white transition-colors">Menu</a></li>
                  <li><a href="#gallery" className="text-coffee-light hover:text-white transition-colors">Gallery</a></li>
                  <li><a href="#contact" className="text-coffee-light hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-serif mb-4">Contact Info</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <FaMapMarkerAlt className="mr-2 text-coffee-light" />
                    <span className="text-coffee-light">123 Coffee Street, Seattle, WA 98101</span>
                  </li>
                  <li className="flex items-center">
                    <FaClock className="mr-2 text-coffee-light" />
                    <span className="text-coffee-light">Mon-Fri: 6am - 6pm<br />Sat-Sun: 7am - 5pm</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-serif mb-4">Newsletter</h4>
                <p className="text-coffee-light mb-4">Subscribe to our newsletter for updates and special offers.</p>
                <form className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="px-4 py-2 rounded-l-md w-full text-coffee-dark"
                  />
                  <button
                    type="submit"
                    className="bg-coffee text-white px-4 py-2 rounded-r-md hover:bg-coffee-light transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
            <div className="border-t border-coffee mt-12 pt-8 text-center text-coffee-light text-sm">
              <p>&copy; {new Date().getFullYear()} Credit Coffee. All rights reserved.</p>
              <div className="mt-4 space-x-4">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Accessibility</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
} 