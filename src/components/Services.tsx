
import { useState } from 'react';
import { Code, Palette, TrendingUp, Calculator, ArrowRight } from 'lucide-react';

const Services = () => {
  const [activeTab, setActiveTab] = useState('tech');

  const tabs = [
    { id: 'tech', name: 'Tech', icon: Code },
    { id: 'design', name: 'Design', icon: Palette },
    { id: 'marketing', name: 'Marketing', icon: TrendingUp },
    { id: 'finance', name: 'Finance', icon: Calculator },
  ];

  const services = {
    tech: [
      {
        title: 'Full Stack Web Development',
        description: 'Custom web applications built with modern frameworks like React, Next.js, and Node.js. Scalable, secure, and optimized for performance.',
        tools: ['React', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB']
      },
      {
        title: 'Mobile App Development',
        description: 'Native iOS and Android apps, plus cross-platform solutions with React Native. User-centric design meets robust functionality.',
        tools: ['React Native', 'Swift', 'Kotlin', 'Flutter', 'Firebase']
      },
      {
        title: 'API Integration & Development',
        description: 'RESTful APIs, GraphQL endpoints, and third-party integrations. Seamless data flow between systems and platforms.',
        tools: ['GraphQL', 'REST', 'Postman', 'Swagger', 'Microservices']
      },
      {
        title: 'DevOps & Cloud Setup',
        description: 'AWS, GCP, and Azure deployments with CI/CD pipelines. Automated testing, monitoring, and scaling solutions.',
        tools: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform']
      }
    ],
    design: [
      {
        title: 'Brand Identity & Logo Design',
        description: 'Comprehensive brand systems that capture your essence. From logos to guidelines, we create memorable visual identities.',
        tools: ['Figma', 'Adobe Creative Suite', 'Sketch', 'InVision', 'Principle']
      },
      {
        title: 'UI/UX Design',
        description: 'User-centered design that converts. Wireframes, prototypes, and pixel-perfect interfaces that delight users.',
        tools: ['Figma', 'Adobe XD', 'Framer', 'Miro', 'UsabilityHub']
      },
      {
        title: 'Website Prototyping',
        description: 'Interactive prototypes that bring ideas to life. Test concepts before development with realistic user flows.',
        tools: ['Figma', 'Framer', 'ProtoPie', 'Marvel', 'InVision']
      },
      {
        title: 'Marketing Collateral',
        description: 'Print and digital assets that maintain brand consistency. Brochures, presentations, and social media templates.',
        tools: ['Adobe Creative Suite', 'Canva Pro', 'Figma', 'Sketch', 'After Effects']
      }
    ],
    marketing: [
      {
        title: 'Social Media Strategy',
        description: 'Data-driven social campaigns across all platforms. Content creation, community management, and growth strategies.',
        tools: ['Hootsuite', 'Buffer', 'Sprout Social', 'Canva', 'Later']
      },
      {
        title: 'SEO Optimization',
        description: 'Technical and content SEO that ranks. Keyword research, on-page optimization, and link building strategies.',
        tools: ['SEMrush', 'Ahrefs', 'Google Analytics', 'Search Console', 'Screaming Frog']
      },
      {
        title: 'Performance Marketing',
        description: 'ROI-focused campaigns on Google, Meta, and LinkedIn. Advanced targeting, conversion optimization, and analytics.',
        tools: ['Google Ads', 'Facebook Ads', 'LinkedIn Ads', 'Google Analytics', 'Hotjar']
      },
      {
        title: 'Email Campaigns & Automation',
        description: 'Personalized email sequences that nurture leads. Automated workflows, segmentation, and performance tracking.',
        tools: ['Mailchimp', 'ConvertKit', 'ActiveCampaign', 'Klaviyo', 'Zapier']
      }
    ],
    finance: [
      {
        title: 'Company Registration',
        description: 'Business incorporation across multiple jurisdictions. Legal compliance, documentation, and regulatory filings.',
        tools: ['LegalZoom', 'Stripe Atlas', 'Delaware Inc', 'Singapore Govt', 'UK Companies House']
      },
      {
        title: 'Bookkeeping & Accounting',
        description: 'Monthly financial management and reporting. Real-time dashboards, expense tracking, and tax preparation.',
        tools: ['QuickBooks', 'Xero', 'FreshBooks', 'Wave', 'Sage']
      },
      {
        title: 'Tax & Compliance',
        description: 'Multi-jurisdictional tax planning and filing. VAT, GST, income tax, and regulatory compliance management.',
        tools: ['TaxJar', 'Avalara', 'H&R Block', 'TurboTax', 'FreeTaxUSA']
      },
      {
        title: 'Investment Strategy',
        description: 'Corporate finance planning and investment advisory. Cash flow optimization, funding strategies, and growth planning.',
        tools: ['PitchBook', 'CB Insights', 'AngelList', 'Crunchbase', 'EquityZen']
      }
    ]
  };

  return (
    <section id="services" className="section-spacing bg-brand-dark/50">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-2 text-brand-white mb-6">What We Do</h2>
          <p className="body-large text-brand-gray max-w-3xl mx-auto">
            Comprehensive solutions across four core disciplines. Every service designed to accelerate your business growth.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-2 p-2 bg-brand-black/50 rounded-lg border border-brand-cyan/20">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-brand text-brand-black'
                      : 'text-brand-gray hover:text-brand-white hover:bg-brand-dark/50'
                  }`}
                >
                  <Icon size={20} />
                  <span>{tab.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services[activeTab as keyof typeof services].map((service, index) => (
            <div
              key={index}
              className="card-glass p-8 card-hover group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-2xl font-bold text-brand-white mb-4 group-hover:text-brand-cyan transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-brand-gray mb-6 leading-relaxed">
                {service.description}
              </p>
              
              {/* Tools/Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {service.tools.map((tool, toolIndex) => (
                  <span
                    key={toolIndex}
                    className="px-3 py-1 bg-brand-cyan/10 text-brand-cyan text-sm rounded-full border border-brand-cyan/20"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className="inline-flex items-center text-brand-cyan font-semibold hover:text-brand-white transition-colors duration-300 group"
              >
                Request Quote
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
