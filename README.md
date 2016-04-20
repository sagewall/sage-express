#Sage Express
This application uses https and requires a certificate and key be placed in a /cert folder
* `/cert/server.crt`
* `/cert/server.key`
####Requires MongoDB
* Database credentials should be stored in credentials.js in the /db folder
  * ```
    var credentials = {
       user: 'user',
       password: 'password'
    };
     module.exports = credentials;
* To seed database run the following command
  * `mongoimport --host ds013901.mlab.com --port 13901 --db sage-express --username <username> --password <password> --collection skills --type json --file db/skills-seed.json --jsonArray --drop`
