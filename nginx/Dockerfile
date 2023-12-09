FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8096
ENTRYPOINT ["nginx", "-g", "daemon off;"]
