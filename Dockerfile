# Base image
FROM node:current-alpine3.18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Copy vite.config.json
COPY vite.config.js ./

# Copy index file
COPY index.html ./

# Copy source project
COPY src ./src

# Copy source project
COPY public ./public

# Update to latest node version
RUN npm i npm@latest -g

# Install dependencies
RUN npm install --verbose

# Build the project
RUN npm run build

# Remove src files
RUN rm -rf ./src

# Read environment and use in build time
ARG FRONTEND_PORT
ENV PORT=$FRONTEND_PORT

EXPOSE $PORT

# Start the application
CMD ["sh", "-c", "npm run start -- -l $PORT"]
