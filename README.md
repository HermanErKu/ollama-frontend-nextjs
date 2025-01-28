# Ollama Frontend NextJS

A [Next.js](https://nextjs.org) project which will act as the frontend application for an LLM hosted on the school server.

The server will be using [Ollama](https://ollama.com/) as a runner for the LLM models, and will mainly focus on the new [deepseek-r1](https://ollama.com/library/deepseek-r1) model.



## Features

Finished features:

- Text completion

ToDo:

- [ ] Login with authentication
- [ ] Code completion
- [ ] Chat mode
- [ ] Formatting LLM responses
- [ ] Working Dockerfile and docker-compose



## Getting started

Step-by-step installation guide using [Bun](https://bun.sh/).

### Prerequisites

You will need to have [Ollama](https://ollama.com/download) installed and started on you computer / server.

### Installing the project

Steps to run the development frontend server:

#### Installing project and packages

```bash
# Clone the repository
git clone https://github.com/HermanErKu/ollama-frontend-nextjs.git

# Navigate to the project repository
cd ollama-frontend-nextjs

# Install dependencies
bun install

# Run the development server
bun run dev
```

#### Installing project using dockerfile

Dockerfile will be finished soon



## Contribution

Contributions are welcome! Please open an issue or submit a pull request.