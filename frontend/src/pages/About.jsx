import React from 'react';
import { aboutData, whyUsPoints } from '../mock';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Award, Users, DollarSign, Briefcase } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';

const About = () => {
  const industries = [
    'Information Technology',
    'Financial Services',
    'Aerospace & Defence',
    'Retail',
    'Telecom',
    'Public Sector',
    'Manufacturing',
    'Pharmaceutical / Life Sciences'
  ];

  const technologySolutions = [
    'Application Development',
    'ERP Applications',
    'Mobile Applications Development',
    'Infrastructure Solutions',
    'Cyber Security Solutions',
    'Microsoft Technologies',
    'Learning Solutions and Training',
    'Recruitment',
    'Branding and Social Selling'
  ];

  const workforceSolutions = [
    'Recruitment Process Outsourcing',
    'Payroll Solutions',
    'Contractual Placements',
    'Umbrella services',
    'Pre employment Assessment'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-96 flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0, 150, 136, 0.75), rgba(0, 172, 193, 0.7)), url(https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center z-10">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-3xl mx-auto">Empower your business with a productive workforce.</p>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">About Data Lineage Consulting</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Data Lineage Consulting was founded in 2022. Started with small deals and engagements, today we can proudly say that we are successful to keep our clients satisfied and the trust we have built has leverages both clients and partners to treat us as a trusted partner.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We are a global organization offering talent solutions to 10+ customers including across Financial Services, Healthcare, Life Sciences, Aerospace, Energy, Retail, Telecom, Technology, Manufacturing, and Engineering. Headquartered in United Kingdom and have our Offshore location in India. We are also partners with some of the leading organisations whom we keep supporting and work together on global opportunities.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Working as your talent partner, our team of experts and specialized individuals act as your own team members whom you can trust and work together for enhanced operational efficiency and increased productivity within the committed timelines.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-gradient-to-br from-teal-50 to-orange-50 p-6 rounded-lg hover:shadow-lg transition-all">
                  <div className="text-3xl font-bold text-orange-500 mb-2">2003</div>
                  <div className="text-gray-700">Founded</div>
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-orange-50 p-6 rounded-lg hover:shadow-lg transition-all">
                  <div className="text-3xl font-bold text-orange-500 mb-2">20+</div>
                  <div className="text-gray-700">Happy Clients</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={aboutData.image}
                alt="About Data Lineage Consulting"
                className="rounded-lg shadow-xl w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Focus Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 border-t-4 border-teal-600">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-lg flex items-center justify-center mb-6">
                  <Target className="text-teal-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Focus</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our focus is to be a support partner, with the mission of helping clients to succeed in the staffing and contingency placement arena, with the highest level of integrity. We build solid foundations by developing strong relationships and are committed to becoming an effective and dedicated staffing services partner.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-t-4 border-orange-500">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-lg flex items-center justify-center mb-6">
                  <Briefcase className="text-orange-500" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">On-demand Talent</h3>
                <p className="text-gray-600 leading-relaxed">
                  We help our clients to achieve objectives with our wide-ranging, yet specialized spectrum of services across verticals and functions. Engage right talent and hire through different models like contract, direct hire or through a statement of work.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-t-4 border-teal-600">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-lg flex items-center justify-center mb-6">
                  <DollarSign className="text-teal-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Save with us</h3>
                <p className="text-gray-600 leading-relaxed">
                  A perfect combination of onshore/offshore capabilities with latest technology tools and specific industry expertise we deliver best in class quality within predefined timelines. Our clients can save upto 30% of the recruitment cost.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Mission</h2>
            <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
              We want to build trust and work as a trusted partner with focus on collaboration and team spirit to create a client focused expertise so that we may endeavour to deliver as per expectations of our stakeholders and investors and clients.
            </p>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Industries we Serve</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-orange-500"
              >
                <h3 className="text-lg font-semibold text-gray-800">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Solutions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Technology Solutions and Consulting</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {technologySolutions.map((solution, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-teal-50 p-6 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full flex-shrink-0"></div>
                  <h3 className="text-lg font-semibold text-gray-800">{solution}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workforce Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Workforce Solutions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workforceSolutions.map((solution, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">{solution}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">+</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">and more...</h3>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Statement */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              We provide operational support through out the globe until the goal is reached, and beyond, if required. Our recommendations bring useful, tangible results and can be implemented immediately with or without our assistance.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all rounded-full">
                Contact Us <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Why Choose Data Lineage Consulting</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Delivering innovative solutions to tackle the biggest challenges
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyUsPoints.map((point) => (
              <Card key={point.number} className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-orange-500 text-white rounded-lg flex items-center justify-center text-2xl font-bold flex-shrink-0 shadow-lg">
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
    </div>
  );
};

export default About;
