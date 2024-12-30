# Step 1: Build stage
FROM node:18-alpine AS build
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build

# Step 2: Production stage
FROM node:18-alpine
WORKDIR /app
COPY --from=build /app/static ./static
COPY --from=build /app/package*.json ./
RUN npm ci --production --ignore-scripts
COPY --from=build /app/build ./

CMD ["node", "./"]
