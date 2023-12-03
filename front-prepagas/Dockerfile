FROM node:20.9.0-alpine as node
WORKDIR /app
# Install dependencies and build the project.
COPY package*.json ./
RUN npm install npm@latest -g
RUN npm ci
COPY . .
RUN npm run build

### Stage 2
FROM nginx:1.25.3-alpine-slim

WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy the Angular app's build artifacts from the specified output path

COPY --from=node /app/dist/angular-compare /usr/share/nginx/html

RUN chown nginx:nginx /usr/share/nginx/html/*

ENTRYPOINT ["nginx", "-g", "daemon off;"]