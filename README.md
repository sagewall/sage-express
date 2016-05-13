#Sage Express
## Deployment
- Install git `sudo apt-get install git`
- [Install NodeJS](https://nodejs.org/en/download/package-manager/)
- Install forever globally `sudo npm -g install forever`
- Clone git repository `git clone https://github.com/sagewall/sage-express.git`
- Change directories `cd sage-express`
- Run `npm install`
- SFTP certificates and keys to the `/cert folder`
- Create a new file `/db/credentials.js`
```javacript
    var credentials = {
       user: 'user',
       password: 'password'
    };
     module.exports = credentials;
```
- To seed skills collection run the following command with the correct username and password
```
mongoimport --host <hostname> --port <port> --db <database> --username <username> --password <password> --collection skills --type json --file db/skills.json --jsonArray --drop
```
- To seed the historic places collection run the following command with the correct username and password
```
mongoimport --host <hostname> --port <port> --db <database> --username <username> --password <password> --collection historic.places --type json --file db/historic.json --jsonArray --drop
```
- Forward port 443 to 3000 in iptables by creating a new file `/ect/init/custom-ip-tables.conf`
```
start on startup
task
exec iptables -t nat -A PREROUTING -p tcp --dport 443 -j REDIRECT --to-ports 3000
```
- Make sage-express run forever by creating a new file `/etc/init/sage-express.conf`
```
start on startup
exec forever start /full/path/to/sage-express/bin/www
```
- Reboot server