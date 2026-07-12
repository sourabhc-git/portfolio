import React from "react";
import mock01 from '../assets/images/usbank.png';
import mock02 from '../assets/images/cvs.png';
import mock03 from '../assets/images/se.avif';
import mock04 from '../assets/images/nvidia.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Selected Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <img src={mock01} className="zoom" alt="Enterprise productivity platform" width="100%"/>
                <h2>Enterprise Productivity Platform</h2>
                <p>Built backend services for a large-scale productivity platform integrating Jira, Git, and CI/CD workflows with event-driven notifications and observability for 500+ users.</p>
            </div>
            <div className="project">
                <img src={mock02} className="zoom" alt="Pharmacy benefit management data platform" width="100%"/>
                <h2>Pharmacy Benefit Management Data Platform</h2>
                <p>Designed fault-tolerant Azure pipelines to ingest and process millions of records daily, modernizing data movement with Airflow, Service Bus, and PostgreSQL.</p>
            </div>
            <div className="project">
                <img src={mock03} className="zoom" alt="SportExcitement mentorship platform" width="100%"/>
                <h2>SportExcitement Mentorship Platform</h2>
                <p>Created an AWS-hosted mentorship platform with scalable REST APIs, CI/CD automation, and a React dashboard that improved onboarding and mentor matching efficiency.</p>
            </div>
            <div className="project">
                <img src={mock04} className="zoom" alt="Autonomous driving validation pipelines" width="100%"/>
                <h2>Autonomous Driving Validation Pipelines</h2>
                <p>Developed and optimized cloud-based validation systems for large-scale autonomous driving simulations, improving test coverage, execution efficiency, and reliability.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;