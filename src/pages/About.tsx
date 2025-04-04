
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { BookOpen, Users, Award, MessageSquare, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero section */}
        <section className="bg-campus-dark-blue text-white py-20">
          <div className="campus-container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                About CampusSpark
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                A platform dedicated to academic expression, knowledge sharing, and community building among students and educators.
              </p>
            </div>
          </div>
        </section>
        
        {/* Mission section */}
        <section className="py-16">
          <div className="campus-container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
              <p className="text-lg leading-relaxed mb-6">
                CampusSpark aims to create a vibrant digital space where students and educators can share their academic journeys, research findings, creative projects, and insights. We believe that knowledge grows when shared, and that diverse perspectives enrich the academic experience.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Our platform is designed to foster meaningful connections across disciplines, encouraging interdisciplinary collaboration and the exchange of ideas that might not occur within traditional academic structures.
              </p>
              <p className="text-lg leading-relaxed">
                By providing a dedicated space for academic blogging, we hope to amplify student and faculty voices, showcase the incredible work happening on campuses, and create a lasting digital record of academic discourse and discovery.
              </p>
            </div>
          </div>
        </section>
        
        {/* Features section */}
        <section className="py-16 bg-gray-50">
          <div className="campus-container">
            <h2 className="text-3xl font-bold mb-12 text-center">Platform Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <BookOpen className="w-12 h-12 text-campus-primary mb-6" />
                <h3 className="text-xl font-bold mb-3">Academic Focus</h3>
                <p className="text-gray-600">
                  Designed specifically for academic content, with categories that reflect diverse disciplines and scholarly interests.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <Users className="w-12 h-12 text-campus-primary mb-6" />
                <h3 className="text-xl font-bold mb-3">Community Building</h3>
                <p className="text-gray-600">
                  Tools for commenting, sharing, and collaborating that foster meaningful academic discussions and connections.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <Award className="w-12 h-12 text-campus-primary mb-6" />
                <h3 className="text-xl font-bold mb-3">Quality Content</h3>
                <p className="text-gray-600">
                  Features that encourage well-researched, thoughtful content and highlight exemplary contributions.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <MessageSquare className="w-12 h-12 text-campus-primary mb-6" />
                <h3 className="text-xl font-bold mb-3">Meaningful Engagement</h3>
                <p className="text-gray-600">
                  Discussion tools designed for substantive academic discourse rather than superficial interaction.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Research context */}
        <section className="py-16">
          <div className="campus-container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Research Context</h2>
              <p className="text-lg leading-relaxed mb-6">
                CampusSpark was developed as part of a research initiative exploring how dedicated blogging platforms can enhance student engagement, motivation, and academic performance while fostering a sense of online community among campus students.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                The platform design is informed by extensive surveys and focus group discussions with students and educators, ensuring that it meets the actual needs of the academic community rather than presumed requirements.
              </p>
              <p className="text-lg leading-relaxed">
                As the platform evolves, we continue to gather data on user engagement, content quality, and community development, all with appropriate privacy protections and ethical considerations at the forefront.
              </p>
            </div>
          </div>
        </section>
        
        {/* Join us CTA */}
        <section className="py-16 bg-campus-primary text-white">
          <div className="campus-container text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Academic Community</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Whether you're a student eager to share your research, a professor looking to engage beyond the classroom, or simply curious about academic discourse, we welcome you to CampusSpark.
            </p>
            <div className="flex justify-center space-x-4">
              <Link 
                to="/register" 
                className="px-8 py-3 bg-white text-campus-primary font-medium rounded-md hover:bg-gray-100 transition-colors flex items-center"
              >
                Create Account <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link 
                to="/" 
                className="px-8 py-3 border border-white text-white rounded-md hover:bg-white/10 transition-colors"
              >
                Explore Content
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
