import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="May 2025 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Senior Associate Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Synechron · U.S. Bank</h4>
            <p>
              Architected backend microservices for an enterprise productivity platform serving 500+ engineers and executives. Built React and Node-based dashboards, event-driven notifications, and fault-tolerant async workers for branch and ATM health monitoring.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb 2025 - May 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Development Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Flair Tech Solutions · CVS Health</h4>
            <p>
              Developed distributed Azure data pipelines ingesting millions of records from Teradata, automated ETL orchestration with Airflow, and improved backend latency through PostgreSQL optimization and caching.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2024 - Feb 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">SportExcitement</h4>
            <p>
              Built and deployed a mentorship platform on AWS with scalable REST APIs, secure authentication, CI/CD automation, and a React-based dashboard that reduced mentor matching time significantly.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 2018 - Jul 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">NVIDIA Corporation</h4>
            <p>
              Built automated validation frameworks for autonomous driving systems, maintained cloud-based simulation pipelines, and optimized Linux-based distributed workflows for higher throughput and reliability.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 2022 - May 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Master of Science in Computer Science</h3>
            <h4 className="vertical-timeline-element-subtitle">University of North Carolina at Charlotte</h4>
            <p>
              Advanced studies in distributed systems, software engineering, and modern cloud-native application development.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;