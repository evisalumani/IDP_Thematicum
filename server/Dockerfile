# Create image based on the official Node 6 image from the dockerhub
FROM node:6

# Create a directory where our app will be placed
RUN mkdir -p /usr/src/app

# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/app

# Copy dependency definitions
COPY package.json /usr/src/app

# Install dependecies
RUN npm install

# Get all the code needed to run the app
COPY . /usr/src/app

# Add wait-for to control the start-up order of containers
RUN wget https://raw.githubusercontent.com/eficode/wait-for/master/wait-for && \
	chmod +x wait-for

# Expose the port the app runs in
EXPOSE 3000

# Serve the app
# The wait-for script causes a timeout on the Express service => just use the "npm start" command
# CMD ["./wait-for", "mongo-service:27017", "--", "npm", "start"]
CMD ["npm", "start"]