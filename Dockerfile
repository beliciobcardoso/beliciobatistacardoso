FROM nginx
COPY ./www /usr/share/nginx/html
ENV NGINX_PORT=80
ENV NGINX_HOST=belicio.bcardoso.nom.br
EXPOSE 80