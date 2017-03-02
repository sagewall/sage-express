#Sage Express
## Ubuntu Server Deployment
- Install git `sudo apt install git`
- Create .gitconfig file in `/home/ubuntu/`
```
[user]
	name = github username
	email = github password
```
- [Install NodeJS](https://nodejs.org/en/download/package-manager/)
- Clone git repository `git clone https://github.com/sagewall/sage-express.git`
- Change directories `cd /home/ubuntu/sage-express`
- Run `npm install`
- Forward port 443 to 3000 on startup by adding this command to `/etc/rc.local`
```
iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 3000
```
- Install pm2 `sudo npm install pm2 -g`
- Start application with pm2 `sudo pm2 start bin/www`
- Save the pm2 process list `sudo pm2 save`
- Create a pm2 startup script `sudo pm2 startup`
```
sudo npm install pm2 -g
sudo pm2 start bin/www
sudo pm2 save
sudo pm2 startup
```
- Reboot server
