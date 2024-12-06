FROM node:alpine

# Use ARG to set build-time arguments
ARG FRONTEND_PORT

# Copy the source code
COPY ./.env .
COPY ./yarn.lock .
COPY ./package.json .
COPY ./server.js .
COPY ./dist ./dist

# Install dependencies
RUN yarn install

# Expose the port specified by the ENV variable
EXPOSE $FRONTEND_PORT

# Command to start your application
CMD ["sh", "-c", "yarn start:prod"]
