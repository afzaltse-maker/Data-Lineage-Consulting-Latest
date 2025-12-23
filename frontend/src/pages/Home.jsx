import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Database, Warehouse, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { heroData, aboutData, staffingServices, services, industries, statistics, testimonials, whyUsPoints, blogPosts } from '../mock';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [counters, setCounters] = useState(statistics.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);

  const iconMap = {
    Code: Code,
    Database: Database,
    Warehouse: Warehouse
  };

  // Counter animation
  useEffect(() => {
    if (!hasAnimated) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setHasAnimated(true);
            statistics.forEach((stat, index) => {
              let current = 0;
              const increment = stat.value / 50;
              const timer = setInterval(() => {
                current += increment;
                if (current >= stat.value) {
                  current = stat.value;
                  clearInterval(timer);
                }
                setCounters((prev) => {
                  const newCounters = [...prev];
                  newCounters[index] = Math.floor(current);
                  return newCounters;
                });
              }, 30);
            });
          }
        },
        { threshold: 0.5 }
      );

      const statsElement = document.getElementById('stats-section');
      if (statsElement) observer.observe(statsElement);

      return () => observer.disconnect();
    }
  }, [hasAnimated]);

  // Testimonial auto-rotate
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0, 150, 136, 0.75), rgba(0, 172, 193, 0.7)), url(https://customer-assets.emergentagent.com/job_84843c0d-ded0-4aa5-a186-f1759af9054e/artifacts/ouv7eyo5_DLC.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4 text-center z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            {heroData.title}
          </h1>
          <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto">
            {heroData.subtitle}
          </p>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-200">
            {heroData.description}
          </p>
          <Link to="/about">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all rounded-full">
              Read More <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">{aboutData.title}</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">{aboutData.description1}</p>
              <p className="text-gray-600 mb-6 leading-relaxed">{aboutData.description2}</p>
              <Link to="/about">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-xl transition-all rounded-full px-6">
                  Read More <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src={aboutData.image}
                alt="About Elenor"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Staffing Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">STAFFING SERVICE OFFERINGS</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Staffing in all industry is a very crucial aspect. Since the industry requires highly skilled and niche
              specific talents, it often requires an expert to meet the recruitment demands.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {staffingServices.map((service) => (
              <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/staffing">
              <Button variant="outline" className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white hover:border-transparent transition-all shadow-md hover:shadow-lg rounded-full px-6">
                View More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg"
                alt="Our Services"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">OUR SERVICES</h2>
              <p className="text-gray-600 mb-8">
                Data Lineage Consulting provides consulting and staffing services that are as wide ranging and diverse as the field itself
              </p>
              <div className="space-y-6">
                {services.map((service) => {
                  const IconComponent = iconMap[service.icon];
                  return (
                    <div key={service.id} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="text-purple-600" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-gray-800">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-8">
                <Link to="/services">
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all">
                    Read More <ArrowRight className="ml-2" size={18} />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">INDUSTRIES WE WORK</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              With a strong heritage of innovation and entrepreneurship in technology services. Whether you're in the
              early, middle or late stages of your career
            </p>
          </div>
          <Tabs defaultValue="banking" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-white">
              {industries.map((industry) => (
                <TabsTrigger key={industry.id} value={industry.id} className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white">
                  {industry.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {industries.map((industry) => (
              <TabsContent key={industry.id} value={industry.id}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <img
                      src={industry.image}
                      alt={industry.name}
                      className="rounded-lg shadow-xl w-full h-96 object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">{industry.title}</h3>
                    <p className="text-gray-600 mb-4">{industry.description1}</p>
                    <p className="text-gray-600 mb-6 leading-relaxed">{industry.description2}</p>
                    <Link to="/industries">
                      <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all">
                        Read More <ArrowRight className="ml-2" size={18} />
                      </Button>
                    </Link>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Statistics Section */}
      <section id="stats-section" className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 via-pink-600/90 to-blue-600/90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {statistics.map((stat, index) => (
              <div key={index} className="backdrop-blur-sm bg-white/10 rounded-lg p-8 hover:bg-white/20 transition-all">
                <div className="text-5xl font-bold mb-2">{counters[index]}+</div>
                <div className="text-xl">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Stay Update With Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            We have committed to provide personalized, conscientious, and comprehensive services to our clientele.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all">
              CONTACT US
            </Button>
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">CUSTOMER REVIEW</h2>
            <p className="text-gray-600">What People Say About Us</p>
          </div>
          <div className="max-w-4xl mx-auto relative">
            <Card className="p-8">
              <CardContent className="text-center">
                <Quote className="text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-4" size={48} style={{WebkitTextStroke: '1px rgba(147, 51, 234, 0.5)'}} />
                <p className="text-gray-600 text-lg mb-6 italic">
                  {testimonials[currentTestimonial].comment}
                </p>
                <div className="flex justify-center mb-4">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-800">{testimonials[currentTestimonial].name}</h4>
                <p className="text-gray-500">{testimonials[currentTestimonial].role}</p>
              </CardContent>
            </Card>
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white transition-all"
            >
              <ChevronRight size={24} />
            </button>
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-gradient-to-r from-purple-600 to-pink-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">WHY US</h2>
            <p className="text-gray-600">Delivering innovative solutions to tackle the biggest challenges</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <img
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
                alt="Why Choose Us"
                className="rounded-lg shadow-xl w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              {whyUsPoints.map((point) => (
                <div key={point.number} className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-lg flex items-center justify-center text-2xl font-bold flex-shrink-0 shadow-lg">
                    {point.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{point.title}</h3>
                    <p className="text-gray-600">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">LATEST BLOG</h2>
            <p className="text-gray-600">Have A Look To Our Latest Blog</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded shadow-lg">
                    {post.date}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="text-sm bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold mb-2">{post.category}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <Button variant="link" className="text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text p-0 font-semibold">
                    READ MORE <ArrowRight className="ml-2 inline" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
