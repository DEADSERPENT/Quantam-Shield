import React from 'react';
import Header from '@/components/Header';
import PageHero from '@/components/PageHero';
import Footer from '@/components/Footer';
import { CommunityIcon3D, CodeIcon3D, NetworkIcon3D, BlogIcon3D, EnterpriseIcon3D, BugIcon3D, StarIcon3D, GraduationIcon3D, TeamIcon3D } from '@/components/Icons3D';

export const metadata = {
  title: 'Community | QuantumShield',
  description: 'Join the QuantumShield community. Connect with security experts, developers, and users worldwide.',
};

export default function CommunityPage() {
  const communityChannels = [
    {
      IconComponent: CommunityIcon3D,
      title: 'Community Forum',
      description: 'Join discussions, ask questions, and share your experiences with other users.',
      members: '12,500+',
      activity: 'Very Active',
      link: 'https://forum.quantumshield.com',
      color: 'from-quantum-cyan/20 to-quantum-violet/20',
    },
    {
      IconComponent: CodeIcon3D,
      title: 'GitHub',
      description: 'Contribute to open-source projects, report issues, and access developer resources.',
      members: '3,800+',
      activity: 'Active',
      link: 'https://github.com/quantumshield',
      color: 'from-purple-500/20 to-pink-500/20',
    },
    {
      IconComponent: NetworkIcon3D,
      title: 'Twitter/X',
      description: 'Follow for news, updates, security tips, and community highlights.',
      members: '25,000+',
      activity: 'Daily Updates',
      link: 'https://twitter.com/quantumshield',
      color: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      IconComponent: BlogIcon3D,
      title: 'YouTube',
      description: 'Watch tutorials, product demos, and security educational content.',
      members: '8,500+',
      activity: 'Weekly Videos',
      link: 'https://youtube.com/@quantumshield',
      color: 'from-red-500/20 to-orange-500/20',
    },
    {
      IconComponent: EnterpriseIcon3D,
      title: 'LinkedIn',
      description: 'Connect with professionals and stay updated on enterprise solutions.',
      members: '15,000+',
      activity: 'Professional',
      link: 'https://linkedin.com/company/quantumshield',
      color: 'from-blue-600/20 to-blue-400/20',
    },
    {
      IconComponent: CommunityIcon3D,
      title: 'Discord Server',
      description: 'Real-time chat with the community, developers, and support team.',
      members: '5,200+',
      activity: '24/7 Active',
      link: 'https://discord.gg/quantumshield',
      color: 'from-indigo-500/20 to-purple-500/20',
    },
  ];

  const communityPrograms = [
    {
      title: 'Bug Bounty Program',
      description: 'Help us improve security. Report vulnerabilities and earn rewards.',
      IconComponent: BugIcon3D,
      link: '/security/bug-bounty',
    },
    {
      title: 'Developer Program',
      description: 'Build integrations and applications with QuantumShield APIs.',
      IconComponent: CodeIcon3D,
      link: '/developers',
    },
    {
      title: 'Ambassador Program',
      description: 'Become a QuantumShield ambassador and help spread quantum security.',
      IconComponent: StarIcon3D,
      link: '/community/ambassadors',
    },
    {
      title: 'Education Program',
      description: 'Free resources for students, educators, and academic institutions.',
      IconComponent: GraduationIcon3D,
      link: '/education',
    },
  ];

  const featuredMembers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Security Researcher',
      contribution: 'Top contributor to security discussions',
      AvatarComponent: TeamIcon3D,
    },
    {
      name: 'Alex Kumar',
      role: 'Developer',
      contribution: 'Created popular integration tools',
      AvatarComponent: TeamIcon3D,
    },
    {
      name: 'Maria Rodriguez',
      role: 'Community Moderator',
      contribution: 'Helps newcomers get started',
      AvatarComponent: TeamIcon3D,
    },
  ];

  const upcomingEvents = [
    {
      date: 'Dec 15',
      title: 'Quantum Security Webinar',
      type: 'Online Event',
      attendees: '500+ registered',
    },
    {
      date: 'Jan 10',
      title: 'Developer Workshop',
      type: 'Virtual Workshop',
      attendees: '200+ registered',
    },
    {
      date: 'Jan 25',
      title: 'Community Meetup',
      type: 'In-Person Event',
      attendees: '50+ registered',
    },
  ];

  return (
    <main className="bg-quantum-black min-h-screen">
      <Header />
      <PageHero
        title="Join Our Community"
        subtitle="Connect with security experts, developers, and quantum security enthusiasts worldwide"
        badge="12,500+ Active Members"
      />

      {/* Community Stats */}
      <section className="section-padding bg-quantum-charcoal/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { label: 'Community Members', value: '50,000+', IconComponent: TeamIcon3D },
              { label: 'Monthly Posts', value: '2,500+', IconComponent: CommunityIcon3D },
              { label: 'Countries', value: '120+', IconComponent: NetworkIcon3D },
              { label: 'Contributors', value: '500+', IconComponent: TeamIcon3D },
            ].map((stat, index) => {
              const IconComponent = stat.IconComponent;
              return (
              <div
                key={index}
                className="glass-card p-6 text-center hover:border-quantum-cyan/50 transition-all"
              >
                <div className="flex justify-center mb-2">
                  <IconComponent className="w-12 h-12" />
                </div>
                <div className="text-2xl font-bold text-quantum-cyan mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Community Channels */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              <span className="text-white">Community </span>
              <span className="gradient-text">Channels</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose your preferred platform to connect with the community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {communityChannels.map((channel, index) => {
              const IconComponent = channel.IconComponent;
              return (
              <a
                key={index}
                href={channel.link}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-6 hover:border-quantum-cyan/50 transition-all duration-300 group"
              >
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${channel.color} border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <IconComponent className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-quantum-cyan transition-colors">
                  {channel.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4">{channel.description}</p>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500">{channel.members} members</span>
                  <span className="px-2 py-1 rounded bg-quantum-cyan/10 text-quantum-cyan border border-quantum-cyan/20">
                    {channel.activity}
                  </span>
                </div>
              </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Community Programs */}
      <section className="section-padding bg-quantum-charcoal/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              <span className="text-white">Community </span>
              <span className="gradient-text">Programs</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Get involved and contribute to the quantum security movement
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {communityPrograms.map((program, index) => {
              const IconComponent = program.IconComponent;
              return (
              <a
                key={index}
                href={program.link}
                className="glass-card p-6 hover:border-quantum-cyan/50 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="group-hover:scale-110 transition-transform">
                    <IconComponent className="w-14 h-14" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-quantum-cyan transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-sm text-gray-400">{program.description}</p>
                  </div>
                </div>
              </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Members & Events */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Featured Members */}
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-8">
                <span className="gradient-text">Featured Members</span>
              </h2>
              <div className="space-y-4">
                {featuredMembers.map((member, index) => {
                  const AvatarComponent = member.AvatarComponent;
                  return (
                  <div key={index} className="glass-card p-6 hover:border-quantum-cyan/50 transition-all group">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <AvatarComponent className="w-14 h-14" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-quantum-cyan transition-colors">
                          {member.name}
                        </h3>
                        <p className="text-sm text-gray-400 mb-1">{member.role}</p>
                        <p className="text-xs text-quantum-cyan">{member.contribution}</p>
                      </div>
                    </div>
                  </div>
                  );
                })}
              </div>
            </div>

            {/* Upcoming Events */}
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-8">
                <span className="gradient-text">Upcoming Events</span>
              </h2>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="glass-card p-6 hover:border-quantum-cyan/50 transition-all group">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-16 text-center">
                        <div className="text-2xl font-bold text-quantum-cyan">{event.date.split(' ')[1]}</div>
                        <div className="text-xs text-gray-500">{event.date.split(' ')[0]}</div>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-quantum-cyan transition-colors">
                          {event.title}
                        </h3>
                        <p className="text-sm text-gray-400 mb-1">{event.type}</p>
                        <p className="text-xs text-quantum-cyan">{event.attendees}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-b from-quantum-charcoal/30 to-quantum-black">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-2xl md:text-4xl font-display font-bold mb-6">
            <span className="text-white">Ready to </span>
            <span className="gradient-text">Get Involved?</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Join thousands of security professionals and enthusiasts in building the future of quantum-safe security.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://forum.quantumshield.com" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Join Forum
            </a>
            <a href="https://discord.gg/quantumshield" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Join Discord
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
