# Schema Information


## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, unique
password_digest | string    | not null
session_token   | string    | not null, unique

## listings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
owner_id    | integer   | not null, foreign key (references users)
location	| string	| not null
pet_name    | string    | not null
species		| string	| not null
breed		| string	|
age			| integer	| 
body        | text    	|

## profiles
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
user_id 	 | integer	 | not null, foreign key (references users)
pet_name	 | string	 | not null, foreign key (references users)
location	 | string	 |
contact_info | string	 |
body         | string    | not null

## comments
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
listing_id	 | integer	 | not null, foreign key (references listings)
commenter_id | integer	 | not null, foreign key (references users)
body         | string    | not null


