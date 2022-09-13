# Corrientes F5 Calendar-WhatsApp bot

## Private files to upload before running:

- `.env`

- `private/calendar.json`

### Run locally:

- npm i
- npm run dev

### Run with Docker:

- docker build -f Dockerfile.dev -t ctes_f5 .

- docker run -dp 4000:4000 ctes_f5

- docker logs ctes_f5

## Deploy:

### Linux:

- go to `deploy/linux` folder and use docker-compose

### Windwos:

- go to `deploy/windows` folder and setup

- run win+r `shell:startup`

- copy direct access of `.vbs` fiile
