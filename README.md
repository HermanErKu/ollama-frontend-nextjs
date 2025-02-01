# Ollama Frontend NextJS

A [Next.js](https://nextjs.org) project which will act as the frontend application for an LLM hosted on the school server.

The server will be using [Ollama](https://ollama.com/) as a runner for the LLM models, and will mainly focus on the new [deepseek-r1](https://ollama.com/library/deepseek-r1) model.



## Features

ToDo:

- [X] Text completion
- [ ] Login with authentication
- [ ] Code completion
- [ ] Chat mode
- [ ] Formatting LLM responses
- [X] Working Dockerfile and docker-compose



## Getting started

Step-by-step installation guide using [Yarn](https://yarnpkg.com/).


### Installing the project


#### Installing project and packages

Steps to run the development frontend server:

This requires that you have [Ollama](https://ollama.com/download) downloaded and running on your localhost:11434

```bash
# Clone the repository
git clone https://github.com/HermanErKu/ollama-frontend-nextjs.git

# Navigate to the project repository
cd ollama-frontend-nextjs

# Install dependencies
yarn install

# Run the development server
yarn dev
```

#### Installing project using dockerfile

This will require Docker installed on you server/computer.

By running the program with the included docker-compose file, the ollama server will start for you. This makes this solution the easiest way to intall.

``` bash
# Clone the repository
git clone https://github.com/HermanErKu/ollama-frontend-nextjs.git

# Navigate to the project repository
cd ollama-frontend-nextjs

# Run the docker container
docker compose up --build
```


## Contribution

Contributions are welcome! Please open an issue or submit a pull request.