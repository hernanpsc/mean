FROM node:20.9.0-alpine as node
WORKDIR /usr/src/app
# Install dependencies and build the project.
COPY package*.json ./
RUN npm install npm@latest -g
RUN npm ci
COPY . .
RUN npm run build #dist

### Stage 2
FROM nginx:1.13.12-alpine
# Copy the Angular app's build artifacts from the specified output path

COPY --from=build /usr/src/app/dist /usr/share/nginx/html
COPY  nginx.config /etc/nginx/config.d/defauld.conf
