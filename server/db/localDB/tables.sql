DROP TABLE IF EXISTS "CryptoAccount" CASCADE
;

DROP TABLE IF EXISTS "Cryptocurrency" CASCADE
;

DROP TABLE IF EXISTS "Topup" CASCADE
;

DROP TABLE IF EXISTS "Transaction" CASCADE
;

DROP TABLE IF EXISTS "User" CASCADE
;

DROP TABLE IF EXISTS "Verification" CASCADE
;

DROP TABLE IF EXISTS "Withdrawal" CASCADE
;

/* Create Tables */

CREATE TABLE "CryptoAccount"
(
	ca_id bigserial NOT NULL,
	ca_number varchar(34) NOT NULL,
	ca_amount money NOT NULL,
	ca_last_update time with time zone NOT NULL,
	fk_user_id integer NOT NULL,
	fk_cc_id integer NULL
)
;

CREATE TABLE "Cryptocurrency"
(
	cc_id serial NOT NULL,
	cc_code varchar(4) NULL,
	cc_name varchar(20) NULL,
	cc_description varchar(50) NULL
)
;

CREATE TABLE "Topup"
(
	to_id bigserial NOT NULL,
	to_fiat_iban varchar(34) NOT NULL,
	to_fiat_amount money NOT NULL,
	to_cryptocurrency_amount money NOT NULL,
	to_datetime time with time zone NOT NULL,
	fk_ac_id bigint NOT NULL
)
;

CREATE TABLE "Transaction"
(
	transaction_id bigserial NOT NULL,
	tr_amount_from money NOT NULL,
	tr_amount_to money NOT NULL,
	tr_datetime time with time zone NOT NULL,
	fk_account_from bigint NOT NULL,
	fk_account_to bigint NOT NULL
)
;

CREATE TABLE "User"
(
	user_id serial NOT NULL,
	user_login varchar(30) NOT NULL,
	user_password varchar(100) NOT NULL,
	fk_verification_id integer NOT NULL
)
;

CREATE TABLE "Verification"
(
	verification_id serial NOT NULL,
	ve_name varchar(20) NOT NULL,
	ve_surname varchar(20) NOT NULL,
	ve_photo_url varchar(100) NULL,
	ve_passport_code varchar(44) NOT NULL,
	ve_phone_number varchar(12) NOT NULL
)
;

CREATE TABLE "Withdrawal"
(
	wi_id bigserial NOT NULL,
	wi_iban varchar(34) NOT NULL,
	wi_cryptocurrency_amount money NOT NULL,
	wi_fiat_amount money NOT NULL,
	wi_datetime time with time zone NOT NULL,
	fk_ca_id bigint NOT NULL
)
;

/* Create Primary Keys, Indexes, Uniques, Checks */

ALTER TABLE "CryptoAccount" ADD CONSTRAINT "PK_CryptoAccount"
	PRIMARY KEY (ca_id)
;

CREATE INDEX "IXFK_CryptoAccount_User" ON "CryptoAccount" (fk_user_id ASC)
;

ALTER TABLE "Cryptocurrency" ADD CONSTRAINT "PK_Cryptocurrency"
	PRIMARY KEY (cc_id)
;

ALTER TABLE "Topup" ADD CONSTRAINT "PK_Topup"
	PRIMARY KEY (to_id)
;

CREATE INDEX "IXFK_Topup_CryptoAccount" ON "Topup" (fk_ac_id ASC)
;

ALTER TABLE "Transaction" ADD CONSTRAINT "PK_Transaction"
	PRIMARY KEY (transaction_id)
;

CREATE INDEX "IXFK_Transaction_CryptoAccount" ON "Transaction" (fk_account_from ASC)
;

CREATE INDEX "IXFK_Transaction_CryptoAccount_02" ON "Transaction" (fk_account_to ASC)
;

ALTER TABLE "User" ADD CONSTRAINT "PK_User"
	PRIMARY KEY (user_id)
;

CREATE INDEX "IXFK_User_Verification" ON "User" (fk_verification_id ASC)
;

ALTER TABLE "Verification" ADD CONSTRAINT "PK_Verification"
	PRIMARY KEY (verification_id)
;

CREATE INDEX "IX_PassportCode" ON "Verification" (ve_passport_code ASC)
;

ALTER TABLE "Withdrawal" ADD CONSTRAINT "PK_Withdrawal"
	PRIMARY KEY (wi_id)
;

CREATE INDEX "IXFK_Withdrawals_CryptoAccount" ON "Withdrawal" (fk_ca_id ASC)
;

/* Create Foreign Key Constraints */

ALTER TABLE "CryptoAccount" ADD CONSTRAINT "FK_CryptoAccount_User"
	FOREIGN KEY (fk_user_id) REFERENCES "User" (user_id) ON DELETE No Action ON UPDATE No Action
;

ALTER TABLE "Topup" ADD CONSTRAINT "FK_Topup_CryptoAccount"
	FOREIGN KEY (fk_ac_id) REFERENCES "CryptoAccount" (ca_id) ON DELETE No Action ON UPDATE No Action
;

ALTER TABLE "Transaction" ADD CONSTRAINT "FK_Transaction_CryptoAccount"
	FOREIGN KEY (fk_account_from) REFERENCES "CryptoAccount" (ca_id) ON DELETE No Action ON UPDATE No Action
;

ALTER TABLE "Transaction" ADD CONSTRAINT "FK_Transaction_CryptoAccount_02"
	FOREIGN KEY (fk_account_to) REFERENCES "CryptoAccount" (ca_id) ON DELETE No Action ON UPDATE No Action
;

ALTER TABLE "User" ADD CONSTRAINT "FK_User_Verification"
	FOREIGN KEY (fk_verification_id) REFERENCES "Verification" (verification_id) ON DELETE No Action ON UPDATE No Action
;

ALTER TABLE "Withdrawal" ADD CONSTRAINT "FK_Withdrawals_CryptoAccount"
	FOREIGN KEY (fk_ca_id) REFERENCES "CryptoAccount" (ca_id) ON DELETE No Action ON UPDATE No Action
;

/* Create Table Comments, Sequences for Autonumber Columns */

 

 

 

 

 

 

 
