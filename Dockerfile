FROM node:current-alpine3.16

# Check if the .env file exists in the /path/to/ directory

WORKDIR /app

RUN echo "Contents of the current directory:" && ls && exit 1;

RUN if [ -f .env ]; then \
      echo ".env file exists"; \
    else \
      echo ".env file not found"; \
      exit 1; \  
    fi


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