
CREATE SCHEMA bms AUTHORIZATION "Mohannad";


-- bms.book definition

-- Drop table

-- DROP TABLE bms.book;

CREATE TABLE bms.book (
	book_id serial4 NOT NULL,
	book_name varchar(300) NOT NULL,
	book_author varchar(50) NOT NULL,
	book_description varchar(1000) NULL,
	store_code varchar(5) NOT NULL,
	create_on timestamp NOT NULL,
	CONSTRAINT book_pkey PRIMARY KEY (book_id)
);


-- bms.store definition

-- Drop table

-- DROP TABLE bms.store;

create table bms.store(
store_id serial not null,
store_name varchar(300) not null,
store_code varchar(5) not null,
created_by varchar(100) not NULL,
constraint store_pkey primary key (store_id)
);


