#Sage Express
* This application uses https and requires a certificates and keys be placed in a /cert folder and configured in the bin/www file.

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

* To push the docker image to docker hub run the following command

`docker push sagewall/sage-express`

* To pull the docker image to docker hub run the following command

`docker pull sagewall/sage-express`

* To run the docker image run the following command

`docker run -p 3000:3000 --restart=always -d sagewall/sage-express`

* To forward port 443 to 3000 in iptables by adding a custom-ip-tables.conf to `/ect/init`
```
start on startup
task
exec iptables -t nat -A PREROUTING -p tcp --dport 443 -j REDIRECT --to-ports 3000
```
* Superuser command to forward port 443 to 3000 in iptables
`sudo iptables -t nat -A PREROUTING -p tcp --dport 443 -j REDIRECT --to-ports 3000`