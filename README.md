#Sage Express
####Requires MongoDB
* To seed database run the following command
  * Windows
    * `"C:\Program Files\MongoDB\Server\3.2\bin\mongoimport.exe" --db sage-express --collection skills --type json --file db/skills-seed.json --jsonArray --drop`
  * Linux
    * `mongoimport --db sage-express --collection skills --type json --file db/skills-seed.json --jsonArray --drop`
