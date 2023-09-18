# Base image
FROM node:current-alpine3.16

# Use ARG to set build-time arguments
ARG FRONTEND_PORT
ARG REACT_APP_HTTPS
ARG REACT_APP_API_ENDPOINT

# Set environment variables using ENV
ENV FRONTEND_PORT=$FRONTEND_PORT
ENV REACT_APP_HTTPS=$REACT_APP_HTTPS
ENV REACT_APP_API_ENDPOINT=$REACT_APP_API_ENDPOINT

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Copy tailwind.config.json
COPY tailwind.config.js ./

# Copy postcss.config.js file
COPY postcss.config.js ./

# Copy source project
COPY src ./src

# Copy source project
COPY public ./public

# Install dependencies
RUN npm install --verbose

# Build the project
RUN npm run build

# Remove src files
RUN rm -rf ./src

EXPOSE $PORT

# Start the application
CMD ["sh", "-c", "npm run start:build -- -l $PORT"]
