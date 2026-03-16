export const profile = {
  name: "Shubham Sharma",
  tagline: "DevOps Engineer | Cloud Architect | SRE",
  subtitle: "Building Reliable Infrastructure at Scale",
  summary:
    "DevOps Engineer with 5+ years of experience designing, automating, and managing scalable multi-cloud infrastructure across AWS, Azure, and GCP. Spearheaded FinOps initiatives achieving 25-30% cloud cost reduction, delivered a government-approved SRED project, and implemented enterprise GenAI/RAG solutions.",
  email: "sharmashubham33@gmail.com",
  phone: "+1 (437) 881-8521",
  location: "Mississauga, ON",
  linkedin: "https://linkedin.com/in/sharmashubham33",
  github: "https://github.com/sharmashubham33",
  website: "https://shubhamresume.vercel.app",
  resumeUrl: "/Shubham_Sharma_Resume.pdf",
};

export interface Experience {
  type: "work" | "education";
  title: string;
  organization: string;
  location: string;
  period: string;
  highlights: string[];
  technologies?: string[];
}

export const experiences: Experience[] = [
  {
    type: "work",
    title: "DevOps Engineer",
    organization: "EllisDon Corporation",
    location: "Mississauga, ON",
    period: "May 2023 – Present",
    highlights: [
      "Architected enterprise multi-cloud infrastructure across Azure, GCP, and AWS supporting production applications with 99.9% uptime",
      "Built end-to-end CI/CD pipelines using Jenkins, Azure DevOps, GitHub Actions, and ArgoCD with GitOps workflows",
      "Led FinOps initiative with Grafana cost dashboards achieving 25-30% reduction in cloud infrastructure spend",
      "Led cloud migrations (on-prem to cloud, AWS to Azure, Egnyte to Nasuni) with zero data loss and full Terraform IaC coverage",
      "Spearheaded government-approved SRED project — Slack bot for automated snapshot lifecycle management of 120+ Linux VMs",
      "Implemented IaC using Terraform and Ansible, automating provisioning across 120+ Linux servers with DR scripts and runbooks",
      "Engineered secure SFTP pipeline for Scotiabank financial data ingestion to Azure Storage meeting SOC2 compliance",
      "Managed AKS clusters with DevSecOps practices: SOC2, Wiz remediation, HashiCorp Vault/Boundary/Consul, Azure PIM/GCP PAM",
      "Architected enterprise GenAI/RAG solution using Azure OpenAI and LLMs for AI-powered knowledge retrieval",
      "Built automation workflows (n8n, Slack bots, Vertex AI) and conducted POC evaluations for GitHub Copilot, Claude Code, Grafana",
    ],
    technologies: [
      "Azure", "AWS", "GCP", "Terraform", "Ansible", "Kubernetes", "Docker",
      "Jenkins", "GitHub Actions", "ArgoCD", "Grafana", "Prometheus", "Datadog",
      "HashiCorp Vault", "Python", "Bash", "Azure OpenAI",
    ],
  },
  {
    type: "work",
    title: "Software Support Specialist",
    organization: "CPOS Inc",
    location: "Vaughan, ON",
    period: "January 2022 – April 2023",
    highlights: [
      "Administered AWS cloud infrastructure (EC2, RDS, S3, VPC, IAM, ELB, Auto Scaling) with on-call incident response",
      "Implemented CI/CD pipelines using Jenkins, CircleCI, and GitLab for containerized microservices",
      "Deployed containerized apps using Docker, Kubernetes, ECS, Fargate with Terraform IaC and serverless architectures",
    ],
    technologies: [
      "AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "CircleCI",
      "Lambda", "API Gateway", "FluentBit",
    ],
  },
  {
    type: "work",
    title: "Software Development Engineer",
    organization: "Imi Ink Pvt. Ltd.",
    location: "Noida, India",
    period: "January 2021 – August 2021",
    highlights: [
      "Developed CI/CD pipelines, cloud-based web services, and Python backend applications in cross-functional Agile teams",
      "Optimized order fulfillment applications through performance tuning and root cause analysis, increasing repeat orders by 8%",
    ],
    technologies: ["Python", "C++", "CI/CD", "Agile"],
  },
  {
    type: "education",
    title: "Post Graduate Certificate, Cyber Security",
    organization: "Centennial College",
    location: "Scarborough, ON",
    period: "Sep 2022 – Mar 2023",
    highlights: ["GPA: 4.3/4.5", "Network Security, Cloud Security, Cryptography, Cyber Forensics, Ethical Hacking"],
  },
  {
    type: "education",
    title: "Post Graduate Certificate, Project Management – IT",
    organization: "Seneca College",
    location: "North York, ON",
    period: "Sep 2021 – Apr 2022",
    highlights: ["GPA: 3.9/4.0"],
  },
  {
    type: "education",
    title: "Bachelor of Computer Science",
    organization: "University of Delhi",
    location: "New Delhi, India",
    period: "Jul 2018 – May 2021",
    highlights: ["GPA: 4.0/4.0"],
  },
];

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
}

export const projects: Project[] = [
  {
    title: "GenAI-Powered Incident Response & Runbook Automation (AIOps)",
    description:
      "AI-enhanced incident management system using Azure OpenAI and RAG pipeline with vector database for auto-diagnosing production alerts and suggesting remediation steps.",
    technologies: ["Azure OpenAI", "RAG", "Prometheus", "Alertmanager", "Slack Bot", "Vector DB", "Python"],
    highlights: [
      "Auto-diagnose Prometheus/Alertmanager alerts using indexed runbooks",
      "Correlate with past incidents for pattern-based remediation",
      "Human-in-the-loop approval with confidence thresholds",
      "Generate post-incident reviews via Slack bot",
    ],
  },
  {
    title: "End-to-End DevSecOps Pipeline with Compliance Gates",
    description:
      "CI/CD pipeline from commit to production with automated security scanning, policy enforcement, and SOC2-compliant audit trails.",
    technologies: ["GitHub Actions", "SonarQube", "Trivy", "Cosign", "OPA/Gatekeeper", "HashiCorp Vault", "SBOM"],
    highlights: [
      "Automated SAST with SonarQube and container scanning with Trivy",
      "Image signing with Cosign and OPA/Gatekeeper policy enforcement",
      "SBOM generation for software supply chain transparency",
      "SOC2-compliant audit trails for regulated environments",
    ],
  },
  {
    title: "SRE Observability Platform with SLO-Driven Alerting",
    description:
      "Full observability stack implementing the three pillars (metrics, logs, traces) with SLI/SLO definitions and error budget burn-rate dashboards.",
    technologies: ["Prometheus", "Loki", "OpenTelemetry", "Grafana", "Go", "Python", "Kubernetes"],
    highlights: [
      "Metrics (Prometheus), Logs (Loki), Traces (OpenTelemetry) pipeline",
      "SLI/SLO definitions with error budget burn-rate Grafana dashboards",
      "Custom Go/Python exporters for application-specific metrics",
      "Alertmanager-driven automated runbooks for K8s microservices",
    ],
  },
];

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Cloud Platforms",
    skills: ["AWS", "Azure", "GCP", "EC2", "S3", "Lambda", "AKS", "EKS", "ECS"],
  },
  {
    category: "Containers & Orchestration",
    skills: ["Docker", "Kubernetes", "Helm", "Fargate", "ECR/ACR"],
  },
  {
    category: "IaC & Configuration",
    skills: ["Terraform", "Ansible", "AWS CDK", "CloudFormation", "ARM Templates"],
  },
  {
    category: "CI/CD & GitOps",
    skills: ["Jenkins", "GitHub Actions", "Azure DevOps", "GitLab CI/CD", "ArgoCD", "Git"],
  },
  {
    category: "Monitoring & Observability",
    skills: ["Datadog", "Grafana", "Prometheus", "CloudWatch", "ELK Stack", "FluentBit", "Splunk"],
  },
  {
    category: "Security & Compliance",
    skills: ["HashiCorp Vault", "Boundary", "Consul", "Wiz", "SOC2", "DevSecOps", "PIM/PAM"],
  },
  {
    category: "AI & Automation",
    skills: ["Azure OpenAI", "GenAI", "RAG", "LLMs", "Vertex AI", "n8n", "Slack Bots", "Prompt Engineering"],
  },
  {
    category: "Programming & Scripting",
    skills: ["Python", "Bash/Shell", "PowerShell", "Go", "C#", "JavaScript", "SQL"],
  },
  {
    category: "Databases & Messaging",
    skills: ["PostgreSQL", "MySQL", "Redis", "DynamoDB", "BigQuery", "Kafka", "RabbitMQ"],
  },
  {
    category: "OS & Networking",
    skills: ["Linux", "Windows Server", "VPC/VNet", "DNS", "Load Balancing", "Nginx", "REST APIs"],
  },
];

export interface Certification {
  title: string;
  issuer: string;
  badge: string;
  link: string;
  date?: string;
  image: string;
}

export const certifications: Certification[] = [
  // Microsoft Azure Certifications (5)
  { title: "Azure Solutions Architect Expert", issuer: "Microsoft", badge: "AZ-305", date: "", link: "https://learn.microsoft.com/api/credentials/share/en-us/ShubhamSharma-4027/14C1D487EDDD212A?sharingId=EFBF278876C841B9", image: "cc" },
  { title: "Azure Security Engineer Associate", issuer: "Microsoft", badge: "AZ-500", date: "", link: "https://coursera.org/share/8ebf3aaaa02ae861ca2aacc640367ebd", image: "bb" },
  { title: "Azure Administrator Associate", issuer: "Microsoft", badge: "AZ-104", date: "Jul 2023", link: "https://learn.microsoft.com/api/credentials/share/en-us/ShubhamSharma-4027/F52BD55F43FFFD85?sharingId", image: "e" },
  { title: "Azure Developer Associate", issuer: "Microsoft", badge: "AZ-204", date: "Apr 2024", link: "https://coursera.org/share/4f476d178bac84618ba9aca804eaf1e6", image: "s" },
  { title: "Azure AI Fundamentals", issuer: "Microsoft", badge: "AI-900", date: "", link: "https://learn.microsoft.com/api/credentials/share/en-us/ShubhamSharma-4027/BEC3DB8213EF7192?sharingId=EFBF278876C841B9", image: "dd" },
  // AWS Certifications
  { title: "AWS Certified Solutions Architect – Associate", issuer: "AWS", badge: "SAA", date: "Aug 2022", link: "https://www.credly.com/badges/0035fbce-fb50-47d3-955c-7255f21615d4/linked_in_profile", image: "r" },
  { title: "AWS Cloud Solutions Architect", issuer: "AWS", badge: "CSA", date: "Aug 2023", link: "https://coursera.org/share/4b8eda4bb583aba16764c5799615c5c5", image: "a" },
  // Professional Certificates
  { title: "Google Project Management", issuer: "Google", badge: "PM", date: "Oct 2022", link: "https://coursera.org/share/427ea65f6ef1bb950e350740958157bb", image: "q" },
  { title: "Generative AI Leader", issuer: "Google", badge: "GenAI", date: "", link: "https://coursera.org/share/2670299dca7b942fbd50cdb823b29b89", image: "aa" },
  { title: "IBM Cybersecurity Analyst Professional Certificate", issuer: "IBM", badge: "CYBER", date: "Apr 2023", link: "https://www.credly.com/badges/a7f65c47-3c4c-445b-b665-b26b39cda858/linked_in_profile", image: "n" },
  { title: "Meta Back-End Developer Certificate", issuer: "Meta", badge: "BE", date: "Apr 2024", link: "https://www.credly.com/badges/5bb760d6-cb03-4880-ba9e-f4e583c58801/public_url", image: "x" },
  // AWS Skill Badges
  { title: "AWS Knowledge: Amazon EKS", issuer: "AWS", badge: "EKS", date: "Apr 2024", link: "https://www.credly.com/badges/ad647033-2366-46c9-91ef-8f6b344577a1/public_url", image: "t" },
  { title: "AWS Knowledge: Networking Core", issuer: "AWS", badge: "NET", date: "Dec 2024", link: "https://www.credly.com/badges/b9067542-ccda-4616-bafc-2c5e042efba1/public_url", image: "u" },
  { title: "AWS Knowledge: Migration Foundations", issuer: "AWS", badge: "MIG", date: "Dec 2024", link: "https://www.credly.com/badges/1b9f521c-56e4-40e9-b0e2-5d595f5b9dba/public_url", image: "v" },
  { title: "AWS: Well-Architected Proficient", issuer: "AWS", badge: "WAP", date: "Dec 2024", link: "https://www.credly.com/badges/863d4380-40d4-4bd4-981b-f89c26cc1da2/public_url", image: "w" },
  { title: "AWS Knowledge: Serverless", issuer: "AWS", badge: "SLS", date: "Jun 2023", link: "https://www.credly.com/badges/aff5af50-9eee-4177-b5b7-681f3c060838/linked_in_profile", image: "k" },
  { title: "AWS Knowledge: Data Protection & DR", issuer: "AWS", badge: "DR", date: "Jul 2023", link: "https://www.credly.com/badges/401cd95a-fce7-4bb0-ac4a-b30150640a02/linked_in_profile", image: "b" },
  { title: "AWS Knowledge: Storage Technologist", issuer: "AWS", badge: "STG", date: "Jul 2023", link: "https://www.credly.com/badges/9df37adc-81be-4c8a-9075-9b4214d68ccc/linked_in_profile", image: "d" },
  { title: "AWS Knowledge: Block Storage", issuer: "AWS", badge: "BLK", date: "Jun 2023", link: "https://www.credly.com/badges/9007d875-f00d-4088-a874-8e6f8d226ca8/linked_in_profile", image: "g" },
  { title: "AWS Knowledge: Data Migration", issuer: "AWS", badge: "DMG", date: "Jun 2023", link: "https://www.credly.com/badges/c89a64cb-c55c-4063-b4f7-ed9fb9e29b41/linked_in_profile", image: "h" },
  { title: "AWS Knowledge: File Storage", issuer: "AWS", badge: "FS", date: "Jun 2023", link: "https://www.credly.com/badges/88913f05-f8b1-4ea8-adf9-c01e5f18a3c9/linked_in_profile", image: "i" },
  { title: "AWS Knowledge: Object Storage", issuer: "AWS", badge: "OBJ", date: "Jun 2023", link: "https://www.credly.com/badges/af75fe3a-b5de-4637-be2e-7d49fdd2357a/linked_in_profile", image: "j" },
  { title: "AWS Knowledge: Storage Core", issuer: "AWS", badge: "SC", date: "Jun 2023", link: "https://www.credly.com/badges/df8b35d5-cae1-4b86-b689-0ff84d079083/linked_in_profile", image: "l" },
  { title: "AWS Knowledge: Events and Workflows", issuer: "AWS", badge: "EVT", date: "Apr 2024", link: "https://www.credly.com/badges/2920ffcd-f78a-42a1-a6ae-eb284f68b7c9/public_url", image: "y" },
  { title: "AWS Knowledge: Compute", issuer: "AWS", badge: "CMP", date: "Apr 2024", link: "https://www.credly.com/badges/6110b1f8-c9ab-4354-a380-d8dc0d497660/public_url", image: "z" },
  { title: "AWS Knowledge: Amazon Braket", issuer: "AWS", badge: "BRK", date: "Jun 2024", link: "https://www.credly.com/badges/d2c3dcc6-d910-460c-be3a-bd24a0dc5341/public_url", image: "a1" },
  { title: "AWS Knowledge: Cloud Game Dev", issuer: "AWS", badge: "GAM", date: "Jun 2023", link: "https://www.credly.com/badges/f9422418-030e-473c-a9bf-5dd06378a4a9/linked_in_profile", image: "f" },
  { title: "AWS Knowledge: Media & Entertainment", issuer: "AWS", badge: "M&E", date: "Jul 2023", link: "https://www.credly.com/badges/b0569cac-7ae6-4238-8e3e-bd5d777e9233/linked_in_profile", image: "c" },
  { title: "AWS Learning: Cloud Essentials", issuer: "AWS", badge: "CE", date: "May 2023", link: "https://www.credly.com/badges/40f1bf9f-dd69-40af-ac88-4840615edff6/linked_in_profile", image: "m" },
  { title: "AWS Learning: Architecting", issuer: "AWS", badge: "ARC", date: "Mar 2023", link: "https://www.credly.com/badges/3fffb416-ef92-4e83-9859-e7cf54b2ea29/linked_in_profile", image: "o" },
  { title: "Verified International Academic Qualifications", issuer: "WES", badge: "WES", date: "Mar 2023", link: "https://www.credly.com/badges/d42e8e65-0e85-45ad-9f8d-bca447532f76/linked_in_profile", image: "p" },
];

export const profileTypes = [
  {
    id: "recruiter",
    label: "Recruiter",
    color: "#e50914",
    description: "Experience, Skills & Certifications",
  },
  {
    id: "hiring-manager",
    label: "Hiring Manager",
    color: "#0071eb",
    description: "Projects, Impact & Leadership",
  },
  {
    id: "engineer",
    label: "Fellow Engineer",
    color: "#46d369",
    description: "Tech Stack, Projects & GitHub",
  },
  {
    id: "visitor",
    label: "Curious Visitor",
    color: "#f5c518",
    description: "Everything About Me",
  },
];
