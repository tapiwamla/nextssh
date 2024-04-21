# Use official Node.js image as base
FROM node:latest as build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available) to /app
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code to the container
COPY . .

# Build the Next.js app for production
RUN npm run build

# Start a new stage for serving the production build
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available) to /app
COPY package*.json ./

# Install only production dependencies
RUN npm install --production

# Copy the production build from the previous stage
COPY --from=build /app/.next ./.next

# Expose port 3000
EXPOSE 3000

# Define the command to run the application
CMD ["npm", "start"]
