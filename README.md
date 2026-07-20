# Luis Mora

Computer Science Engineering student at UTPL, Ecuador. I work on spiking neural networks built from real connectome data.

[LinkedIn](https://www.linkedin.com/in/ljmor/) · [Email](mailto:ljmora004@outlook.com) · [ORCID](https://orcid.org/YOUR-ID) · Loja, Ecuador

---

## What I'm working on

In October 2024 the FlyWire consortium published the first synapse-resolution map of an adult *Drosophila* brain: about 128,000 neurons and 53 million synapses. Shiu et al. then showed that this wiring alone, simulated as a leaky integrate-and-fire network, predicts real fly motor behaviour at roughly 95% accuracy. In March 2026 Eon Systems ran a whole embodied emulation of the fly in a physics engine.

All of those models share one limitation, and their authors say so themselves: the synaptic weights are static. The networks don't learn.

My undergraduate thesis adds the learning. I extract the Johnston's Organ auditory circuit from the FlyWire connectome, implement it in Brian2, add spike-timing-dependent plasticity and winner-take-all dynamics, and race it against a control network matched on neuron count, degree distribution and everything else I could hold fixed. Topology is the only thing that differs, so if one wins, I know why.

The question underneath it: does a topology shaped by evolution actually compute better than one we design? Nobody could test that before 2024.

→ Code and experiments: [`flywire-snn-stdp`](https://github.com/ljmor/flywire-snn-stdp)

---

## Work

**AI Evaluation Specialist / Technical Data Annotator** at LinkedIn, contract, since Apr 2026
Benchmark datasets and structured annotations for code generation and code editing models. Most of my time goes into finding the specific places where models break on multi-step, realistic engineering tasks.

**AI Research & Evaluation Engineer** at Scale AI, Jul 2025 – Jul 2026
LLM evaluation pipelines covering reasoning, safety, factuality, tool use and MCP compliance, with Python statistical logic as the ground-truth validator. RLHF and RLAIF evaluation, adversarial prompting, schema-based evaluation frameworks.

**Machine Learning Engineer** at Clipp, part-time, Oct 2024 – Aug 2025
Analytics across six product lines. Clustering on raw event logs to segment user behaviour, plus the feature engineering that made those models work at all.

**Full Stack Developer** at Clínica San José, Oct 2024 – Feb 2025
Clinic management system in React and Node, deployed and used in production.

---

## Things I've built

**[flywire-snn-stdp](https://github.com/ljmor/flywire-snn-stdp)** — Connectome-derived spiking neural network with STDP plasticity, benchmarked against a degree-matched random control. Brian2, NetworkX, Python.

**[Clipp Analytics Platform](https://github.com/ljmor/data_analytics_clipp)** — Microservice platform producing KPI dashboards for six Clipp service lines. I designed the architecture and built the ETL module: scheduled Airflow extraction into a central PostgreSQL store, served through FastAPI. Team of three. Docker, Airflow, FastAPI, Pandas, PostgreSQL, Next.js.

**[SIGMA-IA Clipp](https://github.com/ljmor/marketseg-clustering-clipp)** — User segmentation for the Clipp Events app, so advertising targets preference and behaviour instead of broadcasting. I led the project and built the clustering models. Team of three. Python, scikit-learn.

**[Insurance Policy AI Assistant](https://github.com/ji-berti/Insurance_Chatbot)** — Multi-tool agent for insurance workflows. RAG over a vectorised policy database, with live web search for anything the index doesn't hold. Team project; my contribution was [fill this in]. LangChain, FAISS, Gemini API, FastAPI, Docker.

## Tools I actually use

Python, Brian2, NumPy, Pandas, NetworkX, scikit-learn, PyTorch, TensorFlow, LangChain
JavaScript, React, Node.js, Express, SQL, FastAPI, Docker, AWS, Git

---

## Education

Computer Science Engineering, Universidad Técnica Particular de Loja, 2022 – expected Mar 2027
Thesis supervisor: Prof. Alexandra Cristina Gonzáles Eras

AnyoneAI, Machine Learning Engineer Specialization, 2025. Project-based industry programme, not a degree. Covered credit-risk modelling with gradient boosting, CNN image classification deployed on AWS, and ELT pipelines.

---

I'm looking for a research internship or research assistant position in neuromorphic computing or computational neuroscience, in Europe or elsewhere. If you work on spiking networks, connectomics or energy-efficient AI and something here overlaps with what you're doing, I'd like to hear from you: ljmora004@outlook.com
