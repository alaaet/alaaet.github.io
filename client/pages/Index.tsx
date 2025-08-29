import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Shield, 
  Code, 
  Terminal,
  BookOpen,
  Award,
  Users,
  Calendar,
  MapPin,
  Download,
  Star,
  GitFork,
  Eye
} from "lucide-react";
import { getAllArticles } from "@/lib/articles";

export default function Index() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const skills = [
    "Penetration Testing", "Vulnerability Assessment", "Network Security", 
    "Digital Forensics", "Incident Response", "Malware Analysis",
    "React.js", "Node.js", "Python", "TypeScript", "Go", "Rust",
    "Docker", "Kubernetes", "AWS", "Azure", "Linux", "Bash"
  ];

  const projects = [
    {
      name: "SecureAuth Framework",
      description: "Advanced authentication framework with zero-trust architecture and multi-factor authentication support.",
      tech: ["TypeScript", "Node.js", "Redis", "PostgreSQL"],
      stars: 1247,
      forks: 189,
      url: "https://github.com/username/secureauth"
    },
    {
      name: "VulnScanner Pro",
      description: "Automated vulnerability scanner with custom rule engine and detailed reporting capabilities.",
      tech: ["Python", "FastAPI", "Docker", "React"],
      stars: 892,
      forks: 156,
      url: "https://github.com/username/vulnscanner"
    },
    {
      name: "CyberThreat Intel",
      description: "Real-time threat intelligence platform with machine learning-based threat detection.",
      tech: ["Go", "TensorFlow", "Elasticsearch", "Grafana"],
      stars: 634,
      forks: 98,
      url: "https://github.com/username/threat-intel"
    }
  ];

  const courses = [
    {
      title: "Advanced Penetration Testing",
      students: 15420,
      rating: 4.9,
      duration: "24 hours",
      url: "https://arademia.com/course/advanced-pentest"
    },
    {
      title: "Secure Code Development",
      students: 12350,
      rating: 4.8,
      duration: "18 hours",
      url: "https://arademia.com/course/secure-coding"
    },
    {
      title: "Cloud Security Architecture",
      students: 9870,
      rating: 4.9,
      duration: "20 hours",
      url: "https://arademia.com/course/cloud-security"
    }
  ];

  const publications = [
    {
      title: "Zero-Trust Architecture in Modern Enterprise Networks",
      journal: "IEEE Security & Privacy",
      year: "2024",
      url: "#"
    },
    {
      title: "Machine Learning Approaches to APT Detection",
      journal: "ACM Computing Surveys",
      year: "2023",
      url: "#"
    },
    {
      title: "Secure Development Lifecycle Integration",
      journal: "Journal of Cybersecurity",
      year: "2023",
      url: "#"
    }
  ];

  const blogPosts = getAllArticles().slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ y, opacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="relative w-32 h-32 mx-auto mb-6">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Faac799cf975147eabc9d4bdfb8eecb3f%2Fc76cb21027b44760aee61cce73d0b56f?format=webp&width=800"
                alt="Alaa Abuiteiwi - Cybersecurity Expert"
                className="w-full h-full rounded-full object-cover border-4 border-primary/20 shadow-2xl"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-accent/20 animate-pulse" />
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Cybersecurity Expert & Software Developer</span>
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-foreground to-accent bg-clip-text text-transparent"
          >
            Alaa Abuiteiwi
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Securing digital infrastructure through innovative solutions and cutting-edge research
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button size="lg" className="group">
              <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
              Download CV
            </Button>
            <Button variant="outline" size="lg" className="group">
              <Mail className="w-4 h-4 mr-2 group-hover:animate-pulse" />
              Get in Touch
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center gap-6 mt-12"
          >
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills & Expertise */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Combining deep cybersecurity knowledge with modern software development practices
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Badge variant="secondary" className="w-full justify-center py-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default">
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source Projects */}
      <section className="py-20 px-4 bg-card/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Source Projects</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Contributing to the security community through open-source solutions
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full hover:border-primary/50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <Code className="w-5 h-5 text-primary" />
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {project.name}
                        </CardTitle>
                      </div>
                      <a href={project.url} className="text-muted-foreground hover:text-primary transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        {project.stars}
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="w-4 h-4" />
                        {project.forks}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Training Courses</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Sharing knowledge through comprehensive cybersecurity training on Arademia
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full hover:border-primary/50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-primary" />
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {course.title}
                        </CardTitle>
                      </div>
                      <a href={course.url} className="text-muted-foreground hover:text-primary transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4 text-muted-foreground" />
                          <span>{course.students.toLocaleString()} students</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span>{course.rating}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-20 px-4 bg-card/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Publications</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Research contributions to the cybersecurity and software engineering fields
            </p>
          </motion.div>
          
          <div className="space-y-6">
            {publications.map((publication, index) => (
              <motion.div
                key={publication.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ x: 5 }}
                className="group"
              >
                <Card className="hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                          {publication.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="font-medium">{publication.journal}</span>
                          <span>{publication.year}</span>
                        </div>
                      </div>
                      <a href={publication.url} className="text-muted-foreground hover:text-primary transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Blog Posts</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Insights and thoughts on cybersecurity trends and development practices
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Link to={`/blog/${post.slug}`}>
                  <Card className="h-full hover:border-primary/50 transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </CardTitle>
                        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <CardDescription className="line-clamp-3">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                        <span>{post.readTime}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link to="/blog">
              <Button size="lg" variant="outline">
                View All Posts
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-4 bg-card/20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Interested in collaboration, consulting, or just want to connect? Let's talk!
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-8"
          >
            <Card className="text-center hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6">
                <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground text-sm">alaa@example.com</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6">
                <Linkedin className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">LinkedIn</h3>
                <p className="text-muted-foreground text-sm">Connect professionally</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6">
                <Github className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">GitHub</h3>
                <p className="text-muted-foreground text-sm">View my code</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Alaa Abuiteiwi. Securing the digital world, one line of code at a time.
          </p>
        </div>
      </footer>
    </div>
  );
}
