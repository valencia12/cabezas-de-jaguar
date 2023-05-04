# Base image
FROM node:current-alpine3.17

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Copy vite.config.json
COPY vite.config.json ./

# Copy vite.config.json
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

EXPOSE $FRONT_END_PORT 4433

# Start the application
CMD ["npm", "run", "start", "--port", "$FRONT_END_PORT"]
