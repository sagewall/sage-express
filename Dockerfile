FROM ubuntu:latest

RUN sudo apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
RUN sudo apt-get install -y nodejs
RUN sudo apt-get install -y build-essential

COPY package.json /sage-express/package.json
RUN cd /sage-express; npm install --production

COPY . /sage-express

EXPOSE  3000
CMD ["node", "/sage-express/bin/www"]
