import React from 'react';
import '../assets/styles/Certifications.scss';

const certifications = [
  {
    title: 'React - The Complete Guide (incl. Next.js, Redux)',
    issuer: 'Udemy',
    date: 'Issued Apr 2026',
    credentialId: 'UC-5d93d8e1-e00e-4ef2-8ec0-313341a782ab',
  },
  {
    title: 'The Git & GitHub Bootcamp',
    issuer: 'Udemy',
    date: 'Issued Sep 2025',
    credentialId: 'UC-03f60639-d0bc-4e46-8551-8e0b2752eeb0',
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Udemy',
    date: 'Issued Oct 2024',
    credentialId: 'UC-4ae96958-49de-455d-a6f3-51e722d2353d',
  },
  {
    title: 'Running Jenkins on AWS',
    issuer: 'LinkedIn',
    date: 'Issued Aug 2024',
    skills: 'Jenkins, Amazon Web Services (AWS)',
  },
  {
    title: 'AWS Certified Solutions Architect Associate',
    issuer: 'Udemy',
    date: 'Issued May 2024',
    credentialId: 'UC-c912f549-ada9-489e-9e1a-c192335d86cf',
    skills: 'AWS Lambda, Cloud Computing',
  },
  {
    title: 'Building Transformer-Based Natural Language Processing Applications',
    issuer: 'NVIDIA',
    date: 'Issued Apr 2021',
  },
  {
    title: 'Fundamentals of Deep Learning',
    issuer: 'NVIDIA',
    date: 'Issued Apr 2021',
  },
];

function Certifications() {
  return (
    <section className="certifications-container" id="certifications">
      <div className="items-container certifications-section">
        <div className="section-heading">
          <h1>Certifications & Licenses</h1>
          <p>Selected credentials that reflect my growth across cloud, DevOps, AI, and modern web engineering.</p>
        </div>
        <div className="certifications-grid">
          {certifications.map((item) => (
            <div className="cert-card" key={item.title}>
              <div className="cert-card-top">
                <h3>{item.title}</h3>
                <span className="cert-badge">{item.issuer}</span>
              </div>
              <p className="cert-date">{item.date}</p>
              {item.credentialId && <p className="cert-meta">Credential ID: {item.credentialId}</p>}
              {item.skills && <p className="cert-meta">Skills: {item.skills}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
