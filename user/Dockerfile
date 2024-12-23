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

# Build the React app for production
RUN npm run build

# Expose the port that the frontend will run on (React default port is 3000)
EXPOSE 3000

# Command to run your app
CMD ["npm", "start"]
