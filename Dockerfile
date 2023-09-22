# Stage 1: Build
FROM node:current-alpine3.16 as build

# Use ARG to set build-time arguments
ARG FRONTEND_PORT
ARG REACT_APP_HTTPS
ARG REACT_APP_API_ENDPOINT

# Set environment variables using ENV
ENV PORT=$FRONTEND_PORT
ENV REACT_APP_HTTPS=$REACT_APP_HTTPS
ENV REACT_APP_API_ENDPOINT=$REACT_APP_API_ENDPOINT

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install development dependencies (if needed)
RUN npm install

# Copy the source code
COPY . ./

# Build the project
RUN npm run build

# Stage 2: Production Image
FROM node:current-alpine3.16

# Set the working directory
WORKDIR /app

# Copy the built application from the build stage
COPY --from=build /app/build ./

# Expose the port specified by the ENV variable
EXPOSE $PORT

# Command to start your application
CMD ["sh", "-c", "npm run start:build -- -l $PORT"]