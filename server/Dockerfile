FROM node:18-slim

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app

RUN npm install

COPY . /usr/src/app

EXPOSE 3000

CMD ["npm","start"]


# FROM node:18-slim
# WORKDIR /app

# # Install dependencies and build the project.
# COPY package*.json ./
# RUN npm install
# COPY . .

# RUN npm install -g pm2

# EXPOSE 5200
# RUN npm run build

# # Run the web service on container startup.
# CMD ["pm2-runtime", "dist/server.js"]
