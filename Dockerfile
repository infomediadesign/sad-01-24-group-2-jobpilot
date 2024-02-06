# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port on which your Node.js application will run (replace 3000 with your application's port if needed)
EXPOSE 3000

# Command to run your Node.js application
CMD [ "node", "server.js" ]  