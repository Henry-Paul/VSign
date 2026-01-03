import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { Award, Factory, Users, Clock, Target, Heart } from 'lucide-react';

const founders = [
  {
    name: "Rakesh Adepu",
    title: "Founder & Chief Engineer",
    image: "/assets/rakesh.jpg",
    bio: "Started as a graphic designer in 2012, learned every aspect of signage from fabrication to installation. Founded V SIGN in 2013 with a commitment to quality.",
    expertise: ["Structural Engineering", "LED Technology", "Quality Control"],
    quote: "Every signage we install is a reflection of our reputation. If it's done by V SIGN, it must glow and perform."
  },
  {
    name: "Ashwini Adepu",
    title: "Co-Founder & Head of Business Development",
    image: "/assets/ashwini.jpg",
    bio: "MBA-Finance graduate who transitioned from corporate life to entrepreneurship. Scales operations and ensures customer satisfaction.",
    expertise: ["Project Management", "Client Relations", "Operations"],
    quote: "V SIGN gives me the opportunity to meet new people, learn continuously, and grow as an entrepreneur."
  }
];

const milestones = [
  { year: "2013", event: "V SIGN Founded", detail: "Started with one technician and a vision for quality signage" },
  { year: "2016", event: "Co-Founder Ashwini Joined", detail: "Scaled sales operations and improved customer experience" },
  { year: "2019", event: "In-House Manufacturing Unit", detail: "Opened Vijayawada production facility for quality control" },
  { year: "2022", event: "300+ Projects Completed", detail: "Trusted by builders, hospitals, hotels across AP & TS" },
  { year: "2024", event: "10-Year Warranty Launch", detail: "Longest LED warranty in South India" }
];

const About = () => {
  return (
    <>
      <SEO 
        title="About V SIGN Enterprise"
        description="Meet the founders of V SIGN. 11+ years of premium signage manufacturing in Andhra Pradesh & Telangana. In-house production, professional installation, trusted quality."
        keywords={["V SIGN founders", "signage manufacturer Andhra Pradesh", "signage company Vijayawada"]}
      />

      <section className="about-hero">
        <div className="container">
          <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            About <span className="text-gradient">V SIGN</span>
          </motion.h1>
          <p>Premium signage solutions since 2013</p>
        </div>
      </section>

      <section className="founders-section">
        <div className="container">
          <motion.h2 className="section-title">Meet the <span className="accent-underline">Founders</span></motion.h2>
          <div className="founders-grid">
            {founders.map((founder, i) => (
              <motion.article key={founder.name} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }} className="founder-card card-premium">
                <div className="founder-image">
                  <img src={founder.image} alt={founder.name} />
                </div>
                <div className="founder-content">
                  <h3>{founder.name}</h3>
                  <p className="title">{founder.title}</p>
                  <p className="bio">{founder.bio}</p>
                  <div className="expertise">
                    <strong>Expertise:</strong>
                    {founder.expertise.map(skill => <span key={skill} className="skill-tag">{skill}</span>)}
                  </div>
                  <blockquote className="quote">"{founder.quote}"</blockquote>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="milestones-section">
        <div className="container">
          <motion.h2 className="section-title">Our <span className="accent-underline">Journey</span></motion.h2>
          <div className="timeline">
            {milestones.map((milestone, i) => (
              <motion.div key={milestone.year} initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }} className="timeline-item">
                <div className="timeline-marker">{milestone.year}</div>
                <div className="timeline-content">
                  <h4>{milestone.event}</h4>
                  <p>{milestone.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <motion.h2 className="section-title">Our <span className="accent-underline">Values</span></motion.h2>
          <div className="values-grid">
            {[
              { icon: <Target size={40} />, title: "Quality First", desc: "Every project passes 15+ QC checkpoints before dispatch" },
              { icon: <Heart size={40} />, title: "Customer Satisfaction", desc: "94% of our business comes from referrals" },
              { icon: <Clock size={40} />, title: "On-Time Delivery", desc: "7-9 day process with daily progress updates" },
              { icon: <Users size={40} />, title: "Partnership Approach", desc: "We treat your brand as our own reputation" }
            ].map((value, i) => (
              <motion.div key={value.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="value-card card-premium">
                {value.icon}
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="factory-cta-section">
        <div className="container">
          <motion.div initial={{ scale: 0.95 }} whileInView={{ scale: 1 }} className="factory-card card-premium">
            <h2>Visit Our Manufacturing Unit</h2>
            <p>See our in-house production process. Understand why quality matters.</p>
            <Link to="/contact" className="btn-primary">Schedule Factory Visit</Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
