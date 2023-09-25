FROM node:alpine

# Use ARG to set build-time arguments
ARG FRONTEND_PORT
# Set environment variables using ENV
ENV PORT=$FRONTEND_PORT

# Copy the source code
COPY ./dist .

# Install dependencies
RUN yarn install

# Expose the port specified by the ENV variable
EXPOSE $PORT

# Command to start your application
CMD ["sh", "-c", "yarn start:prod"]