# pull official base image
FROM node:14-slim

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# ARG REACT_APP_AUTH0_CLIENT_ID
# ARG REACT_APP_AUTH0_DOMAIN
# ENV REACT_APP_AUTH0_CLIENT_ID ${REACT_APP_AUTH0_CLIENT_ID}
# ENV REACT_APP_AUTH0_DOMAIN ${REACT_APP_AUTH0_DOMAIN}

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm build-themes
# RUN npm install react-scripts@3.4.1 -g

# add app
COPY . ./

# start app
CMD ["npm", "start"]

