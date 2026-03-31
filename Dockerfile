# Build stage
FROM node:18-alpine as build

# Set working directory with your name
WORKDIR /shelly_li_final_site

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Build the app
RUN npm run build

# Production stage
FROM nginx:stable-alpine

# Copy built files from build stage
COPY --from=build /shelly_li_final_site/build /usr/share/nginx/html

# Copy custom nginx config if needed
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 5575
EXPOSE 5575

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
