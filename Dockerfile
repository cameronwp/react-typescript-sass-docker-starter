FROM nginx:alpine

# Remove the default Nginx configuration file
RUN rm -v /etc/nginx/nginx.conf
ADD ./config/nginx/nginx.conf /etc/nginx/
ADD ./config/nginx/conf.d /etc/nginx/conf.d/

RUN mkdir /www
ADD ./build /www
ADD ./public /www
WORKDIR /www
EXPOSE 8080
CMD ["/usr/sbin/nginx", "-c", "/etc/nginx/nginx.conf"]
