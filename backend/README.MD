Import kolekcji do bazy mongodb


%MongoDBInstallFolder%\Server\4.0\bin\mongoimport.exe  --db=feh --collection=characters characters.json

%MongoDBInstallFolder%\Server\4.0\bin\mongoimport.exe  --db=feh --collection=userCharacters userCharacters.json