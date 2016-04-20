#Sage Express
####Requires MongoDB
* To seed database run the following command
  * `mongoimport --host ds013901.mlab.com --port 13901 --db sage-express --username <username> --password <password> --collection skills --type json --file db/skills-seed.json --jsonArray --drop`
