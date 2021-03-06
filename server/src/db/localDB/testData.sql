INSERT INTO "Cryptocurrency"(cc_code, cc_name, cc_usd_price) VALUES ('USD', 'US Dollar', 1.0);
INSERT INTO "Cryptocurrency"(cc_code, cc_name, cc_usd_price) VALUES ('BTC', 'Bitcoin', 40000.0);
INSERT INTO "Cryptocurrency"(cc_code, cc_name, cc_usd_price) VALUES ('ETH', 'Ethereum', 3000.0);
INSERT INTO "Cryptocurrency"(cc_code, cc_name, cc_usd_price) VALUES ('USDT', 'Tether', 1.0);
INSERT INTO "Cryptocurrency"(cc_code, cc_name, cc_usd_price) VALUES ('BNB', 'BNB', 200.0);
INSERT INTO "Cryptocurrency"(cc_code, cc_name, cc_usd_price) VALUES ('UNI', 'Uniswap', 300.0);

INSERT INTO "Verification"(ve_name, ve_surname, ve_photo_url, ve_passport_code, ve_phone_number)
VALUES ('Vvvv', 'Kkkkkk', 'photos/vk.png', 'MP12312332BLR7203305F1235568BR123123A01PB645', '375554572366');
INSERT INTO "Verification"(ve_name, ve_surname, ve_photo_url, ve_passport_code, ve_phone_number)
VALUES ('Mmm', 'Mlll', 'photos/mm.png', 'MP12312332BLR7203305F1235568BR123123A01PB645', '375234572366');
INSERT INTO "Verification"(ve_name, ve_surname, ve_photo_url, ve_passport_code, ve_phone_number)
VALUES ('Vann', 'Nnnnn', 'photos/vn.png', 'MP12312332UKR7203305F1235568BR123123A01PB645', '375554562366');
INSERT INTO "Verification"(ve_name, ve_surname, ve_photo_url, ve_passport_code, ve_phone_number)
VALUES ('Aaaaa', 'Sssss', 'photos/as.png', 'ZS12312232BLR7203305F1235568BR123123A01PB645', '375294572377');

INSERT INTO "User"(us_login, us_password, fk_verification_id)
VALUES ('login1', 'pas325124!213sword1', 1);
INSERT INTO "User"(us_login, us_password, fk_verification_id)
VALUES ('login2002', 'pass!23131$word2', 2);
INSERT INTO "User"(us_login, us_password, fk_verification_id)
VALUES ('logqwein', 'password1231Qwexa3', 3);
INSERT INTO "User"(us_login, us_password, fk_verification_id)
VALUES ('123login41241w', 'passworqweqweqdqe1241xa4', 4);

INSERT INTO "CryptoAccount"(ca_number, ca_amount, fk_user_id, fk_cc_id)
VALUES ('BY12ALFF123473JYNC2293525757AS4413', 0.0323, 1, 1);
INSERT INTO "CryptoAccount"(ca_number, ca_amount, fk_user_id, fk_cc_id)
VALUES ('BY12AWERF1223473JYNC22525757AS4412', 4.00023, 1, 2);
INSERT INTO "CryptoAccount"(ca_number, ca_amount, fk_user_id, fk_cc_id)
VALUES ('RU12AWERF1223473JYNC22525757AS4412', 1.00023, 1, 3);
INSERT INTO "CryptoAccount"(ca_number, ca_amount, fk_user_id, fk_cc_id)
VALUES ('RU12AWERF1223473JYNC22522257RD4412', 1.02123, 1, 4);

INSERT INTO "Topup"(to_fiat_amount, to_datetime, fk_ac_id)
VALUES (250, '2015-03-02 11:21:40+02', 1);
INSERT INTO "Topup"(to_fiat_amount, to_datetime, fk_ac_id)
VALUES (500, '2021-02-12 12:22:40+02', 2);
INSERT INTO "Topup"(to_fiat_amount, to_datetime, fk_ac_id)
VALUES (100, '2022-07-05 13:23:40+02', 3);
INSERT INTO "Topup"(to_fiat_amount, to_datetime, fk_ac_id)
VALUES (1000, '2021-07-05 14:24:40+02', 4);

INSERT INTO "Withdrawal"(wi_fiat_amount, wi_datetime, fk_ca_id)
VALUES (100, '2021-03-12 11:21:40+02', 1);
INSERT INTO "Withdrawal"(wi_fiat_amount, wi_datetime, fk_ca_id)
VALUES (320, '2022-02-08 14:22:40+02', 2);
INSERT INTO "Withdrawal"(wi_fiat_amount, wi_datetime, fk_ca_id)
VALUES (2500, '2019-03-07 13:23:40+02', 3);
INSERT INTO "Withdrawal"(wi_fiat_amount, wi_datetime, fk_ca_id)
VALUES (40, '2022-07-08 18:24:40+02', 4);

INSERT INTO "Transaction"(tr_amount_from, tr_amount_to, tr_datetime, fk_account_from, fk_account_to)
VALUES (0.11, 5, '2021-03-04 11:21:40+02', 1, 2);
INSERT INTO "Transaction"(tr_amount_from, tr_amount_to, tr_datetime, fk_account_from, fk_account_to)
VALUES (10, 50, '2016-03-02 11:21:40+02', 3, 2);
INSERT INTO "Transaction"(tr_amount_from, tr_amount_to, tr_datetime, fk_account_from, fk_account_to)
VALUES (100, 23, '2017-03-06 11:21:40+02', 3, 4);
INSERT INTO "Transaction"(tr_amount_from, tr_amount_to, tr_datetime, fk_account_from, fk_account_to)
VALUES (1050, 123, '2018-03-04 11:21:40+02', 2, 4);