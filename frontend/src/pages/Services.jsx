import React from 'react';
import { services } from '../mock';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { Code, Database, Warehouse, Cloud, Shield, Zap, BarChart, Settings } from 'lucide-react';

const Services = () => {
  const iconMap = {
    Code: Code,
    Database: Database,
    Warehouse: Warehouse
  };

  const additionalServices = [
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Migrate and manage your infrastructure on leading cloud platforms with expert guidance and support'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Protect your digital assets with comprehensive security solutions and compliance management'
    },
    {
      icon: Zap,
      title: 'Digital Transformation',
      description: 'Accelerate your digital journey with innovative technologies and strategic implementation'
    },
    {
      icon: BarChart,
      title: 'Business Intelligence',
      description: 'Transform data into actionable insights with advanced analytics and reporting tools'
    },
    {
      icon: Settings,
      title: 'IT Consulting',
      description: 'Strategic technology consulting to align IT initiatives with business objectives'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-96 flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0, 150, 136, 0.75), rgba(0, 172, 193, 0.7)), url(https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center z-10">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Comprehensive consulting services tailored to drive your business forward
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Wide-Ranging Consulting Services</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Elenor provides consulting and staffing services that are as wide-ranging and diverse as the field
              itself. We combine deep industry expertise with technical excellence to deliver solutions that transform
              businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Core Service Offerings</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our primary services designed to meet your critical business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = iconMap[service.icon];
              return (
                <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="text-white" size={36} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Additional Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Expand your capabilities with our comprehensive suite of specialized services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-teal-50 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="text-teal-600" size={28} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Approach */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Our Service Approach</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We believe in a collaborative approach that puts your business objectives at the center of everything
                we do. Our methodology combines industry best practices with innovative thinking to deliver measurable
                results.
              </p>
              <div className="space-y-4">
                {[
                  'Client-Centric Focus',
                  'Agile Methodology',
                  'Proven Track Record',
                  'Continuous Innovation',
                  'End-to-End Support'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg"
                alt="Our Approach"
                className="rounded-lg shadow-xl w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Industries We Serve</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Delivering specialized solutions across multiple sectors
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Healthcare',
              'Financial Services',
              'Insurance',
              'Retail',
              'Manufacturing',
              'Technology',
              'Education',
              'Government'
            ].map((industry, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-lg text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="text-lg font-semibold text-gray-800">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Let's Build Something Great Together</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ready to transform your business with our expert consulting services?
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
