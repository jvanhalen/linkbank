DROP DATABASE IF EXISTS linkbank;

CREATE DATABASE linkbank;

USE linkbank;

CREATE TABLE user ( username VARCHAR(10) PRIMARY KEY, 
                    passwordhash VARCHAR(40) NOT NULL, -- SHA1 hash
                    lastlogin TIMESTAMP DEFAULT NOW(),
                    ipaddress VARCHAR(45) NOT NULL);

CREATE TABLE link ( id INT PRIMARY KEY,
                    description VARCHAR(255),
                    address VARCHAR(255) UNIQUE NOT NULL,
                    added TIMESTAMP DEFAULT NOW(),
                    rating INT);

CREATE TABLE category ( name VARCHAR(20) PRIMARY KEY);

