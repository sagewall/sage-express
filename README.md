#Sage Express
## Deployment
- Install git `sudo apt install git`
- Create .gitconfig file in `/home/ubuntu/`
```
[user]
	name = Sage Wall
	email = sagewall@users.noreply.github.com
[filter "hawser"]
	clean = git hawser clean %f
	smudge = git hawser smudge %f
	required = true
[filter "lfs"]
	clean = git-lfs clean -- %f
	smudge = git-lfs smudge -- %f
	required = true
```
- [Install NodeJS](https://nodejs.org/en/download/package-manager/)
- Clone git repository `git clone https://github.com/sagewall/sage-express.git`
- Change directories `cd /home/ubuntu/sage-express`
- Run `npm install`
- SFTP /cert folder with tls certificates and keys
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
