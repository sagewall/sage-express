#Sage Express
* Deployment
1.  Install git `sudo apt-get install git`
2.  [Install NodeJS](https://nodejs.org/en/download/package-manager/)
3.  Install forever globally `sudo npm -g install forever`
4.  Clone git repository `git clone https://github.com/sagewall/sage-express.git`
5.  Change directories `cd sage-express`
6.  Run `npm install`
7.  SFTP certificates and keys to the `/cert folder`
8.  Create a new file `/db/credentials.js`
```javacript
    var credentials = {
       user: 'user',
       password: 'password'
    };
     module.exports = credentials;
```
9.  To seed skills collection run the following command with the correct username and password
    ```
    mongoimport --host <hostname> --port <port> --db <database> --username <username> --password <password> --collection skills --type json --file db/skills.json --jsonArray --drop
    ```
10.  To seed the historic places collection run the following command with the correct username and password
    ```
    mongoimport --host <hostname> --port <port> --db <database> --username <username> --password <password> --collection historic.places --type json --file db/historic.json --jsonArray --drop
    ```
11.  Forward port 443 to 3000 in iptables by creating a new file `/ect/init/custom-ip-tables.conf`
```
start on startup
task
exec iptables -t nat -A PREROUTING -p tcp --dport 443 -j REDIRECT --to-ports 3000
```
12.  Make sage-express run forever by creating a new file `/etc/init/sage-express.conf`
```
start on startup
exec forever start /full/path/to/sage-express/bin/www
```
13.  Reboot server