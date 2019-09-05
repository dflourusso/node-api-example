## Development

Manage dependencies

```bash
docker-compose -f docker-compose-cli.yml run cli yarn add express
```

Start server

```bash
docker-compose up
```

Build for production

```bash
docker-compose -f docker-compose-cli.yml run cli yarn build
```
