# Stage 1: Build
FROM node:current-alpine3.16

# Check if the .env file exists in the /path/to/ directory
RUN if [ -f /path/to/.env ]; then echo ".env file exists"; else echo ".env file not found"; fi

# Copy package.json and package-lock.json
COPY package*.json ./

# Copy the source code
COPY . ./

# Install dependencies
RUN npm install --verbose

# Build the project
RUN npm run build

# Remove source 
RUN rm -r src

# Expose the port specified by the ENV variable
EXPOSE $PORT

# Command to start your application
CMD ["sh", "-c", "npm run start:prod"]