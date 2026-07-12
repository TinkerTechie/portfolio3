# Aparna Singh - Personal Portfolio

Welcome to my personal portfolio repository. This project serves as a central hub to showcase my software engineering projects, hackathon participations, certifications, and technical skills.

## Overview

The portfolio is built using standard web technologies (HTML, CSS, JavaScript) and relies on a structured data directory to dynamically load projects, certificates, and hackathon details. This architecture allows for easy maintenance and updates without needing to modify the core markup.

## Features

- Dynamic Project Rendering: Projects are loaded from JavaScript objects, displaying key details like tech stacks, architectures, and metrics.
- Certificate Gallery: A dedicated section showcasing both photo and text-based certificates, including verifications from Google, HackerRank, Hacktoberfest, and more.
- Responsive Design: The user interface is built to be clean, modern, and accessible across different screen sizes.

## Project Structure

- /data: Contains the raw JavaScript data objects (projects.js, certificates.js, hackathons.js) that populate the portfolio.
- /assets: Houses all static media, including certificate images, project screenshots, and icons.
- /js: Contains the core JavaScript logic for rendering data and handling user interactions.
- index.html: The main entry point and structural template for the portfolio.

## Key Projects Showcased

- FitVibe: Multi-agent Flask backend leveraging Groq LLMs.
- Argus: A LangGraph-orchestrated RAG research assistant.
- Socratic Misconception Mapper: An adaptive AI tutor built on FastAPI.
- FakeNewsDetector: An agentic news-credibility system using scikit-learn and LLMs.

## Running Locally

To view the portfolio locally, you can serve the directory using any basic HTTP server. For example, using Python:

```bash
python3 -m http.server 3000
```

Then, navigate to http://localhost:3000 in your web browser.

## License

All rights reserved.
