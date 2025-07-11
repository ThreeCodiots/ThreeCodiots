
import { Users, Target, Award, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Cutting-edge solutions that push boundaries and create competitive advantages.'
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'Data-driven strategies with measurable outcomes and clear ROI.'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'Long-term relationships built on trust, transparency, and mutual success.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Premium quality in every deliverable, from concept to completion.'
    }
  ];

  const workflow = [
    { step: '01', title: 'Discovery', desc: 'Deep dive into your business goals' },
    { step: '02', title: 'Strategy', desc: 'Custom roadmap for success' },
    { step: '03', title: 'Design', desc: 'User-centered visual solutions' },
    { step: '04', title: 'Development', desc: 'Robust, scalable implementation' },
    { step: '05', title: 'Delivery', desc: 'Seamless launch and optimization' },
    { step: '06', title: 'Support', desc: 'Ongoing growth and maintenance' }
  ];

  return (
    <section id="about" className="section-spacing">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-2 text-brand-white mb-6">About 3Codiots</h2>
          <p className="body-large text-brand-gray max-w-3xl mx-auto">
            Founded in 2022, we've grown from a passionate trio to a global team of specialists. 
            Our mission: democratize access to premium digital solutions for ambitious businesses.
          </p>
        </div>

        {/* Story Timeline */}
        <div className="mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-cyan to-transparent"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                <div className="relative flex items-start">
                  <div className="absolute left-6 w-4 h-4 bg-brand-cyan rounded-full border-4 border-brand-black"></div>
                  <div className="ml-16">
                    <div className="text-brand-cyan font-bold mb-2">2022 - The Beginning</div>
                    <div className="text-brand-white font-semibold mb-2">Three Minds, One Vision</div>
                    <div className="text-brand-gray">Started with a simple belief: every business deserves enterprise-level digital solutions.</div>
                  </div>
                </div>
                
                <div className="relative flex items-start">
                  <div className="absolute left-6 w-4 h-4 bg-brand-cyan rounded-full border-4 border-brand-black"></div>
                  <div className="ml-16">
                    <div className="text-brand-cyan font-bold mb-2">2023 - Rapid Growth</div>
                    <div className="text-brand-white font-semibold mb-2">Global Expansion</div>
                    <div className="text-brand-gray">Expanded to 10+ countries, delivered 100+ projects, built a reputation for excellence.</div>
                  </div>
                </div>
                
                <div className="relative flex items-start">
                  <div className="absolute left-6 w-4 h-4 bg-brand-cyan rounded-full border-4 border-brand-black"></div>
                  <div className="ml-16">
                    <div className="text-brand-cyan font-bold mb-2">2024 - Innovation Focus</div>
                    <div className="text-brand-white font-semibold mb-2">AI & Advanced Solutions</div>
                    <div className="text-brand-gray">Pioneering AI-integrated solutions and next-generation digital experiences.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="heading-3 text-brand-white mb-4">Our Values</h3>
            <p className="body-regular text-brand-gray">The principles that guide every decision and delivery.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-brand-black" />
                  </div>
                  <h4 className="text-xl font-bold text-brand-white mb-3">{value.title}</h4>
                  <p className="text-brand-gray">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Workflow */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="heading-3 text-brand-white mb-4">Our Process</h3>
            <p className="body-regular text-brand-gray">A proven methodology that delivers results consistently.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workflow.map((item, index) => (
              <div key={index} className="card-glass p-6 text-center card-hover">
                <div className="text-4xl font-black text-brand-cyan mb-4">{item.step}</div>
                <h4 className="text-xl font-bold text-brand-white mb-3">{item.title}</h4>
                <p className="text-brand-gray">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="card-glass p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="heading-3 text-brand-white mb-4">Impact by Numbers</h3>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-brand-cyan mb-2">150+</div>
              <div className="text-brand-gray">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-cyan mb-2">98%</div>
              <div className="text-brand-gray">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-cyan mb-2">24hrs</div>
              <div className="text-brand-gray">Response Time</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-cyan mb-2">10+</div>
              <div className="text-brand-gray">Countries Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
