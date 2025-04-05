
// Import necessary types
import { Author, Category, Post, Comment } from "@/types/blog";

// Mock authors data
export const authors: Author[] = [
  {
    id: "author-1",
    name: "Daniel Lawrence",
    avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
    role: "educator",
    department: "Computer Science",
    bio: "Professor of Computer Science with 15 years of experience in software development and machine learning research."
  },
  {
    id: "author-2",
    name: "Samantha Chen",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    role: "student",
    department: "Business",
    bio: "MBA student focusing on entrepreneurship and digital marketing. Campus ambassador for several tech startups."
  },
  {
    id: "author-3",
    name: "Michael Johnson",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
    role: "student",
    department: "Engineering",
    bio: "Engineering student passionate about renewable energy solutions and sustainable technology."
  },
  {
    id: "author-4",
    name: "Lisa Rodriguez",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80",
    role: "educator",
    department: "Psychology",
    bio: "Associate Professor of Psychology specializing in student mental health and academic performance."
  },
  {
    id: "admin-1",
    name: "Admin User",
    avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    role: "admin",
    department: "Administration",
    bio: "Campus administrator responsible for content management."
  }
];

// Mock categories data
export const categories: Category[] = [
  {
    id: "category-1",
    name: "Technology",
    slug: "technology",
    description: "Latest advancements in technology and their impact on education and society."
  },
  {
    id: "category-2",
    name: "Campus Life",
    slug: "campus-life",
    description: "Insights and stories about life on campus, student activities, and university experiences."
  },
  {
    id: "category-3",
    name: "Research",
    slug: "research",
    description: "Highlighting recent research findings, projects, and academic breakthroughs."
  },
  {
    id: "category-4",
    name: "Career Advice",
    slug: "career-advice",
    description: "Guidance on career development, internships, and job opportunities for students."
  },
  {
    id: "category-5",
    name: "Academic Tips",
    slug: "academic-tips",
    description: "Study techniques, learning resources, and advice for academic success."
  }
];

// Mock comments
const comments: Comment[] = [
  {
    id: "comment1",
    author: authors[1],
    content: "This is a fascinating perspective! I especially appreciate the connection to recent research in the field.",
    publishedAt: "2023-09-15T14:30:00Z"
  },
  {
    id: "comment2",
    author: authors[3],
    content: "I've been studying this topic for my thesis, and your article provides some excellent points I hadn't considered before.",
    publishedAt: "2023-09-16T10:15:00Z",
    replies: [
      {
        id: "reply1",
        author: authors[0],
        content: "Thank you for your kind words! I'd be interested in hearing more about your thesis research.",
        publishedAt: "2023-09-16T11:20:00Z"
      }
    ]
  },
  {
    id: "comment3",
    author: authors[4],
    content: "While I agree with most points, I think there's an alternative perspective worth considering about the long-term implications.",
    publishedAt: "2023-09-17T09:45:00Z"
  }
];

// Mock posts data
export const posts: Post[] = [
  {
    id: "post-1",
    title: "The Future of AI in Education",
    slug: "future-of-ai-in-education",
    excerpt: "Exploring how artificial intelligence is transforming the educational landscape and what it means for students and educators.",
    content: `
      <p>Artificial intelligence is rapidly changing how we approach education. From personalized learning experiences to automated grading systems, AI technologies are making their way into classrooms around the world.</p>
      <h2>Personalized Learning Paths</h2>
      <p>One of the most promising applications of AI in education is the ability to create truly personalized learning experiences. By analyzing a student's performance, learning style, and pace, AI systems can adapt educational content to meet individual needs.</p>
      <p>These systems can identify knowledge gaps and suggest specific resources or exercises to address them. They can also recognize when a student is ready to advance to more challenging material, ensuring that learners are neither bored by content that's too easy nor frustrated by material that's too difficult.</p>
      <h2>Intelligent Tutoring Systems</h2>
      <p>AI-powered tutoring systems can provide immediate feedback and support to students, acting as virtual teaching assistants available 24/7. These systems can answer questions, explain concepts, and guide students through complex problem-solving processes.</p>
      <p>While they can't replace the human connection and intuition of a good teacher, these intelligent tutors can supplement classroom instruction and provide additional support outside of school hours.</p>
      <h2>Challenges and Ethical Considerations</h2>
      <p>Despite its potential benefits, the integration of AI in education also raises important questions and challenges:</p>
      <ul>
        <li>Data privacy and security concerns regarding student information</li>
        <li>The risk of algorithmic bias affecting educational opportunities</li>
        <li>Ensuring equitable access to AI-enhanced educational tools</li>
        <li>Balancing technological efficiency with human connection and social learning</li>
      </ul>
      <p>As we continue to develop and implement AI in educational settings, it's crucial that we address these considerations thoughtfully and proactively.</p>
      <h2>Preparing Students for an AI-Enhanced Future</h2>
      <p>Beyond using AI as a teaching tool, educators must also prepare students to live and work in a world increasingly shaped by artificial intelligence. This means developing curricula that emphasize:</p>
      <ul>
        <li>Critical thinking and problem-solving skills</li>
        <li>Digital literacy and understanding of AI capabilities and limitations</li>
        <li>Ethical reasoning about technology use and development</li>
        <li>Creativity and uniquely human skills that complement rather than compete with AI</li>
      </ul>
      <p>By thoughtfully integrating AI into education while preparing students to be informed citizens in an AI-enhanced world, we can harness the potential of these technologies to create more effective, accessible, and personalized learning experiences.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    author: authors[0],
    category: categories[0],
    tags: ["AI", "Education Technology", "Future of Learning"],
    publishedAt: "2023-04-15T08:00:00Z",
    updatedAt: "2023-04-16T10:30:00Z",
    featured: true,
    readTime: 8,
    likes: 135,
    views: 2450,
    comments: [],
    status: "published"
  }
];

// Ensure all posts have the status field
posts.forEach(post => {
  if (!post.status) {
    // Randomly assign a status for demonstration
    const statuses: Array<Post['status']> = ['draft', 'pending', 'published', 'rejected'];
    post.status = statuses[Math.floor(Math.random() * statuses.length)];
  }
});

// Add some pending posts for the admin to approve
posts.push(
  {
    id: "post-pending-1",
    title: "Should Attendance Be Mandatory in College?",
    slug: "should-attendance-be-mandatory",
    excerpt: "Examining the pros and cons of mandatory attendance policies in higher education and their impact on student success.",
    content: `
      <p>The debate over mandatory attendance policies in higher education continues to spark discussion among educators, administrators, and students alike. While some institutions strictly enforce attendance requirements, others leave it entirely up to the student's discretion. This article explores both sides of this ongoing discussion.</p>
      
      <h2>Arguments for Mandatory Attendance</h2>
      
      <p>Proponents of mandatory attendance policies point to several potential benefits:</p>
      
      <h3>Correlation with Academic Performance</h3>
      <p>Research has consistently shown a positive correlation between class attendance and academic performance. Students who regularly attend class typically earn higher grades than those with spotty attendance records. This correlation exists across disciplines and institution types.</p>
      
      <h3>Professional Skill Development</h3>
      <p>Regular attendance helps students develop professional skills that employers value, such as punctuality, responsibility, and commitment. By requiring attendance, institutions help prepare students for workplace expectations.</p>
      
      <h3>Classroom Dynamics</h3>
      <p>Many learning activities depend on student participation and interaction. Discussions, group projects, and peer learning opportunities are all enhanced when all students are present and engaged. Consistent absences can disrupt these dynamics.</p>
      
      <h2>Arguments Against Mandatory Attendance</h2>
      
      <p>Critics of mandatory attendance policies raise several compelling counterpoints:</p>
      
      <h3>Student Autonomy</h3>
      <p>College students are adults who should be given the responsibility to make their own decisions about their education. Mandatory attendance policies can feel infantilizing and contradict the goal of developing self-directed learners.</p>
      
      <h3>Diverse Learning Needs</h3>
      <p>Not all students learn best in a traditional classroom setting. Some may benefit more from independent study, online resources, or alternative learning approaches. Rigid attendance policies can disadvantage these learners.</p>
      
      <h3>External Responsibilities</h3>
      <p>Many students, particularly non-traditional ones, juggle significant responsibilities outside of their studies, including work and family obligations. Strict attendance policies can create undue hardship for these students.</p>
      
      <h2>Alternative Approaches</h2>
      
      <p>Some educators and institutions have explored middle-ground approaches:</p>
      
      <ul>
        <li><strong>Participation-focused policies:</strong> Rather than simply marking presence, evaluate meaningful engagement in class activities.</li>
        <li><strong>Flexible attendance:</strong> Allow a certain number of absences without penalty to accommodate illness or emergencies.</li>
        <li><strong>Multiple participation pathways:</strong> Offer alternative ways to engage with course material for those who cannot always attend in person.</li>
        <li><strong>Course-specific policies:</strong> Tailor attendance expectations to the nature of each course rather than applying a one-size-fits-all approach.</li>
      </ul>
      
      <h2>Conclusion</h2>
      
      <p>The question of mandatory attendance doesn't have a simple answer. What works best may depend on institutional context, student population, course content, and teaching approach. What's clear is that thoughtful consideration of attendance policies should focus on their ultimate goal: supporting effective learning and student success.</p>
      
      <p>Perhaps the most productive approach is to clearly communicate expectations, provide reasonable accommodations for legitimate absences, and design courses where attendance offers clear value to students—making them want to attend rather than feel forced to do so.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    author: authors[2],
    category: categories[1],
    tags: ["Education Policy", "Student Success", "Higher Education"],
    publishedAt: "2023-09-12T14:30:00Z",
    updatedAt: "2023-09-12T14:30:00Z",
    featured: false,
    readTime: 7,
    likes: 89,
    views: 1120,
    comments: [],
    status: "pending"
  },
  {
    id: "post-pending-2",
    title: "The Role of Internships in Career Development",
    slug: "role-of-internships-career-development",
    excerpt: "How internships bridge the gap between academic learning and professional practice, and why they're increasingly essential for today's students.",
    content: `
      <p>For today's college students, internships have evolved from a nice-to-have experience to a critical component of career preparation. This shift reflects changes in the job market, employer expectations, and the growing importance of practical skills alongside academic knowledge.</p>
      
      <h2>Bridging Theory and Practice</h2>
      
      <p>While classroom learning provides essential theoretical foundations, internships allow students to apply these concepts in real-world settings. This application helps solidify understanding and reveals how academic principles may need to be adapted in professional contexts.</p>
      
      <p>Internships also expose students to the tacit knowledge and professional norms that rarely appear in textbooks but are crucial for workplace success. From understanding office politics to learning industry-specific software, these practical insights complement formal education.</p>
      
      <h2>Building the Resume Before Graduation</h2>
      
      <p>The classic catch-22 of needing experience to get experience creates significant challenges for new graduates. Internships help solve this dilemma by providing relevant professional experience before students complete their degrees.</p>
      
      <p>Beyond simply having something to list on a resume, internships demonstrate initiative, professional interest, and the ability to function in a workplace environment. For employers reviewing stacks of similar academic credentials, this experience can be a significant differentiator.</p>
      
      <h2>Testing Career Paths</h2>
      
      <p>Perhaps one of the most valuable aspects of internships is the opportunity they provide for career exploration. Students can test-drive potential career paths with relatively low commitment, gaining insights that help them make more informed decisions about their professional futures.</p>
      
      <p>Many students discover that the reality of a particular role or industry differs from their expectations. This revelation can either confirm their career choice or prompt a timely recalibration before graduation.</p>
      
      <h2>Building Professional Networks</h2>
      
      <p>The connections made during internships can be invaluable for future job searches. Supervisors, colleagues, and even fellow interns become part of a student's professional network, potentially leading to job referrals, recommendations, and industry insights.</p>
      
      <p>These relationships also provide students with mentors who can offer guidance as they navigate early career decisions and challenges. Such mentorship often extends beyond the internship period and can be instrumental in professional development.</p>
      
      <h2>Challenges and Equity Concerns</h2>
      
      <p>Despite their benefits, internships also present challenges, particularly regarding access and equity. Unpaid internships, while common in some industries, can exclude students who cannot afford to work without compensation. Geographic concentration of opportunities in major cities can similarly limit access for students with financial constraints or familial obligations.</p>
      
      <p>Universities and employers have a responsibility to address these barriers through initiatives such as:</p>
      
      <ul>
        <li>Paid internship programs</li>
        <li>Remote or hybrid internship opportunities</li>
        <li>Internship stipends and scholarships</li>
        <li>Regional partnerships to create opportunities beyond major metros</li>
        <li>Course credit options that recognize the educational value of internships</li>
      </ul>
      
      <h2>Maximizing the Internship Experience</h2>
      
      <p>For students preparing for internships, several strategies can help maximize the experience:</p>
      
      <ul>
        <li><strong>Set clear learning objectives</strong> for what you hope to gain</li>
        <li><strong>Seek meaningful projects</strong> rather than just routine tasks</li>
        <li><strong>Request regular feedback</strong> from supervisors</li>
        <li><strong>Document accomplishments and learnings</strong> throughout the experience</li>
        <li><strong>Connect with professionals</strong> across the organization, not just immediate colleagues</li>
        <li><strong>Reflect critically</strong> on how the experience informs your career goals</li>
      </ul>
      
      <h2>Conclusion</h2>
      
      <p>As the line between education and professional preparation continues to blur, internships serve as crucial bridges between these worlds. By providing practical experience, professional connections, and career insights, they help students transition more successfully from academia to the workplace.</p>
      
      <p>Both educational institutions and employers have important roles to play in ensuring these opportunities are meaningful, accessible, and aligned with students' educational goals. When structured thoughtfully, internships benefit not only students but also the organizations that host them and ultimately, the industries they serve.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    author: authors[1],
    category: categories[3],
    tags: ["Internships", "Career Development", "Professional Skills"],
    publishedAt: "2023-08-28T09:15:00Z",
    updatedAt: "2023-08-29T11:45:00Z",
    featured: false,
    readTime: 9,
    likes: 112,
    views: 1876,
    comments: [],
    status: "pending"
  }
);

// Helper functions for the admin page

// Get all posts
export const getAllPosts = async (): Promise<Post[]> => {
  // In a real app, this would be an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...posts]);
    }, 500);
  });
};

// Update post status
export const updatePostStatus = async (postId: string, status: Post['status']): Promise<Post> => {
  // In a real app, this would be an API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const postIndex = posts.findIndex(post => post.id === postId);
      
      if (postIndex === -1) {
        reject(new Error('Post not found'));
        return;
      }
      
      posts[postIndex] = {
        ...posts[postIndex],
        status
      };
      
      resolve(posts[postIndex]);
    }, 500);
  });
};

// Function to get posts by category
export const getPostsByCategory = (categorySlug: string, count: number = 100): Post[] => {
  return posts
    .filter(post => post.category.slug === categorySlug && post.status === 'published')
    .slice(0, count);
};

// Function to get featured posts
export const getFeaturedPosts = (count: number = 5): Post[] => {
  return posts
    .filter(post => post.featured && post.status === 'published')
    .slice(0, count);
};

// Function to get recent posts
export const getRecentPosts = (count: number = 6): Post[] => {
  return [...posts]
    .filter(post => post.status === 'published')
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, count);
};

// Function to get popular posts
export const getPopularPosts = (count: number = 6): Post[] => {
  return [...posts]
    .filter(post => post.status === 'published')
    .sort((a, b) => b.views - a.views)
    .slice(0, count);
};

// Add getUserById function
export const getUserById = (userId: string): Author | undefined => {
  return authors.find(author => author.id === userId);
};

// Get post by slug
export const getPostBySlug = (slug: string): Post | undefined => {
  return posts.find(post => post.slug === slug && post.status === 'published');
};

// Get related posts based on category and tags
export const getRelatedPosts = (currentPost: Post, count: number = 3): Post[] => {
  return posts
    .filter(post => 
      post.id !== currentPost.id && 
      post.status === 'published' &&
      (post.category.id === currentPost.category.id || 
       post.tags.some(tag => currentPost.tags.includes(tag)))
    )
    .sort(() => 0.5 - Math.random()) // Simple shuffle
    .slice(0, count);
};

// Function to create new post
export const createPost = async (postData: Omit<Post, 'id' | 'publishedAt' | 'comments' | 'likes' | 'views' | 'status'>): Promise<Post> => {
  // In a real app, this would be an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      const newPost: Post = {
        ...postData,
        id: `post-${Date.now()}`,
        publishedAt: new Date().toISOString(),
        likes: 0,
        views: 0,
        comments: [],
        status: 'pending' // New posts are pending by default
      };
      
      posts.push(newPost);
      resolve(newPost);
    }, 1000);
  });
};
