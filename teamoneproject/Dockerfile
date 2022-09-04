# FROM node:current-alpine

# WORKDIR /app

# COPY package*.json ./

# RUN npm install 

# COPY . . /app/

# EXPOSE 3000 80

# CMD ["npm", "start"]

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY ./build .

ENTRYPOINT ["nginx", "-g", "daemon off;"]