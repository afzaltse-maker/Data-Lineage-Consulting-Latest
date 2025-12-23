import React from 'react';
import { aboutData, whyUsPoints } from '../mock';
import { ArrowRight, Target, Eye, Award, Users } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-96 flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 40, 100, 0.8), rgba(0, 60, 120, 0.85)), url(https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center z-10">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl">Delivering Excellence in Consulting & Staffing</p>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">{aboutData.title}</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">{aboutData.description1}</p>
              <p className="text-gray-600 mb-6 leading-relaxed">{aboutData.description2}</p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                  <div className="text-gray-700">Years Experience</div>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">175+</div>
                  <div className="text-gray-700">Happy Clients</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={aboutData.image}
                alt="About Elenor"
                className="rounded-lg shadow-xl w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Mission & Vision</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We are committed to delivering exceptional value through innovative solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Target className="text-blue-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  We believe in strong relationship with customer by having customer is first philosophy. Our mission is
                  to help enterprises accelerate adoption of new technologies, untangle complex issues that always
                  emerge during digital evolution, and orchestrate ongoing innovation.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Eye className="text-blue-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  We intend to provide our customers with improved consulting, training, and staffing services. Whether
                  it is a consumer-oriented app or a transformative enterprise-class solution, the company leads the
                  process from ideation and concept to delivery.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Why Choose Elenor</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Delivering innovative solutions to tackle the biggest challenges
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyUsPoints.map((point) => (
              <Card key={point.number} className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-lg flex items-center justify-center text-2xl font-bold flex-shrink-0">
                      {point.number}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-gray-800">{point.title}</h3>
                      <p className="text-gray-600">{point.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Core Values</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and relationships
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-white" size={36} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, delivering quality results that exceed expectations.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-white" size={36} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Collaboration</h3>
              <p className="text-gray-600">
                We believe in the power of teamwork and building strong partnerships with our clients.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="text-blue-600 bg-white rounded-full p-2" size={36} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Integrity</h3>
              <p className="text-gray-600">
                We conduct our business with honesty, transparency, and ethical practices at all times.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
