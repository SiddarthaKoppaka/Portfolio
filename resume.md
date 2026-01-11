%-------------------------
% Resume in Latex
% Author : Jake Gutierrez
% Based  off of: https://github.com/sb2nov/resume
% License : MIT
%------------------------

\documentclass[letterpaper,9pt]{article}

\usepackage{latexsym}
\usepackage[empty]{fullpage}
\usepackage{titlesec}
\usepackage{marvosym}
\usepackage[usenames,dvipsnames]{color}
\usepackage{verbatim}
\usepackage{enumitem}
\usepackage[hidelinks]{hyperref}
\usepackage{fancyhdr}
\usepackage[english]{babel}
\usepackage{tabularx}
\input{glyphtounicode}


%----------FONT OPTIONS----------
% sans-serif
% \usepackage[sfdefault]{FiraSans}
% \usepackage[sfdefault]{roboto}
% \usepackage[sfdefault]{noto-sans}
% \usepackage[default]{sourcesanspro}

% serif
% \usepackage{CormorantGaramond}
% \usepackage{charter}


\pagestyle{fancy}
\fancyhf{} % clear all header and footer fields
\fancyfoot{}
\renewcommand{\headrulewidth}{0pt}
\renewcommand{\footrulewidth}{0pt}

% Adjust margins
\addtolength{\oddsidemargin}{-0.5in}
\addtolength{\evensidemargin}{-0.5in}
\addtolength{\textwidth}{1in}
\addtolength{\topmargin}{-.5in}
\addtolength{\textheight}{1.0in}

\urlstyle{same}

\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Sections formatting
\titleformat{\section}{
  \vspace{-7pt}\scshape\raggedright\large
}{}{0em}{}[\color{black}\titlerule \vspace{-6pt}]

% Ensure that generate pdf is machine readable/ATS parsable
\pdfgentounicode=1

%-------------------------
% Custom commands
\newcommand{\resumeItem}[1]{
  \item\small{
    {#1 \vspace{-4pt}}
  }
}

\newcommand{\resumeSubheading}[4]{
  \vspace{-2pt}\item
    \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
      \textbf{#1} & #2 \\
      \textit{\small#3} & \textit{\small #4} \\
    \end{tabular*}\vspace{-8pt}
}

\newcommand{\resumeSubSubheading}[2]{
    \item
    \begin{tabular*}{0.97\textwidth}{l@{\extracolsep{\fill}}r}
      \textit{\small#1} & \textit{\small #2} \\
    \end{tabular*}\vspace{-7pt}
}

\newcommand{\resumeProjectHeading}[2]{
    \item
    \begin{tabular*}{0.97\textwidth}{l@{\extracolsep{\fill}}r}
      \small#1 & #2 \\
    \end{tabular*}\vspace{-7pt}
}

\newcommand{\resumeSubItem}[1]{\resumeItem{#1}\vspace{-6pt}}

\renewcommand\labelitemii{$\vcenter{\hbox{\tiny$\bullet$}}$}

\newcommand{\resumeSubHeadingListStart}{\begin{itemize}[leftmargin=0.15in, label={}]}
\newcommand{\resumeSubHeadingListEnd}{\end{itemize}}
\newcommand{\resumeItemListStart}{\begin{itemize}}
\newcommand{\resumeItemListEnd}{\end{itemize}\vspace{-5pt}}

%-------------------------------------------
%%%%%%  RESUME STARTS HERE  %%%%%%%%%%%%%%%%%%%%%%%%%%%%


\begin{document}

%----------HEADING----------
% \begin{tabular*}{\textwidth}{l@{\extracolsep{\fill}}r}
%   \textbf{\href{http://sourabhbajaj.com/}{\Large Sourabh Bajaj}} & Email : \href{mailto:sourabh@sourabhbajaj.com}{sourabh@sourabhbajaj.com}\\
%   \href{http://sourabhbajaj.com/}{http://www.sourabhbajaj.com} & Mobile : +1-123-456-7890 \\
% \end{tabular*}

\begin{center}
    \textbf{\Huge \scshape Vamana Sesha Sai Siddartha Koppaka} \\ \vspace{1pt}
    \small +1 930-333-2483 $|$ \href{siddarthakoppaka@gmail.com}{\underline{siddarthakoppaka@gmail.com}} $|$ 
    \href{www.linkedin.com/in/siddartha-koppaka-551ab1204}{\underline{Linkedin-SiddarthaKoppaka}} $|$
    \href{https://github.com/SiddarthaKoppaka}{\underline{Github-SiddarthaKoppaka}} $|$
    \href{https://siddarthakoppaka.github.io/Portfolio/}{\underline{Portfolio}}
\end{center}


%-----------EDUCATION-----------
\section{Education}
  \resumeSubHeadingListStart
    \resumeSubheading
      {Indiana University}{Bloomington, IN}
      {Master of Science in Computer Science}{Aug 2023 - May 2025}
      % \small{Relevant Coursework : Artificial Intelligence,Algorithms,,Big Data,Data Structures,Database,Machine Learning,Object-Oriented Programming,Software Programming,Web/Mobile Development,Micro-Services Architecture, Container Architecture (e.g. Docker, Kubernetes),User Interface Design}
    \resumeSubheading
      {Gurukula Kangri (Deemed to be University)}{Haridwar, India}
      {Bachelor of Technology in Computer Science and Engineering}{Aug 2019 - May 2023}
  \resumeSubHeadingListEnd

%
%-----------PROGRAMMING SKILLS-----------
\section{Technical Skills}
\begin{itemize}[leftmargin=0.15in, label={}]
    \small{\item{
        \textbf{Programming \& Data Processing}{: Python, SQL, PostgreSQL, PySpark, Apache Spark, Airflow, Kafka, dbt, Snowflake, JS} \\
        \textbf{Machine Learning \& AI}{: Scikit-Learn, TensorFlow, PyTorch, Hugging Face, OpenAI API, LLMs, NLP, Time-Series Analysis, Computer Vision, transformers, LangChain, LangGraph, LangSmith, VertexAI, Ollama, NLTK, Spacy, RAGAS} \\
        \textbf{Cloud \& DevOps}{: AWS (S3, Lambda, ECS, SageMaker), GCP (BigQuery, Cloud Run), Docker, Kubernetes, CI/CD , Redis} \\
        \textbf{Data Visualization}{: Power BI, Tableau, Matplotlib, Seaborn, Plotly, d3.js} \\
        \textbf{Software Engineering}{: Large-scale distributed systems, Multithreading, Data processing systems, Pattern Recognition, Natural Language Processing}

    }}
\end{itemize}



%-----------EXPERIENCE-----------
\section{Experience}
  \resumeSubHeadingListStart

\resumeSubheading
  {AI Applications Engineer}{Dec 2024 -- Present}
  {Rearc}{Remote}
  \resumeItemListStart
    \resumeItem{Built RAG systems for clients using LangGraph and LangChain, serving production queries across 50K+ documents with Qdrant vector stores.}
    \resumeItem{Created evaluation pipelines measuring relevancy, hallucination, faithfulness, and tool call accuracy using RAGAS and custom metrics.}
    \resumeItem{Implemented guardrails to constrain model outputs and maintain conversation boundaries within client specifications.}
    \resumeItem{Deployed containerized AI services on AWS and GCP, monitoring inference latency and throughput with Prometheus.}
  \resumeItemListEnd

\resumeSubheading
  {Machine Learning Engineer - RA}{Nov 2024 -- Present}
  {Kelley School of Business - Indiana University}{Bloomington, IN}
  \resumeItemListStart
    \resumeItem{Built a RAG system using LangGraph and LangChain, achieving 92\% top-3 retrieval accuracy over a Qdrant vector index of 50K+ legal documents.}
    \resumeItem{Reduced ETL runtime by 20\% using PySpark and Dask for batch processing of 10M+ records.}
    \resumeItem{Fine-tuned LLM models with PyTorch for sentiment classification on 100K+ business reviews, reaching 90\% few-shot accuracy.}
    \resumeItem{Applied NLTK and spaCy for named entity recognition and dependency parsing across 3M+ sentences.}
    \resumeItem{Deployed Docker containers with Prometheus and Grafana monitoring for inference services on cloud instances.}
  \resumeItemListEnd


\resumeSubheading
  {AI/ML Developer}{May 2024 -- Aug 2024}
  {Hyphenova}{Remote}
  \resumeItemListStart
    \resumeItem{Developed features for the Hyphenova application using TypeScript and Next.js, improving response times by 10\%.}
    \resumeItem{Wrote unit and integration tests with Jest and React Testing Library, raising frontend test coverage to 85\%.}
    \resumeItem{Provisioned multi-cloud infrastructure with Terraform on AWS, Azure, and GCP, cutting setup time by 40\%.}
    \resumeItem{Automated CI/CD pipelines using Docker and Terraform, reducing deployment cycles by 40\%.}
    \resumeItem{Built real-time data pipelines with Apache Spark, Kafka, and AWS Data Lake for continuous analytics.}
  \resumeItemListEnd


  \resumeSubHeadingListEnd

%-----------PROJECTS-----------
\section{Projects}
\resumeSubHeadingListStart

\resumeProjectHeading
    {\textbf{AI-Powered Document Search Engine} $|$ \emph{FastAPI, LangChain, Qdrant, Llama 3, Docker, AWS, LLMs}}{Nov 2024 -- Mar 2025}
    \resumeItemListStart
        \resumeItem{Built a search system integrating Llama 3 via vLLM with Qdrant VectorDB and LangChain for document retrieval.}
        \resumeItem{Combined FAISS, BM25, and Qdrant to reduce query latency by 60\%, deploying the API on AWS using Bedrock and EC2.}
    \resumeItemListEnd

\resumeProjectHeading
    {\textbf{User Churn Prediction \& Retention Analysis} $|$ \emph{Big Data, Databricks, Azure, ML, CI/CD}}{May 2024 -- June 2024}
    \resumeItemListStart
        \resumeItem{Processed 50M+ telecom records using Spark on Databricks, automated ETL with Apache Airflow, and stored results in Azure Blob Storage.}
        \resumeItem{Trained XGBoost and LSTMs, achieving a 92.5\% F1-score, and tracked experiments with MLflow.}
    \resumeItemListEnd

\resumeProjectHeading
    {\textbf{Thinkwise: AI Idea Evaluator} $|$ \emph{LangGraph, LangChain, Gemini, FastAPI, MongoDB, ReactJS}}{Feb 2025 -- Apr 2025}
    \resumeItemListStart
        \resumeItem{Built a multi-agent system that ranks business ideas based on ROI and effort using Gemini-powered ReAct agents, cutting evaluation time by 70\%.}
        \resumeItem{Handled real-time analysis for 100+ concurrent users with session tracking stored in MongoDB.}
    \resumeItemListEnd

\resumeProjectHeading
    {\textbf{Buddy: Your Personal AI Companion} $|$ \emph{LangGraph, Redis, LangChain, Node.js, TypeScript, Google Cloud}}{Apr 2025 -- Present}
    \resumeItemListStart
        \resumeItem{Created a context-aware AI assistant that automates daily tasks, improving productivity tracking by 40\%.}
        \resumeItem{Maintained persistent user sessions across 500+ interactions using Redis for stateful memory and LangGraph.}
        \resumeItem{Integrated Twilio-based text-to-speech for voice conversations.}
    \resumeItemListEnd

\resumeSubHeadingListEnd


%-------------------------------------------

%-----------Certifications-----------
\section{Certifications}
 \begin{itemize}[leftmargin=0.15in, label={}]
    \small{\item{
     \textbf{AWS Cloud Practitioner}\hfill{Sep 2024 -- Sep 2027} \\
     \emph{Credential ID d8506a288f5b4e4cac01b453f6fece1d}  
    }}
    \small{\item{  
        \href{https://credentials.databricks.com/7b7505ff-5a5c-4447-871d-1b722b843837}{\textbf{Databricks Academy: Fundamentals Accreditation} }\hfill {Mar 2025 - Mar 2026}  
    }}
    \small{\item{  
        \textbf{Databricks AI Engineer Certification}\hfill {Dec 2024 - Dec 2027}  
    }}  
\end{itemize}
 


%-------------------------------------------
\end{document}