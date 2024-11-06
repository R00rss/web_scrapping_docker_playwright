# Web scrapping with docker and playwright


## Before You Start

Ensure you have the following packages installed:

- Docker

## Installation

1. Clone the repository

```bash
git clone https://github.com/R00rss/web_scrapping_docker_playwright
```

2. Run the docker build command

```bash
docker build -t migracion_itinerarios_web_scrapping .
```
3. Run the docker run command
```bash 
docker run --network="host" migracion_itinerarios_web_scrapping
```
## How It Works

The script will open a browser, navigate to the specified URL, and extract the data from the table.