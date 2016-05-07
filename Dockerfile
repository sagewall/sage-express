FROM ubuntu:latest

RUN sudo apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
RUN sudo apt-get install -y nodejs
RUN sudo apt-get install -y build-essential

COPY . /sage-express
RUN cd /sage-express; npm install --production

EXPOSE 443
CMD ["node", "/sage-express/bin/www"]
