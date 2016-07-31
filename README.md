#Sage Express
## Deployment
- Install git `sudo apt-get install git`
- [Install NodeJS](https://nodejs.org/en/download/package-manager/)
- Clone git repository `git clone https://github.com/sagewall/sage-express.git`
- Change directories `cd sage-express`
- Run `npm install`
- SFTP /cert and /db folder with sensitive contents

- If needed seed skills collection run the following command with the correct username and password
```
mongoimport --host <hostname> --port <port> --db <database> --username <username> --password <password> --collection skills --type json --file db/skills.json --jsonArray --drop
```
- If needed seed the historic places collection run the following command with the correct username and password
```
mongoimport --host <hostname> --port <port> --db <database> --username <username> --password <password> --collection historic.places --type json --file db/historic.json --jsonArray --drop
```
- Forward port 443 to 3000 on startup by adding this command to `/etc/rc.local`
```
iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 443 -j REDIRECT --to-port 3000
```
- Use pm2 to run the application in the background
```
sudo npm install pm2 -g
sudo pm2 start bin/www
sudo pm2 save
sudo pm2 startup ubuntu
```
- Reboot server
