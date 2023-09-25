FROM node:current-alpine3.16

# Use ARG to set build-time arguments
ARG FRONTEND_PORT

# Set environment variables using ENV
ENV PORT=$FRONTEND_PORT

# Copy the source code
COPY . ./

# Install dependencies
RUN npm install --verbose


# Build the project
RUN npm run build --verbose

RUN rm -r src

# Expose the port specified by the ENV variable
EXPOSE $PORT

# Command to start your application
CMD ["sh", "-c", "npm run start:prod"]