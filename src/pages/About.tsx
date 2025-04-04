
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Link } from 'react-router-dom';
import { BookOpen, Users, MessageSquare, Shield, Lightbulb, Award } from 'lucide-react';

const missionPoints = [
  {
    title: "Knowledge Sharing",
    icon: BookOpen,
    description: "CampusSpark aims to democratize academic knowledge by providing a platform where students and educators can share their insights, research findings, and discoveries."
  },
  {
    title: "Community Building",
    icon: Users,
    description: "We seek to foster a vibrant academic community that transcends traditional departmental boundaries, encouraging cross-disciplinary collaboration and conversation."
  },
  {
    title: "Academic Discourse",
    icon: MessageSquare,
    description: "CampusSpark promotes thoughtful discourse and debate on academic topics, enabling respectful dialogue between diverse viewpoints."
  },
  {
    title: "Inclusive Platform",
    icon: Shield,
    description: "We are committed to creating an inclusive space where voices from all academic backgrounds and perspectives can be heard and valued."
  },
];

const teamMembers = [
  {
    name: "Dr. Sarah Chen",
    role: "Founder & CEO",
    avatar: "/placeholder.svg",
    bio: "Computer Science professor with a passion for academic communication. Founded CampusSpark to bridge the gap between academic disciplines."
  },
  {
    name: "Mark Johnson",
    role: "CTO",
    avatar: "/placeholder.svg",
    bio: "Engineering graduate with expertise in building educational technology platforms. Leads the technical development of CampusSpark."
  },
  {
    name: "Priya Patel",
    role: "Content Director",
    avatar: "/placeholder.svg",
    bio: "Humanities researcher focused on digital storytelling. Oversees content standards and editorial guidelines."
  },
  {
    name: "David Oluwasegum",
    role: "Community Manager",
    avatar: "/placeholder.svg",
    bio: "Communication specialist passionate about building inclusive academic spaces. Manages user engagement and community standards."
  },
];

const faqItems = [
  {
    question: "Who can post on CampusSpark?",
    answer: "CampusSpark is open to students, educators, and researchers affiliated with academic institutions. We verify institutional email addresses to maintain the academic integrity of our platform."
  },
  {
    question: "How is content moderated?",
    answer: "We use a combination of community reporting, AI tools, and human moderation to ensure content meets our community guidelines. Our focus is on maintaining academic integrity while encouraging diverse perspectives."
  },
  {
    question: "Can I share my research findings?",
    answer: "Yes! We encourage sharing research findings, while respecting publication rights. If your work is pending peer review or publication, please check your institution's policies before posting."
  },
  {
    question: "How can I become a featured contributor?",
    answer: "Featured contributors are selected based on the quality and engagement of their posts. Consistently publishing thoughtful, well-researched content increases your chances of being featured."
  },
  {
    question: "Are there any content restrictions?",
    answer: "We prohibit plagiarism, hate speech, misinformation, and content that violates academic ethics. All sources should be properly cited, and claims should be evidence-based."
  },
  {
    question: "Can I republish my CampusSpark posts elsewhere?",
    answer: "Yes, you retain ownership of your content. We simply ask that you mention that it was originally published on CampusSpark when republishing elsewhere."
  },
];

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-campus-light-blue py-16">
          <div className="campus-container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">About CampusSpark</h1>
              <p className="text-lg text-gray-700 mb-8">
                CampusSpark is a platform dedicated to fostering academic discourse and knowledge sharing in the university community.
                We believe in the power of collaboration and the exchange of ideas across disciplines.
              </p>
              <div className="flex justify-center gap-4">
                <Button asChild>
                  <Link to="/register">Join Our Community</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/featured">Explore Featured Content</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Tabs Section */}
        <section className="py-16">
          <div className="campus-container">
            <Tabs defaultValue="mission" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="mission">Our Mission</TabsTrigger>
                <TabsTrigger value="team">Our Team</TabsTrigger>
                <TabsTrigger value="faq">FAQ</TabsTrigger>
              </TabsList>
              
              {/* Mission Tab */}
              <TabsContent value="mission" className="mt-8">
                <div className="space-y-8">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                      CampusSpark exists to create connections between students and educators across disciplines, 
                      fostering a culture of knowledge sharing and collaborative learning.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {missionPoints.map((point, index) => (
                      <Card key={index} className="overflow-hidden border-none shadow-md">
                        <CardContent className="p-6 flex flex-col items-center text-center">
                          <div className="p-3 rounded-full bg-campus-light-blue mb-4">
                            <point.icon className="h-6 w-6 text-campus-primary" />
                          </div>
                          <h3 className="text-xl font-medium mb-2">{point.title}</h3>
                          <p className="text-gray-600">{point.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-8 mt-12">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      <div className="md:w-1/3 flex justify-center">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                          <Lightbulb className="h-20 w-20 text-campus-accent mx-auto mb-4" />
                          <h3 className="text-xl font-medium text-center">Our Vision</h3>
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <p className="text-lg text-gray-700 mb-4">
                          We envision a future where academic knowledge flows freely beyond traditional institutional boundaries,
                          where students and educators collaborate across disciplines, and where the best ideas rise to prominence
                          based on their merit rather than the status of their authors.
                        </p>
                        <p className="text-lg text-gray-700">
                          By creating an inclusive platform for academic discourse, we aim to accelerate innovation, deepen understanding,
                          and foster a more connected global academic community.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              {/* Team Tab */}
              <TabsContent value="team" className="mt-8">
                <div className="space-y-8">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                      The CampusSpark team brings together expertise in education, technology, and community building
                      to create a platform that serves the academic community.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {teamMembers.map((member, index) => (
                      <Card key={index} className="overflow-hidden">
                        <CardContent className="p-6">
                          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                            <Avatar className="w-20 h-20 border-2 border-white shadow-md">
                              <AvatarImage src={member.avatar} alt={member.name} />
                              <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="text-xl font-medium">{member.name}</h3>
                              <p className="text-campus-primary font-medium mb-2">{member.role}</p>
                              <p className="text-gray-600">{member.bio}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  <div className="bg-campus-primary/10 rounded-lg p-8 mt-12">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
                      <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
                        We're always looking for passionate individuals who share our vision
                        for transforming academic discourse. Check out our current openings
                        or reach out to discuss how you can contribute.
                      </p>
                      <Button variant="default">View Open Positions</Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              {/* FAQ Tab */}
              <TabsContent value="faq" className="mt-8">
                <div className="space-y-8">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                      Find answers to commonly asked questions about CampusSpark.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    {faqItems.map((item, index) => (
                      <Card key={index} className="overflow-hidden">
                        <CardContent className="p-6">
                          <h3 className="text-xl font-medium mb-2">{item.question}</h3>
                          <p className="text-gray-600">{item.answer}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-8 mt-12">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
                      <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
                        Couldn't find the answer you were looking for? Please reach out to our team,
                        and we'll get back to you as soon as possible.
                      </p>
                      <Button variant="default">Contact Support</Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16 bg-gray-50">
          <div className="campus-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What Our Community Says</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Hear from students and educators who have been part of the CampusSpark community.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src="/placeholder.svg" alt="Alex M." />
                      <AvatarFallback>AM</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Alex M.</p>
                      <p className="text-sm text-gray-500">Graduate Student, Physics</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">
                    "CampusSpark helped me connect with researchers outside my department who provided
                    valuable insights for my thesis. The interdisciplinary perspective has been invaluable."
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src="/placeholder.svg" alt="Dr. Taylor J." />
                      <AvatarFallback>TJ</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Dr. Taylor J.</p>
                      <p className="text-sm text-gray-500">Associate Professor, Literature</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">
                    "As an educator, I've found CampusSpark to be an excellent platform for extending
                    classroom discussions and encouraging students to engage with academic content in new ways."
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src="/placeholder.svg" alt="Jordan L." />
                      <AvatarFallback>JL</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Jordan L.</p>
                      <p className="text-sm text-gray-500">Undergraduate, Business</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">
                    "Publishing my first research project on CampusSpark gave me the confidence to
                    pursue more ambitious academic work. The feedback I received was constructive and encouraging."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-campus-dark-blue text-white">
          <div className="campus-container text-center">
            <Award className="h-16 w-16 mx-auto mb-6 text-campus-accent" />
            <h2 className="text-3xl font-bold mb-4">Join the Academic Conversation</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Become part of a growing community dedicated to sharing knowledge
              and fostering academic discourse across disciplines.
            </p>
            <div className="flex justify-center gap-4">
              <Button className="bg-white text-campus-dark-blue hover:bg-gray-100">
                Create Account
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
