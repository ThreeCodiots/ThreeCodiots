
import { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'tech', name: 'Tech' },
    { id: 'design', name: 'Design' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'finance', name: 'Finance' }
  ];

  const projects = [
    {
      id: 1,
      title: 'FinTech Dashboard',
      category: 'tech',
      industry: 'Financial Services',
      services: ['Full Stack Development', 'UI/UX Design'],
      image: '/placeholder.svg',
      description: 'Real-time trading platform with advanced analytics and portfolio management.',
      impact: '300% increase in user engagement',
      technologies: ['React', 'Node.js', 'MongoDB', 'WebSocket'],
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'E-commerce Rebrand',
      category: 'design',
      industry: 'Retail',
      services: ['Brand Identity', 'Web Design'],
      image: '/placeholder.svg',
      description: 'Complete brand overhaul for luxury fashion e-commerce platform.',
      impact: '150% boost in conversion rates',
      technologies: ['Figma', 'Adobe Creative Suite', 'Shopify'],
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'SaaS Growth Campaign',
      category: 'marketing',
      industry: 'Technology',
      services: ['SEO', 'Performance Marketing'],
      image: '/placeholder.svg',
      description: 'Multi-channel marketing strategy for B2B SaaS startup.',
      impact: '400% increase in qualified leads',
      technologies: ['Google Ads', 'SEMrush', 'HubSpot'],
      link: '#',
      github: null
    },
    {
      id: 4,
      title: 'Startup Compliance',
      category: 'finance',
      industry: 'Technology',
      services: ['Company Registration', 'Tax Planning'],
      image: '/placeholder.svg',
      description: 'Complete financial setup for international expansion.',
      impact: '100% regulatory compliance achieved',
      technologies: ['QuickBooks', 'Stripe', 'LegalZoom'],
      link: '#',
      github: null
    },
    {
      id: 5,
      title: 'Healthcare App',
      category: 'tech',
      industry: 'Healthcare',
      services: ['Mobile Development', 'API Integration'],
      image: '/placeholder.svg',
      description: 'Patient management system with telemedicine capabilities.',
      impact: '90% reduction in appointment scheduling time',
      technologies: ['React Native', 'Firebase', 'Stripe'],
      link: '#',
      github: '#'
    },
    {
      id: 6,
      title: 'Restaurant Chain Branding',
      category: 'design',
      industry: 'Food & Beverage',
      services: ['Brand Identity', 'Marketing Materials'],
      image: '/placeholder.svg',
      description: 'Complete visual identity for expanding restaurant franchise.',
      impact: '200% increase in brand recognition',
      technologies: ['Adobe Creative Suite', 'Figma'],
      link: '#',
      github: null
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section-spacing bg-brand-dark/30">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-2 text-brand-white mb-6">Case Studies</h2>
          <p className="body-large text-brand-gray max-w-3xl mx-auto">
            Real results for real businesses. Explore how we've helped companies transform their digital presence and achieve measurable growth.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-brand text-brand-black'
                  : 'bg-brand-black/50 text-brand-gray hover:text-brand-white hover:bg-brand-dark/50 border border-brand-cyan/20'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="card-glass overflow-hidden card-hover group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden bg-brand-dark h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Hover Actions */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="w-10 h-10 bg-brand-cyan text-brand-black rounded-full flex items-center justify-center hover:bg-brand-white transition-colors duration-300"
                  >
                    <ExternalLink size={16} />
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      className="w-10 h-10 bg-brand-cyan text-brand-black rounded-full flex items-center justify-center hover:bg-brand-white transition-colors duration-300"
                    >
                      <Github size={16} />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-brand-cyan/10 text-brand-cyan text-sm rounded-full border border-brand-cyan/20">
                    {project.industry}
                  </span>
                  <span className="text-brand-gray text-sm capitalize">{project.category}</span>
                </div>

                <h3 className="text-xl font-bold text-brand-white mb-3 group-hover:text-brand-cyan transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-brand-gray mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Services */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.services.slice(0, 2).map((service, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-brand-black/50 text-brand-gray text-xs rounded border border-brand-cyan/10"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                {/* Impact */}
                <div className="mb-4">
                  <div className="text-brand-cyan font-semibold text-sm">Impact:</div>
                  <div className="text-brand-white text-sm">{project.impact}</div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-brand-cyan/5 text-brand-cyan text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-brand-gray text-xs">+{project.technologies.length - 3} more</span>
                  )}
                </div>

                {/* View Project Button */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="inline-flex items-center text-brand-cyan font-semibold hover:text-brand-white transition-colors duration-300"
                  >
                    View Case Study
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-12">
          <a href="#contact" className="btn-secondary">
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
