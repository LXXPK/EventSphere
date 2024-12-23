# Use official Node.js image as the base
FROM node:16

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install the dependencies (this will be cached if the dependencies don't change)
RUN npm install

# Copy all files from your project into the container
COPY . .

# Expose the port that the backend will run on (change it if you use a different port)
EXPOSE 5000

# Command to run your app
CMD ["node", "index.js"]
