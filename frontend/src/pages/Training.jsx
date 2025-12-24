import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { GraduationCap, Users, BookOpen, Award, TrendingUp, Target, Lightbulb, Zap } from 'lucide-react';

const Training = () => {
  const trainingPrograms = [
    {
      icon: GraduationCap,
      title: 'Technical Training',
      description: 'Comprehensive technical training programs covering latest technologies, programming languages, and industry tools.',
      features: ['Hands-on Learning', 'Industry Experts', 'Certification Programs']
    },
    {
      icon: Users,
      title: 'Leadership Development',
      description: 'Develop essential leadership skills to manage teams effectively and drive organizational success.',
      features: ['Team Management', 'Strategic Thinking', 'Communication Skills']
    },
    {
      icon: BookOpen,
      title: 'Professional Skills',
      description: 'Build crucial professional skills including communication, presentation, and project management.',
      features: ['Soft Skills', 'Time Management', 'Problem Solving']
    },
    {
      icon: Award,
      title: 'Certification Courses',
      description: 'Industry-recognized certification programs to enhance your career prospects and expertise.',
      features: ['Globally Recognized', 'Career Advancement', 'Expert Mentorship']
    },
    {
      icon: TrendingUp,
      title: 'Business Analytics',
      description: 'Master data analytics, business intelligence, and data-driven decision making.',
      features: ['Data Analysis', 'BI Tools', 'Reporting']
    },
    {
      icon: Lightbulb,
      title: 'Innovation & Strategy',
      description: 'Learn innovative approaches and strategic planning to transform your business.',
      features: ['Design Thinking', 'Strategic Planning', 'Change Management']
    }
  ];

  const trainingApproach = [
    {
      icon: Target,
      title: 'Customized Solutions',
      description: 'Training programs tailored to meet your specific organizational needs and goals.'
    },
    {
      icon: Users,
      title: 'Expert Instructors',
      description: 'Learn from industry veterans with real-world experience and proven track records.'
    },
    {
      icon: Zap,
      title: 'Practical Application',
      description: 'Hands-on training with real-world scenarios and practical implementation.'
    },
    {
      icon: Award,
      title: 'Certification',
      description: 'Earn recognized certifications upon successful completion of training programs.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-96 flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0, 150, 136, 0.75), rgba(0, 172, 193, 0.7)), url(https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center z-10">
          <h1 className="text-5xl font-bold mb-4">Learning Solutions and Training</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Empower your workforce with cutting-edge training programs and professional development
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Transform Your Workforce</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              At Data Lineage Consulting, we believe that continuous learning is the key to organizational success. Our comprehensive training programs are designed to enhance skills, boost productivity, and drive innovation across your organization.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We offer both onshore and offshore training solutions with flexible delivery models including instructor-led, virtual, and self-paced learning options.
            </p>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Training Programs</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Comprehensive training solutions covering technical, professional, and leadership development
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainingPrograms.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="text-white" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">{program.title}</h3>
                    <p className="text-gray-600 mb-6 text-center">{program.description}</p>
                    <ul className="space-y-2">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Training Approach */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Training Approach</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              A proven methodology that delivers measurable results and lasting impact
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainingApproach.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <IconComponent className="text-white" size={36} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Key Benefits</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              'Enhanced employee skills and productivity',
              'Reduced skill gaps in your organization',
              'Improved employee retention and satisfaction',
              'Better ROI on training investments',
              'Industry-recognized certifications',
              'Flexible training delivery options',
              'Ongoing support and mentorship',
              'Measurable learning outcomes'
            ].map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <p className="text-gray-700 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Delivery Models */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Training Delivery Models</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Choose the training format that best suits your organization's needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 border-t-4 border-teal-600">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="text-teal-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Instructor-Led</h3>
                <p className="text-gray-600 mb-4">
                  Traditional classroom training with expert instructors for hands-on, interactive learning experiences.
                </p>
                <ul className="text-left text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-teal-600 rounded-full mr-2"></span>
                    Face-to-face interaction
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-teal-600 rounded-full mr-2"></span>
                    Immediate feedback
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-teal-600 rounded-full mr-2"></span>
                    Group activities
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-t-4 border-orange-500">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="text-orange-500" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Virtual Training</h3>
                <p className="text-gray-600 mb-4">
                  Live online training sessions that bring the classroom experience to your location.
                </p>
                <ul className="text-left text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    Remote accessibility
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    Cost-effective
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    Interactive tools
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-t-4 border-teal-600">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="text-teal-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Self-Paced Learning</h3>
                <p className="text-gray-600 mb-4">
                  Flexible online courses that allow learners to progress at their own pace and schedule.
                </p>
                <ul className="text-left text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-teal-600 rounded-full mr-2"></span>
                    Learn anytime
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-teal-600 rounded-full mr-2"></span>
                    Flexible schedule
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-teal-600 rounded-full mr-2"></span>
                    Unlimited access
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-teal-600 via-cyan-600 to-teal-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Invest in Your Team's Growth?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss your training needs and create a customized learning solution for your organization
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all rounded-full">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Training;
