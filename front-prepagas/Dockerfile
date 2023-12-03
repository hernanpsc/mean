FROM node:20.9.0-alpine as node
WORKDIR /usr/src/app
# Install dependencies and build the project.
COPY package*.json ./
RUN npm install npm@latest -g
RUN npm ci
COPY . .
RUN npm run build

### Stage 2
FROM nginx:1.25.3-alpine-slim


# Copy the Angular app's build artifacts from the specified output path

COPY --from=node /usr/src/app/dist/angular-compare /usr/share/nginx/html
COPY  config/default.conf /etc/nginx/conf.d/default.conf
