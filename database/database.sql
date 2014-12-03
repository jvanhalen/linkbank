DROP DATABASE IF EXISTS linkbank;

CREATE DATABASE linkbank;

USE linkbank;

CREATE TABLE user ( username VARCHAR(10) PRIMARY KEY, 
                    passwordhash VARCHAR(40) NOT NULL, -- SHA1 hash
                    lastlogin TIMESTAMP DEFAULT NOW(),
                    ipaddress VARCHAR(45) NOT NULL);

CREATE TABLE link ( id INT AUTO_INCREMENT PRIMARY KEY,
                    description VARCHAR(255),
                    address VARCHAR(255) UNIQUE NOT NULL,
                    added TIMESTAMP DEFAULT NOW(),
                    rating INT DEFAULT 0);

CREATE TABLE category_list (link_id INT,
							category_id INT);

CREATE TABLE category ( id INT PRIMARY KEY,
						name VARCHAR(20) NOT NULL);

CREATE TABLE search ( id INT AUTO_INCREMENT PRIMARY KEY,
					  word VARCHAR(255),
					  TIMESTAMP DEFAULT NOW());