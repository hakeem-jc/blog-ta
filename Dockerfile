FROM ubuntu
CMD docker pull wefoxgroup/wg-web-challenge:latest
CMD docker run --rm -p 3000:3000 wefoxgroup/wg-web-challenge