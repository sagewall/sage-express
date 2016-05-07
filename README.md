#Sage Express
* This application uses https and requires a certificate and key be placed in a /cert folder
`/cert/server.crt`
`/cert/server.key`

* MongoDB credentials should be stored in credentials.js in the /db folder
```javacript
    var credentials = {
       user: 'user',
       password: 'password'
    };
     module.exports = credentials;
```
* To seed skills collection run the following command
```
mongoimport --host ds013901.mlab.com --port 13901 --db sage-express --username <username> --password <password> --collection skills --type json --file db/skills.json --jsonArray --drop
```
* To seed the historic places collection run the following command
```
mongoimport --host ds013901.mlab.com --port 13901 --db sage-express --username <username> --password <password> --collection historic.places --type json --file db/historic.json --jsonArray --drop
```
* To build docker image run the following command

`docker build -t sagewall/sage-express .`

* To run the docker image run the following command

`docker run -p 3000:3000 -d sagewall/sage-express`

* To forward port 443 to 3000 in iptables run the following command

`sudo iptables -t nat -A PREROUTING -p tcp --dport 443 -j REDIRECT --to-ports 3000`