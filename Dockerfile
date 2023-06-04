# Base image
FROM node:current-alpine3.17

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

# Install dependencies
RUN npm install

# Build the project
RUN npm run build

# Remove src files
RUN rm -rf ./src

# Read environment and use in build time
ARG FRONTEND_PORT
ENV PORT=$FRONTEND_PORT

EXPOSE $PORT

# Start the application
CMD ["sh", "-c", "serve -s ./dist -l $PORT"]
