# RJM Site

> [!WARNING]  
> RJM-Site has been ARCHIVED!
> Please see [rjmurg/site](https://github.com/rjmurg/site)

This repository contains the source code for my portfolio site. It is built using [SvelteKit](https://kit.svelte.dev/) and [Tailwind](https://tailwindcss.com/), and hosted on my private server.
This site is licensed under the [GNU General Public License v3.0](LICENSE.md).

## Development

To run the site locally, you will need to have [Node.js](https://nodejs.org/) installed. Once you have Node.js installed, you can run the following commands to get started:

```bash
npm install
npm run dev
```

This will start a development server on `localhost:5173`.
To allow you to connect other devices to the development server, you can run the following command:

```bash
npm run dev -- --host
```

This site is designed to be run in a Docker container, and a `Dockerfile` is included in the repository. To build the Docker image, you can run the following command:

```bash
docker build -t [image-name] .
```

To run the Docker container, you can run the following command:

```bash
docker run -d -p 3000:3000 [image-name]
```

This will start the container in detached mode and expose the site on port `3000`.

## Deployment

This site is served through a Traefik reverse proxy, and is deployed using Docker. To deploy the site, you can run the following command:

```bash
docker-compose up -d
```

This will build the Docker image and start the container in detached mode.
The labels included in the `docker-compose.yml` file are used by Traefik to route traffic to the container.

Changes to the site are deployed automatically.

## License

This site is licensed under the [GNU General Public License v3.0](LICENSE.md).

```

```
