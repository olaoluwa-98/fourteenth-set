FROM node:11.9-alpine as builder
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY ./frontend/package.json /usr/src/app/package.json
RUN npm install
COPY ./frontend/ /usr/src/app
RUN npm run build

FROM nginx:alpine
ADD ./backend/compose/production/nginx/nginx.tmpl /etc/nginx/nginx.conf
ADD ./backend/compose/production/nginx/mime.types /etc/nginx/mime.types
ADD ./backend/compose/production/nginx/dhparam-2048.pem /etc/ssl/certs/dhparam-2048.pem
COPY --from=builder /usr/src/app/build /etc/nginx/html/
ADD ./backend/compose/production/nginx/html/50x.html /etc/nginx/html/50x.html
EXPOSE 80 443