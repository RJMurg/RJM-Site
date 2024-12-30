# Step 1: Build stage
FROM node:18-alpine AS build
WORKDIR /app
COPY . .
RUN npm ci && npm run build

# Step 2: Production stage
FROM node:18-alpine
WORKDIR /app
COPY --from=build /app/static ./static
COPY --from=build /app/package*.json ./
RUN npm ci --production --ignore-scripts
COPY --from=build /app/build ./

HEALTHCHECK --interval=1m --timeout=30s --start-period=10s --start-interval=3s \
    CMD ["sh", "-c", "curl -f http://localhost:3000/ || exit 1"]

CMD ["node", "./"]
