import matter from 'gray-matter';

export interface Article {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
  tags: string[];
  author: string;
  content: string;
  year: string;
  month: string;
}

// Mock articles data - in a real app, this would fetch from the file system or API
const articlesData = {
  "2024/01/the-evolution-of-ransomware": {
    title: "The Evolution of Ransomware: From Simple Encryption to Supply Chain Attacks",
    date: "2024-01-15",
    excerpt: "An in-depth analysis of how ransomware has evolved and what organizations can do to protect themselves.",
    readTime: "8 min read",
    tags: ["ransomware", "cybersecurity", "threat-analysis"],
    author: "Alaa Abuiteiwi",
    content: `# The Evolution of Ransomware: From Simple Encryption to Supply Chain Attacks

Ransomware has undergone a dramatic transformation since its early days in the late 1980s. What began as relatively simple encryption schemes has evolved into sophisticated, multi-stage attacks that can cripple entire organizations and supply chains.

## The Early Days: Simple Encryption

The first known ransomware, the AIDS Trojan (also known as PC Cyborg), appeared in 1989. Distributed via floppy disks at a WHO AIDS conference, it employed basic symmetric encryption and demanded payment through traditional mail.

### Key Characteristics of Early Ransomware:
- Basic encryption algorithms
- Manual distribution methods
- Limited payment mechanisms
- Single-target focus

## The Modern Era: Ransomware-as-a-Service

Today's ransomware landscape is dominated by sophisticated criminal enterprises operating on a service-based model. Groups like REvil, Conti, and LockBit have transformed ransomware into a scalable business operation.

### Advanced Techniques:
1. **Double Extortion**: Encrypting data while simultaneously exfiltrating sensitive information
2. **Supply Chain Targeting**: Attacking managed service providers to reach multiple victims
3. **Living off the Land**: Using legitimate system tools to avoid detection
4. **Human-Operated Attacks**: Manual reconnaissance and lateral movement

## Case Study: The Kaseya Supply Chain Attack

In July 2021, the REvil ransomware group executed one of the most sophisticated supply chain attacks in history, targeting Kaseya's VSA software to compromise up to 1,500 downstream companies.

### Attack Timeline:
- **Initial Access**: Exploitation of zero-day vulnerabilities in Kaseya VSA
- **Payload Distribution**: Malicious updates pushed to managed service providers
- **Mass Encryption**: Simultaneous activation across multiple organizations
- **Ransom Demand**: $70 million for universal decryptor

## Defense Strategies

### 1. Zero Trust Architecture
Implement a comprehensive zero-trust model that assumes no implicit trust within the network perimeter.

### 2. Backup and Recovery
Maintain air-gapped backups with regular testing of recovery procedures.

### 3. Endpoint Detection and Response (EDR)
Deploy advanced EDR solutions capable of detecting behavioral anomalies.

### 4. Security Awareness Training
Regular training programs to help employees identify and report suspicious activities.

## Looking Forward: The Future of Ransomware

As organizations strengthen their defenses, we can expect ransomware groups to continue evolving their tactics:

- **AI-Powered Attacks**: Leveraging machine learning for more targeted campaigns
- **IoT Targeting**: Expanding attacks to Internet of Things devices
- **Cloud-Native Threats**: Developing capabilities specifically for cloud environments
- **Cryptocurrency Evolution**: Adapting to new payment mechanisms and privacy coins

## Conclusion

The evolution of ransomware from simple encryption tools to sophisticated supply chain attacks demonstrates the adaptive nature of cybercriminal enterprises. Organizations must adopt a proactive, layered security approach that anticipates and prepares for these evolving threats.

The key to effective ransomware defense lies not in any single technology or practice, but in the implementation of comprehensive security frameworks that can adapt to the ever-changing threat landscape.`
  },
  "2024/01/building-secure-apis": {
    title: "Building Secure APIs: A Developer's Guide to Preventing Common Vulnerabilities",
    date: "2024-01-08",
    excerpt: "Best practices for securing REST APIs against OWASP Top 10 vulnerabilities with practical examples.",
    readTime: "12 min read",
    tags: ["api-security", "development", "owasp", "best-practices"],
    author: "Alaa Abuiteiwi",
    content: `# Building Secure APIs: A Developer's Guide to Preventing Common Vulnerabilities

Application Programming Interfaces (APIs) have become the backbone of modern software architecture. However, with great connectivity comes great responsibility. As APIs proliferate, so do the security vulnerabilities that can expose sensitive data and compromise entire systems.

## The OWASP API Security Top 10

The Open Web Application Security Project (OWASP) maintains a dedicated list of the most critical API security risks. Let's explore each vulnerability and practical mitigation strategies.

### 1. Broken Object Level Authorization (BOLA)

BOLA occurs when APIs fail to properly validate user permissions for specific objects.

**Vulnerable Code Example:**
\`\`\`javascript
app.get('/api/users/:userId/profile', (req, res) => {
  const { userId } = req.params;
  const profile = getUserProfile(userId);
  res.json(profile);
});
\`\`\`

**Secure Implementation:**
\`\`\`javascript
app.get('/api/users/:userId/profile', authenticateUser, (req, res) => {
  const { userId } = req.params;
  const currentUser = req.user;
  
  // Verify user can access this profile
  if (currentUser.id !== userId && !currentUser.isAdmin) {
    return res.status(403).json({ error: 'Access denied' });
  }
  
  const profile = getUserProfile(userId);
  res.json(profile);
});
\`\`\`

### 2. Broken User Authentication

Authentication mechanisms are often implemented incorrectly, allowing attackers to compromise authentication tokens or exploit implementation flaws.

**Best Practices:**
- Implement proper session management
- Use strong password policies
- Enable multi-factor authentication
- Implement account lockout mechanisms

## Input Validation and Sanitization

Always validate and sanitize input data to prevent injection attacks and ensure data integrity.

## Conclusion

Securing APIs requires a multi-layered approach that addresses authentication, authorization, input validation, rate limiting, and monitoring. By implementing these practices from the start of development, you can significantly reduce the risk of security vulnerabilities.`
  },
  "2024/01/container-security-production": {
    title: "Container Security: Securing Docker and Kubernetes in Production",
    date: "2024-01-02",
    excerpt: "Essential security considerations when deploying containerized applications at scale.",
    readTime: "10 min read",
    tags: ["containers", "docker", "kubernetes", "devops", "security"],
    author: "Alaa Abuiteiwi",
    content: `# Container Security: Securing Docker and Kubernetes in Production

Containerization has revolutionized how we build, ship, and run applications. However, the convenience and agility of containers come with unique security challenges that require careful consideration, especially in production environments.

## The Container Security Landscape

Container security spans multiple layers:
- **Image Security**: Ensuring base images and dependencies are secure
- **Runtime Security**: Protecting running containers
- **Network Security**: Securing container-to-container communication
- **Orchestration Security**: Securing Kubernetes clusters and workloads

## Docker Security Best Practices

### 1. Secure Base Images

Start with minimal, official base images and keep them updated:

\`\`\`dockerfile
# Use specific tags, not 'latest'
FROM node:18-alpine

# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Use non-root user
USER nextjs

WORKDIR /app

# Copy only necessary files
COPY --chown=nextjs:nodejs package*.json ./
RUN npm ci --only=production && npm cache clean --force

COPY --chown=nextjs:nodejs . .

EXPOSE 3000

CMD ["npm", "start"]
\`\`\`

## Kubernetes Security

### 1. Pod Security Standards

Implement Pod Security Standards to enforce security policies.

### 2. Network Policies

Implement network segmentation to control traffic flow between pods.

## Conclusion

Container security is a shared responsibility that requires attention throughout the entire container lifecycle. By implementing these practices, you can significantly improve the security posture of your containerized applications.`
  }
};

export function getAllArticles(): Article[] {
  return Object.entries(articlesData).map(([slug, data]) => {
    const [year, month] = slug.split('/');
    return {
      slug,
      year,
      month,
      ...data
    };
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getArticleBySlug(slug: string): Article | undefined {
  const data = articlesData[slug as keyof typeof articlesData];
  if (!data) return undefined;
  
  const [year, month] = slug.split('/');
  return {
    slug,
    year,
    month,
    ...data
  };
}

export function getArticlesByTag(tag: string): Article[] {
  return getAllArticles().filter(article => 
    article.tags.some(t => t.toLowerCase() === tag.toLowerCase())
  );
}

export function getArticlesByYear(year: string): Article[] {
  return getAllArticles().filter(article => article.year === year);
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  getAllArticles().forEach(article => {
    article.tags.forEach(tag => tags.add(tag));
  });
  return Array.from(tags).sort();
}
