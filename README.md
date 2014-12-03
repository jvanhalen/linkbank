linkbank
========

Tikon linkkikirjasto

**Koodien hakeminen virtuaalikoneeseen**

```bash
cd ~
mkdir coding
cd coding
git clone https://github.com/jvanhalen/linkbank.git
cd linkbank
```

**MySQL-tietokannan asentaminen**

`sudo apt-get install mysql-server`

**Tietokannan luominen**
 
`mysql -u root -p < database/database.sql`

**Sovelluksen käynnistäminen**

```bash
npm install
nodejs server.js
``` 