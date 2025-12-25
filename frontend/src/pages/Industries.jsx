import React from 'react';
import { industries } from '../mock';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { Building2, HeartPulse, Shield, ArrowRight } from 'lucide-react';

const Industries = () => {
  const iconMap = {
    banking: Building2,
    healthcare: HeartPulse,
    insurance: Shield
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-96 flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0, 150, 136, 0.75), rgba(0, 172, 193, 0.7)), url(https://images.pexels.com/photos/3184438/pexels-photo-3184438.jpeg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center z-10">
          <h1 className="text-5xl font-bold mb-4">Industries We Serve</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Specialized expertise across key industries driving innovation and growth
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Industry-Specific Solutions</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              With a strong heritage of innovation and entrepreneurship in technology services, we provide tailored
              solutions for diverse industries. Whether you're in the early, middle, or late stages of your career, we
              help you stay current with technology and industry trends.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Detail */}
      {industries.map((industry, index) => {
        const IconComponent = iconMap[industry.id];
        return (
          <section
            key={industry.id}
            className={`py-20 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
          >
            <div className="container mx-auto px-4">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 0 ? '' : 'lg:flex-row-reverse'
              }`}>
                {index % 2 === 0 ? (
                  <>
                    <div>
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center mr-4">
                          <IconComponent className="text-teal-600" size={28} />
                        </div>
                        <span className="text-orange-500 font-semibold text-lg">{industry.name}</span>
                      </div>
                      <h3 className="text-3xl font-bold mb-6 text-gray-800">{industry.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{industry.description1}</p>
                      <p className="text-gray-600 mb-6 leading-relaxed">{industry.description2}</p>
                      <Link to="/contact">
                        <Button className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-xl transition-all rounded-full px-6">
                          Learn More <ArrowRight className="ml-2" size={18} />
                        </Button>
                      </Link>
                    </div>
                    <div>
                      <img
                        src={industry.image}
                        alt={industry.name}
                        className="rounded-lg shadow-xl w-full h-96 object-cover"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <img
                        src={industry.image}
                        alt={industry.name}
                        className="rounded-lg shadow-xl w-full h-96 object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center mr-4">
                          <IconComponent className="text-teal-600" size={28} />
                        </div>
                        <span className="text-orange-500 font-semibold text-lg">{industry.name}</span>
                      </div>
                      <h3 className="text-3xl font-bold mb-6 text-gray-800">{industry.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{industry.description1}</p>
                      <p className="text-gray-600 mb-6 leading-relaxed">{industry.description2}</p>
                      <Link to="/contact">
                        <Button className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-xl transition-all rounded-full px-6">
                          Learn More <ArrowRight className="ml-2" size={18} />
                        </Button>
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </div>
          </section>
        );
      })}

      {/* Industry Expertise */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Industry Expertise</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Deep knowledge and proven results across multiple sectors
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Regulatory Compliance',
                description: 'Navigate complex regulations with confidence across all industries'
              },
              {
                title: 'Digital Innovation',
                description: 'Implement cutting-edge technologies tailored to your sector'
              },
              {
                title: 'Risk Management',
                description: 'Identify and mitigate industry-specific risks effectively'
              },
              {
                title: 'Process Optimization',
                description: 'Streamline operations with industry best practices'
              },
              {
                title: 'Talent Acquisition',
                description: 'Connect with specialized professionals in your field'
              },
              {
                title: 'Market Intelligence',
                description: 'Stay ahead with industry insights and competitive analysis'
              }
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-orange-500 text-white rounded-lg flex items-center justify-center text-xl font-bold mb-4">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Industry Success Metrics</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Measurable results that demonstrate our industry expertise
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { value: '100+', label: 'Industry Projects' },
              { value: '98%', label: 'Client Satisfaction' },
              { value: '50+', label: 'Industry Experts' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-orange-500 mb-2">{stat.value}</div>
                <div className="text-gray-600 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Industry?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our industry expertise can drive your success
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg">
              Get In Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Industries;
