# Stage 1: Build
FROM node:current-alpine3.16

# Use ARG to set build-time arguments
ARG FRONTEND_PORT
ARG REACT_APP_HTTPS
ARG REACT_APP_API_ENDPOINT

# Set environment variables using ENV
ENV PORT=$FRONTEND_PORT
ENV REACT_APP_HTTPS=$REACT_APP_HTTPS
ENV REACT_APP_API_ENDPOINT=$REACT_APP_API_ENDPOINT

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