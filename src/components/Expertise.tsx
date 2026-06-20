import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import { faServer } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Spring Boot",
    "Java",
    "Microservices",
    "Apache Kafka",
    "PostgreSQL",
    "Redis",
    "REST APIs",
    "TypeScript",
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "Prometheus",
    "Grafana",
    "AWS",
    "Postman",
];

const labelsThird = [
    "OpenAI",
    "Claude API",
    "Groq",
    "LangChain",
    "LlamaIndex",
    "Qdrant",
    "Hugging Face",
    "Agent Design",
    "Streamlit",
    "Python",
    "Flask",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faServer} size="3x"/>
                    <h3>Backend & Distributed Systems</h3>
                    <p>I design and build distributed, event-driven microservices using Spring Boot and Apache Kafka. I have hands-on experience with retry mechanisms, exponential backoff, dead-letter queues, idempotency, and failover strategies — building systems that stay resilient under failure.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Observability</h3>
                    <p>I set up CI/CD pipelines, containerise services with Docker, and instrument applications with Prometheus and Grafana to track real-time metrics — including CPU spikes, error rates, and JVM health — so issues are caught before they become incidents.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>GenAI & LLM</h3>
                    <p>I build GenAI solutions using the latest LLM frameworks — from RAG pipelines and vector search to multi-step agentic systems. Currently deepening my expertise in designing AI agents using Claude, with a focus on tool use, memory, and orchestration patterns.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;