
import { Post, Author, Category } from "@/types/blog";

export const categories: Category[] = [
  {
    id: "cat-1",
    name: "Arts & Design",
    slug: "arts",
    description: "Creative expression and aesthetic studies"
  },
  {
    id: "cat-2",
    name: "Science",
    slug: "science",
    description: "Research, experiments, and discoveries"
  },
  {
    id: "cat-3",
    name: "Humanities",
    slug: "humanities",
    description: "History, philosophy, and literature"
  },
  {
    id: "cat-4",
    name: "Technology",
    slug: "technology",
    description: "Computing, engineering, and innovation"
  },
  {
    id: "cat-5",
    name: "Business",
    slug: "business",
    description: "Economics, management, and entrepreneurship"
  }
];

export const authors: Author[] = [
  {
    id: "auth-1",
    name: "Dr. Emma Roberts",
    avatar: "/placeholder.svg",
    role: "educator",
    department: "Computer Science",
    bio: "Professor of Computer Science with a focus on AI ethics and machine learning."
  },
  {
    id: "auth-2",
    name: "Carlos Johnson",
    avatar: "/placeholder.svg",
    role: "student",
    department: "Visual Arts",
    bio: "Senior student researching contemporary digital art movements."
  },
  {
    id: "auth-3",
    name: "Prof. Amara Khan",
    avatar: "/placeholder.svg",
    role: "educator",
    department: "Business",
    bio: "Specializing in entrepreneurship and sustainable business practices."
  },
  {
    id: "auth-4",
    name: "Jason Park",
    avatar: "/placeholder.svg",
    role: "student",
    department: "Physics",
    bio: "Graduate student studying quantum computing applications."
  }
];

export const posts: Post[] = [
  {
    id: "post-1",
    title: "The Future of AI in Education: Transforming Learning Experiences",
    slug: "future-ai-education",
    excerpt: "Exploring how artificial intelligence is reshaping educational methodologies and student experiences on campus.",
    content: `
# The Future of AI in Education: Transforming Learning Experiences

Artificial intelligence is rapidly transforming how we approach education on campus. From personalized learning paths to automated grading systems, AI technologies are creating new possibilities for both students and educators.

## Personalized Learning Journeys

One of the most promising applications of AI in education is the ability to create truly personalized learning experiences. By analyzing student performance data, AI systems can identify strengths, weaknesses, and learning preferences to tailor content delivery.

Key benefits include:

- Adaptive learning paths based on individual progress
- Content recommendations that match learning styles
- Early identification of areas where students may need additional support
- Customized pace that allows students to master concepts before moving forward

## Automating Administrative Tasks

AI is also relieving educators of many time-consuming administrative tasks, allowing them to focus more on teaching and mentoring students:

- Automated grading for objective assessments
- Plagiarism detection with higher accuracy
- Scheduling optimization for classes and resources
- Student inquiry management through chatbots

## Ethical Considerations

As we implement these technologies, we must carefully consider several ethical dimensions:

1. Data privacy and security for student information
2. Algorithmic bias in assessment and recommendations
3. Digital equity and access
4. Maintaining the human element in education

## Looking Forward

The integration of AI in education isn't about replacing teachers but augmenting their capabilities. The most successful implementations will be those that combine technological innovation with pedagogical expertise.

As we move forward, continuous dialogue between technologists, educators, and students will be essential to ensure that AI serves our educational goals rather than reshaping them in potentially problematic ways.
    `,
    coverImage: "/placeholder.svg",
    author: authors[0],
    category: categories[3],
    tags: ["artificial intelligence", "edtech", "future of education", "adaptive learning"],
    publishedAt: "2023-03-15T14:30:00Z",
    featured: true,
    readTime: 8,
    likes: 142,
    comments: [
      {
        id: "comment-1",
        author: authors[1],
        content: "This was incredibly insightful. I'd be interested to know more about how AI might help students with different learning styles.",
        publishedAt: "2023-03-15T16:42:00Z"
      }
    ]
  },
  {
    id: "post-2",
    title: "Sustainable Architecture: Designing Campus Buildings for the Future",
    slug: "sustainable-architecture-campus",
    excerpt: "How sustainable design principles are being implemented in modern campus architecture to reduce environmental impact.",
    content: `
# Sustainable Architecture: Designing Campus Buildings for the Future

Campus buildings represent a significant opportunity to implement sustainable design principles at scale. With their long lifespans and intensive use patterns, university facilities can demonstrate leadership in environmental stewardship.

## Innovative Materials and Methods

Modern sustainable campus architecture incorporates:

- Low-impact building materials with reduced carbon footprints
- Passive design strategies that minimize energy requirements
- Living walls and green roofs that improve air quality and reduce heat island effects
- Water management systems that capture and reuse rainwater

## Case Studies from Leading Institutions

Several universities have pioneered sustainable building practices:

### Stanford University's Y2E2 Building
The Yang and Yamazaki Environment and Energy Building uses 56% less energy and 90% less potable water than comparable buildings of its size.

### University of British Columbia's Centre for Interactive Research on Sustainability
This building actually contributes positively to the environment rather than simply reducing harm.

## Student Engagement and Learning Opportunities

Sustainable campus buildings offer unique educational opportunities:

- Real-time building performance dashboards
- Research opportunities for engineering and environmental studies
- Living laboratories for sustainable technologies
- Inspiring spaces that reflect institutional values

## Economic Benefits

While initial costs may be higher, sustainable buildings typically deliver:

- Reduced operational costs over the building lifecycle
- Improved occupant health and productivity
- Enhanced institutional reputation
- Potential for grants and sustainability-focused funding

The most successful campus projects approach sustainability holistically, considering environmental impact alongside human experience, educational value, and long-term economic factors.
    `,
    coverImage: "/placeholder.svg",
    author: authors[2],
    category: categories[0],
    tags: ["sustainable design", "campus architecture", "green building", "LEED certification"],
    publishedAt: "2023-04-02T09:15:00Z",
    readTime: 6,
    likes: 87,
    comments: []
  },
  {
    id: "post-3",
    title: "Student-Led Research: Breaking New Ground in Quantum Computing",
    slug: "student-research-quantum-computing",
    excerpt: "How undergraduate researchers are contributing to breakthroughs in quantum computing applications.",
    content: `
# Student-Led Research: Breaking New Ground in Quantum Computing

Undergraduate and graduate students are increasingly at the forefront of quantum computing research, challenging the notion that groundbreaking work requires decades of experience.

## From Theory to Implementation

Student researchers are:

- Developing new quantum algorithms for specific applications
- Creating more accessible interfaces for quantum systems
- Identifying novel use cases across disciplines
- Contributing to open-source quantum computing tools

## Cross-Disciplinary Collaboration

Some of the most exciting work happens at the intersection of fields:

- Quantum approaches to computational biology problems
- Applications in financial modeling and optimization
- Machine learning enhanced by quantum processing
- Quantum solutions for complex chemical simulations

## Resources for Aspiring Researchers

Students interested in quantum computing can take advantage of:

- Cloud-based quantum computing platforms from major tech companies
- University quantum computing clubs and interest groups
- Open-source learning resources and tutorials
- Undergraduate research opportunities and REUs

## Challenges and Future Directions

Despite remarkable progress, student researchers face significant challenges:

1. The steep learning curve combining quantum physics and computer science
2. Limited access to physical quantum hardware
3. The rapidly evolving landscape of tools and approaches
4. Bridging theoretical understanding with practical applications

With continued support from faculty mentors and industry partners, student researchers will likely continue to make significant contributions to this revolutionary field.
    `,
    coverImage: "/placeholder.svg",
    author: authors[3],
    category: categories[1],
    tags: ["quantum computing", "student research", "emerging technology", "physics"],
    publishedAt: "2023-05-18T11:45:00Z",
    readTime: 7,
    likes: 124,
    comments: [
      {
        id: "comment-2",
        author: authors[0],
        content: "I've been following this research closely. The interdisciplinary applications are particularly promising.",
        publishedAt: "2023-05-18T14:22:00Z"
      },
      {
        id: "comment-3",
        author: authors[1],
        content: "As someone outside the field, I found this very accessible. Would love to see more on how students can get involved.",
        publishedAt: "2023-05-19T09:05:00Z"
      }
    ]
  },
  {
    id: "post-4",
    title: "The Renaissance of Student Journalism in the Digital Age",
    slug: "student-journalism-digital-age",
    excerpt: "How campus publications are adapting to digital platforms and reinventing student journalism for modern audiences.",
    content: `
# The Renaissance of Student Journalism in the Digital Age

Campus publications have undergone a dramatic transformation in recent years, embracing digital platforms and multimedia storytelling approaches while maintaining their essential role in campus discourse.

## Beyond the Printed Page

Today's student publications are:

- Creating immersive multimedia packages that combine text, video, and interactive elements
- Developing strong social media presences to reach students where they are
- Experimenting with new formats like podcasts and newsletters
- Building digital-first workflows that prioritize timeliness and accessibility

## Maintaining Journalistic Standards

Despite platform changes, core journalistic principles remain crucial:

- Fact-checking and verification processes
- Editorial independence from institutional influence
- Ethical reporting practices and source protection
- Commitment to diverse perspectives and voices

## Case Studies in Innovation

Several campus publications stand out for their digital innovation:

### The Daily Californian (UC Berkeley)
Pioneered a successful digital subscription model while maintaining open access to essential campus news.

### The Crimson (Harvard)
Developed sophisticated data journalism projects examining campus life and institutional policies.

## Challenges and Opportunities

Student journalists face unique challenges in the digital landscape:

1. Sustainable funding models in a post-print environment
2. Building technical skills alongside journalistic fundamentals
3. Balancing academic responsibilities with breaking news demands
4. Navigating complex ethical questions in the digital sphere

With proper institutional support and mentorship, student publications can continue their essential role as training grounds for future journalists and vital forums for campus discourse.
    `,
    coverImage: "/placeholder.svg",
    author: authors[1],
    category: categories[2],
    tags: ["journalism", "digital media", "campus news", "student publications"],
    publishedAt: "2023-06-07T10:30:00Z",
    readTime: 5,
    likes: 93,
    comments: []
  },
  {
    id: "post-5",
    title: "Entrepreneurship Programs: Bridging Academic Theory and Business Practice",
    slug: "entrepreneurship-programs-theory-practice",
    excerpt: "Evaluating the effectiveness of campus entrepreneurship programs in preparing students for real-world business challenges.",
    content: `
# Entrepreneurship Programs: Bridging Academic Theory and Business Practice

Campus entrepreneurship programs have proliferated in recent years, aiming to transform academic knowledge into practical business skills. How effective are these programs at preparing students for the challenges of starting and growing ventures?

## Program Models and Approaches

Universities have adopted varied approaches:

- Dedicated entrepreneurship majors and minors
- Incubator and accelerator programs for student startups
- Pitch competitions with meaningful funding prizes
- Mentor networks connecting students with experienced entrepreneurs
- Interdisciplinary initiatives that bring together diverse skill sets

## Learning Outcomes

Well-designed entrepreneurship programs develop:

- Problem identification and opportunity recognition skills
- Customer discovery and validation methodologies
- Financial literacy and resource management
- Resilience and adaptation to changing conditions
- Effective communication and stakeholder management

## Measuring Success

Program effectiveness can be assessed through various metrics:

- Venture launch rates and survival statistics
- Funding secured by student startups
- Job creation and economic impact
- Student satisfaction and skill development
- Career outcomes, both entrepreneurial and corporate

## Best Practices Emerging

The most successful programs typically incorporate:

1. Experiential learning through real venture development
2. Cross-campus collaboration beyond business schools
3. Community engagement with local entrepreneurial ecosystems
4. Diverse entrepreneurial pathways beyond high-growth tech
5. Ongoing support systems that extend beyond graduation

As these programs mature, the focus is shifting from simply encouraging startups to developing an entrepreneurial mindset that serves students regardless of their ultimate career choices.
    `,
    coverImage: "/placeholder.svg",
    author: authors[2],
    category: categories[4],
    tags: ["entrepreneurship", "startups", "business education", "innovation"],
    publishedAt: "2023-06-22T08:45:00Z",
    readTime: 9,
    likes: 117,
    comments: [
      {
        id: "comment-4",
        author: authors[3],
        content: "As a student who went through one of these programs, I can definitely attest to the value of the experiential components.",
        publishedAt: "2023-06-22T11:17:00Z"
      }
    ]
  }
];

export const getFeaturedPosts = (): Post[] => {
  return posts.filter(post => post.featured === true);
};

export const getRecentPosts = (limit: number = 3): Post[] => {
  return [...posts]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
};

export const getPostsByCategory = (categorySlug: string): Post[] => {
  return posts.filter(post => post.category.slug === categorySlug);
};

export const getPostBySlug = (slug: string): Post | undefined => {
  return posts.find(post => post.slug === slug);
};

export const getUserById = (userId: string): Author | undefined => {
  return authors.find(author => author.id === userId);
};

export const getAllPosts = (): Post[] => {
  return posts;
};
