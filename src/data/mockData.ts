
// Import necessary types
import { Author, Category, Post, Comment } from "@/types/blog";

// Categories
export const categories: Category[] = [
  {
    id: "1",
    name: "Arts",
    slug: "arts",
    description: "Explore creative expressions and cultural performances"
  },
  {
    id: "2",
    name: "Science",
    slug: "science",
    description: "Discover the latest in scientific research and breakthroughs"
  },
  {
    id: "3",
    name: "Humanities",
    slug: "humanities",
    description: "Explore the human experience through literature, philosophy, and history"
  },
  {
    id: "4",
    name: "Technology",
    slug: "technology",
    description: "Stay updated with the latest tech trends and innovations"
  },
  {
    id: "5",
    name: "Business",
    slug: "business",
    description: "Insights into entrepreneurship, management, and economics"
  }
];

// Authors
const authors: Author[] = [
  {
    id: "author1",
    name: "Dr. Emma Wilson",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces",
    role: "educator",
    department: "Department of Computer Science",
    bio: "Dr. Emma Wilson is a professor of Computer Science with expertise in AI and machine learning. She has published numerous papers on neural networks and their applications in education."
  },
  {
    id: "author2",
    name: "Michael Chen",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop&crop=faces",
    role: "student",
    department: "Department of Physics",
    bio: "Michael is a PhD candidate in Theoretical Physics, focusing on quantum mechanics and string theory. He is passionate about science communication and making complex topics accessible."
  },
  {
    id: "author3",
    name: "Prof. Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&h=150&fit=crop&crop=faces",
    role: "educator",
    department: "Department of Literature",
    bio: "Professor Johnson specializes in 20th century literature with a focus on feminist and postcolonial studies. She has authored three books on modern literary criticism."
  },
  {
    id: "author4",
    name: "James Rodriguez",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces",
    role: "student",
    department: "Department of Business",
    bio: "James is an MBA student specializing in entrepreneurship and sustainable business practices. He has launched two successful startups before pursuing his graduate studies."
  },
  {
    id: "author5",
    name: "Dr. Alex Patel",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=faces",
    role: "educator",
    department: "Department of Environmental Science",
    bio: "Dr. Patel's research focuses on climate change mitigation strategies and sustainable development. She has worked with international organizations on environmental policy."
  }
];

// Sample comments
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

// Blog posts data
const posts: Post[] = [
  {
    id: "post1",
    title: "The Future of Artificial Intelligence in Education",
    slug: "future-ai-education",
    excerpt: "Exploring how AI technologies are transforming learning experiences and educational methodologies",
    content: `
      <h2>Revolutionizing the Classroom</h2>
      <p>Artificial intelligence is fundamentally changing how we approach education. From personalized learning pathways to intelligent tutoring systems, AI offers new possibilities for both students and educators.</p>
      
      <p>Recent studies show that AI-assisted learning can improve student outcomes by up to 30% in certain subjects, particularly in mathematics and language acquisition. These systems adapt to individual learning styles, providing targeted support where students need it most.</p>
      
      <h2>Addressing Challenges</h2>
      <p>Despite its promise, implementing AI in education faces several obstacles. Privacy concerns, equitable access, and the need for human connection in learning environments all require careful consideration.</p>
      
      <p>Educators must be partners in this transformation, with AI serving as a tool to enhance teaching rather than replace the essential human elements of education.</p>
      
      <h2>Looking Forward</h2>
      <p>The next decade will likely see AI become an integrated part of educational infrastructure, from administrative tasks to classroom activities. Preparing both teachers and students for this future requires thoughtful policy development and curriculum updates that include digital literacy and ethical considerations in AI.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=600&fit=crop",
    author: authors[0],
    category: categories[3], // Technology
    tags: ["Artificial Intelligence", "Education Technology", "Machine Learning", "Future of Learning"],
    publishedAt: "2023-09-10T08:00:00Z",
    readTime: 8,
    likes: 127,
    views: 3205,
    comments: [comments[0], comments[1]]
  },
  {
    id: "post2",
    title: "Classical Literature in a Digital Age",
    slug: "classical-literature-digital-age",
    excerpt: "How technological tools are providing new insights into ancient texts and making them accessible to modern audiences",
    content: `
      <h2>Digitizing the Classics</h2>
      <p>The digitization of classical texts has revolutionized how scholars approach literary analysis. Advanced computational methods can now identify patterns, themes, and stylistic elements across vast collections of literature that would be impossible to process manually.</p>
      
      <p>Projects like the Digital Humanities Initiative have made thousands of ancient manuscripts freely accessible online, democratizing access to cultural heritage that was once limited to those with academic credentials.</p>
      
      <h2>New Interpretations</h2>
      <p>Digital tools are also enabling new interpretations of familiar works. Text analysis algorithms have revealed previously unnoticed connections between different authors and texts, challenging long-held assumptions about influence and originality in the classical canon.</p>
      
      <p>Virtual reality recreations of historical settings provide context for these works, allowing readers to immerse themselves in the worlds that shaped these timeless stories.</p>
      
      <h2>Preserving Cultural Heritage</h2>
      <p>Beyond academic interest, digital preservation ensures these foundational texts survive for future generations. Climate-controlled physical archives are no longer the only safeguard for literary heritage—distributed digital copies provide resilience against loss.</p>
      
      <p>The challenge now is developing sustainable formats and platforms that will remain accessible as technology continues to evolve rapidly.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1536412597336-ade7b523ecfc?w=800&h=600&fit=crop",
    author: authors[2],
    category: categories[2], // Humanities
    tags: ["Classical Literature", "Digital Humanities", "Literary Analysis", "Cultural Heritage"],
    publishedAt: "2023-09-05T10:30:00Z",
    readTime: 7,
    likes: 98,
    views: 2187,
    comments: [comments[2]]
  },
  {
    id: "post3",
    title: "Sustainable Business Models for the 21st Century",
    slug: "sustainable-business-models",
    excerpt: "Examining how companies are reimagining profitability while prioritizing environmental and social responsibility",
    content: `
      <h2>Beyond the Bottom Line</h2>
      <p>Traditional business models focused primarily on financial returns are giving way to more holistic approaches that consider environmental impact and social value. This shift represents both ethical progress and strategic adaptation to changing consumer expectations.</p>
      
      <p>Research shows that companies embracing sustainability outperform their peers financially over the long term, challenging the notion that environmental responsibility must come at the expense of profitability.</p>
      
      <h2>Circular Economy Principles</h2>
      <p>Leading organizations are adopting circular economy principles that minimize waste and maximize resource efficiency. By designing products for disassembly and reuse, these companies create closed-loop systems that reduce environmental impact while often reducing costs.</p>
      
      <p>Startups in particular are finding competitive advantage in building sustainability into their business models from inception, rather than attempting to retrofit existing operations.</p>
      
      <h2>Measuring What Matters</h2>
      <p>New metrics beyond GDP and quarterly profits are emerging to evaluate business success. Environmental, Social, and Governance (ESG) criteria are increasingly influencing investment decisions, with over $30 trillion now invested according to these principles.</p>
      
      <p>The challenge remains standardizing these measurements to prevent "greenwashing" and ensure transparency in how companies report their impact.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=600&fit=crop",
    author: authors[3],
    category: categories[4], // Business
    tags: ["Sustainability", "Business Ethics", "Circular Economy", "Corporate Responsibility"],
    publishedAt: "2023-08-28T09:15:00Z",
    readTime: 6,
    likes: 145,
    views: 3856,
    comments: []
  },
  {
    id: "post4",
    title: "Quantum Computing: Promises and Challenges",
    slug: "quantum-computing-overview",
    excerpt: "An accessible exploration of quantum computing principles and their potential implications for science and technology",
    content: `
      <h2>Understanding Quantum Mechanics in Computing</h2>
      <p>Quantum computing leverages the strange properties of quantum mechanics—superposition and entanglement—to process information in fundamentally different ways than classical computers. Rather than using bits that must be either 0 or 1, quantum computers use qubits that can exist in multiple states simultaneously.</p>
      
      <p>This property potentially allows quantum computers to solve certain problems exponentially faster than even the most powerful classical supercomputers, particularly in areas like cryptography, materials science, and complex system modeling.</p>
      
      <h2>Current State of Development</h2>
      <p>Despite significant progress, practical quantum computing remains in its early stages. Researchers have developed systems with dozens of qubits, but maintaining quantum coherence—preventing qubits from losing their quantum properties through interaction with the environment—remains a significant challenge.</p>
      
      <p>Several approaches to quantum computing architecture are being pursued simultaneously, including superconducting circuits, trapped ions, and topological qubits, each with different advantages and challenges.</p>
      
      <h2>Implications for the Future</h2>
      <p>When fully realized, quantum computers could revolutionize fields from drug discovery to climate modeling by simulating molecular and physical systems with unprecedented accuracy. They may also necessitate completely new approaches to data security, as current encryption methods could become vulnerable.</p>
      
      <p>The race for "quantum supremacy"—demonstrating quantum advantage for practical problems—continues to accelerate, with both academic institutions and technology companies making substantial investments in this transformative technology.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600&fit=crop",
    author: authors[1],
    category: categories[1], // Science
    tags: ["Quantum Computing", "Physics", "Computer Science", "Technology Innovation"],
    publishedAt: "2023-08-20T11:45:00Z",
    readTime: 10,
    likes: 186,
    views: 4120,
    comments: [comments[0]]
  },
  {
    id: "post5",
    title: "Expression Through Motion: Contemporary Dance in Academic Settings",
    slug: "contemporary-dance-academia",
    excerpt: "Examining how dance programs in universities are bridging artistic expression with scholarly research",
    content: `
      <h2>Dance as Academic Discipline</h2>
      <p>Contemporary dance in university settings has evolved from purely performance-based training to a rich interdisciplinary field that incorporates elements of anthropology, psychology, and cultural studies. This academic approach to movement arts creates space for both physical practice and theoretical exploration.</p>
      
      <p>Students in these programs develop not only technical proficiency but also research skills that allow them to contextualize dance within broader societal frameworks and historical movements.</p>
      
      <h2>Technology and Movement</h2>
      <p>Cutting-edge technologies like motion capture and AI-driven choreography tools are opening new possibilities for both creating and analyzing dance. These technical innovations allow for precise documentation of ephemeral performances and create new modes of creative expression.</p>
      
      <p>Interdisciplinary collaborations between dance departments and computer science programs have yielded fascinating projects that explore the relationship between human movement and computational systems.</p>
      
      <h2>Community Engagement</h2>
      <p>University dance programs increasingly emphasize community engagement and accessibility, bringing artistic expression to diverse populations both on and off campus. These initiatives recognize dance as not just an elite art form but as a universal language for communication and connection.</p>
      
      <p>Through outreach programs, academic dance departments are helping preserve cultural dance traditions while also creating platforms for innovation and cross-cultural dialogue through movement.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1547153760-18fc86324498?w=800&h=600&fit=crop",
    author: authors[4],
    category: categories[0], // Arts
    tags: ["Contemporary Dance", "Performing Arts", "Movement Studies", "Creative Expression"],
    publishedAt: "2023-08-15T14:00:00Z",
    readTime: 5,
    likes: 112,
    views: 1978,
    comments: [comments[2]]
  },
  {
    id: "post6",
    title: "Climate Science Education: Bridging Knowledge Gaps",
    slug: "climate-science-education",
    excerpt: "How educational institutions are addressing climate literacy and preparing students to tackle environmental challenges",
    content: `
      <h2>The Climate Literacy Challenge</h2>
      <p>Despite scientific consensus on climate change, significant knowledge gaps persist among students and the general public. Educational institutions are now developing integrated approaches to climate science that span disciplines from atmospheric physics to economics and psychology.</p>
      
      <p>These comprehensive curricula aim to provide not just scientific understanding but also the skills needed to evaluate policy options and engage in informed civic discourse about environmental issues.</p>
      
      <h2>Experiential Learning Approaches</h2>
      <p>Hands-on learning has proven particularly effective in climate education. Field studies, citizen science projects, and campus sustainability initiatives give students practical experience with both the challenges and solutions related to climate change.</p>
      
      <p>These approaches help make abstract global problems tangible and actionable at the local level, combating the sense of helplessness that can accompany climate awareness.</p>
      
      <h2>Preparing Future Leaders</h2>
      <p>Beyond general education, specialized programs are emerging to train the next generation of climate scientists, policy experts, and sustainable business leaders. These interdisciplinary programs recognize that addressing climate change requires collaboration across traditionally siloed fields.</p>
      
      <p>Alumni of these programs are already making significant contributions to renewable energy development, conservation efforts, and climate policy at local, national, and international levels.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=800&h=600&fit=crop",
    author: authors[4],
    category: categories[1], // Science
    tags: ["Climate Science", "Environmental Education", "Sustainability", "STEM Education"],
    publishedAt: "2023-08-10T16:30:00Z",
    readTime: 7,
    likes: 168,
    views: 3245,
    comments: []
  }
];

// Export the posts array
export const getAllPosts = (): Post[] => {
  return posts;
};

// Function to get a post by slug
export const getPostBySlug = (slug: string): Post | undefined => {
  return posts.find(post => post.slug === slug);
};

// Function to get posts by category
export const getPostsByCategory = (categorySlug: string): Post[] => {
  return posts.filter(post => post.category.slug === categorySlug);
};

// Function to get featured posts
export const getFeaturedPosts = (): Post[] => {
  return posts.filter(post => post.featured).length > 0 
    ? posts.filter(post => post.featured) 
    : [posts[0]]; // Return first post as featured if none are marked
};

// Function to get recent posts
export const getRecentPosts = (count: number = 3): Post[] => {
  return [...posts]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, count);
};

// Function to get related posts (same category, excluding current post)
export const getRelatedPosts = (currentPostId: string, count: number = 3): Post[] => {
  const currentPost = posts.find(post => post.id === currentPostId);
  if (!currentPost) return [];
  
  return posts
    .filter(post => post.id !== currentPostId && post.category.slug === currentPost.category.slug)
    .sort(() => Math.random() - 0.5) // Shuffle for some randomness
    .slice(0, count);
};
