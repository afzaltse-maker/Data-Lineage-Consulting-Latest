import React from 'react';
import { staffingServices } from '../mock';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, Clock, TrendingUp, Target, Shield } from 'lucide-react';

const Staffing = () => {
  const benefits = [
    {
      icon: Users,
      title: 'Access to Top Talent',
      description: 'Connect with pre-screened, qualified candidates from our extensive network'
    },
    {
      icon: Clock,
      title: 'Time Efficiency',
      description: 'Reduce time-to-hire with our streamlined recruitment process'
    },
    {
      icon: TrendingUp,
      title: 'Scalability',
      description: 'Easily scale your workforce up or down based on business needs'
    },
    {
      icon: Target,
      title: 'Cost Effective',
      description: 'Minimize recruitment costs while maximizing quality hires'
    },
    {
      icon: Shield,
      title: 'Risk Mitigation',
      description: 'Reduce hiring risks with our thorough vetting and compliance processes'
    },
    {
      icon: CheckCircle,
      title: 'Flexible Solutions',
      description: 'Tailored staffing solutions that adapt to your unique requirements'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-96 flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(147, 51, 234, 0.8), rgba(236, 72, 153, 0.8)), url(https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center z-10">
          <h1 className="text-5xl font-bold mb-4">Staffing Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Expert recruitment solutions connecting you with the right talent at the right time
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Comprehensive Staffing Solutions</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Staffing in all industries is a very crucial aspect. Since industries require highly skilled and niche
              specific talents, it often requires an expert to meet the recruitment demands. We provide comprehensive
              staffing solutions tailored to your organization's unique needs.
            </p>
          </div>
        </div>
      </section>

      {/* Staffing Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Staffing Service Offerings</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We offer flexible staffing solutions to meet your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {staffingServices.map((service) => (
              <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 right-4 text-2xl font-bold text-white">
                    {service.title}
                  </h3>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Why Choose Our Staffing Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Experience the advantages of partnering with a trusted staffing expert
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="text-purple-600" size={28} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Staffing Process</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              A streamlined approach to finding the perfect candidates
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Understand Requirements', desc: 'We analyze your specific needs and requirements' },
              { step: '02', title: 'Source Candidates', desc: 'Leverage our network to find qualified candidates' },
              { step: '03', title: 'Screen & Interview', desc: 'Thorough vetting and skills assessment process' },
              { step: '04', title: 'Placement & Support', desc: 'Seamless onboarding and ongoing support' }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-blue-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Find Your Perfect Candidates?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss your staffing needs and how we can help you build a winning team
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Staffing;
