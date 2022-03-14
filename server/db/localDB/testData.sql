INSERT INTO "Cryptocurrency"(cc_name, cc_description)
VALUES ('BTC', 'Bitcoin');
INSERT INTO "Cryptocurrency"(cc_name, cc_description)
VALUES ('ETH', 'Ethereum');
INSERT INTO "Cryptocurrency"(cc_name, cc_description)
VALUES ('USDT', 'Tether');
INSERT INTO "Cryptocurrency"(cc_name, cc_description)
VALUES ('BNB', 'BNB');

INSERT INTO "Verification"(ve_name, ve_surname, ve_photo_url, ve_passport_code, ve_phone_number)
VALUES ('Vvvv', 'Kkkkkk', 'photos/vk.png', 'MP12312332BLR7203305F1235568BR123123A01PB645', '375554572366');
INSERT INTO "Verification"(ve_name, ve_surname, ve_photo_url, ve_passport_code, ve_phone_number)
VALUES ('Mmm', 'Mlll', 'photos/mm.png', 'MP12312332BLR7203305F1235568BR123123A01PB645', '375234572366');
INSERT INTO "Verification"(ve_name, ve_surname, ve_photo_url, ve_passport_code, ve_phone_number)
VALUES ('Vann', 'Nnnnn', 'photos/vn.png', 'MP12312332UKR7203305F1235568BR123123A01PB645', '375554562366');
INSERT INTO "Verification"(ve_name, ve_surname, ve_photo_url, ve_passport_code, ve_phone_number)
VALUES ('Aaaaa', 'Sssss', 'photos/as.png', 'ZS12312232BLR7203305F1235568BR123123A01PB645', '375294572377');

INSERT INTO "User"(user_login, user_password, fk_verification_id)
VALUES ('login1', 'pas325124!213sword1', 1);
INSERT INTO "User"(user_login, user_password, fk_verification_id)
VALUES ('login2002', 'pass!23131$word2', 2);
INSERT INTO "User"(user_login, user_password, fk_verification_id)
VALUES ('logqwein', 'password1231Qwexa3', 3);
INSERT INTO "User"(user_login, user_password, fk_verification_id)
VALUES ('123login41241w', 'passworqweqweqdqe1241xa4', 4);

INSERT INTO "CryptoAccount"(ca_number, ca_amount, ca_last_update, fk_user_id, fk_cc_id)
VALUES ('BY12ALFF123473JYNC2293525757AS4413', 0.0323, '20-03-2022 16:22:45 America/Los_Angeles', 1, 1);
INSERT INTO "CryptoAccount"(ca_number, ca_amount, ca_last_update, fk_user_id, fk_cc_id)
VALUES ('BY12AWERF1223473JYNC22525757AS4412', 4.00023, '20-03-2022 18:22:45 America/Los_Angeles', 1, 2);
INSERT INTO "CryptoAccount"(ca_number, ca_amount, ca_last_update, fk_user_id, fk_cc_id)
VALUES ('RU12AWERF1223473JYNC22525757AS4412', 1.00023, '14-04-2022 05:22:45 America/Los_Angeles', 2, 3);
INSERT INTO "CryptoAccount"(ca_number, ca_amount, ca_last_update, fk_user_id, fk_cc_id)
VALUES ('RU12AWERF1223473JYNC22522257RD4412', 1.02123, '14-04-2021 05:22:55 America/Los_Angeles', 4, 4);

INSERT INTO "Topup"(to_fiat_iban, to_fiat_amount, to_cryptocurrency_amount, to_datetime, fk_ac_id)
VALUES ('BY12ALFF123473JYNC2293525757AS4411', 250, 0.003, '20-03-2022 11:21:40 America/Los_Angeles', 1);
INSERT INTO "Topup"(to_fiat_iban, to_fiat_amount, to_cryptocurrency_amount, to_datetime, fk_ac_id)
VALUES ('RU12ALFF123473JYNC2293525757AS4411', 500, 0.1323, '20-02-2021 12:22:40 America/Los_Angeles', 2);
INSERT INTO "Topup"(to_fiat_iban, to_fiat_amount, to_cryptocurrency_amount, to_datetime, fk_ac_id)
VALUES ('UK12ALFF123473JYNC2293525757AS4411', 100, 0.2, '22-03-2020 13:23:40 America/Los_Angeles', 3);
INSERT INTO "Topup"(to_fiat_iban, to_fiat_amount, to_cryptocurrency_amount, to_datetime, fk_ac_id)
VALUES ('US12ALFF123473JYNC2293525757AS4411', 1000, 4.00, '27-07-2022 14:24:40 America/Los_Angeles', 4);

INSERT INTO "Withdrawal"(wi_iban, wi_cryptocurrency_amount, wi_fiat_amount, wi_datetime, fk_ca_id)
VALUES ('BY12ALFF123473JYNC2293525757AS4411', 0.003, 100, '21-03-2022 11:21:40 America/Los_Angeles', 1);
INSERT INTO "Withdrawal"(wi_iban, wi_cryptocurrency_amount, wi_fiat_amount, wi_datetime, fk_ca_id)
VALUES ('RU12ALFF123473JYNC2293525757AS4411', 0.323, 320, '22-02-2021 14:22:40 America/Los_Angeles', 2);
INSERT INTO "Withdrawal"(wi_iban, wi_cryptocurrency_amount, wi_fiat_amount, wi_datetime, fk_ca_id)
VALUES ('UK12ALFF123473JYNC2293525757AS4411', 10, 2500, '23-03-2020 13:23:40 America/Los_Angeles', 3);
INSERT INTO "Withdrawal"(wi_iban, wi_cryptocurrency_amount, wi_fiat_amount, wi_datetime, fk_ca_id)
VALUES ('US12ALFF123473JYNC2293525757AS4411', 0.5, 40, '24-07-2022 18:24:40 America/Los_Angeles', 4);

INSERT INTO "Transaction"(tr_amount_from, tr_amount_to, tr_datetime, fk_account_from, fk_account_to)
VALUES (0.11, 5, '21-03-2022 11:21:40 America/Los_Angeles', 1, 2);
INSERT INTO "Transaction"(tr_amount_from, tr_amount_to, tr_datetime, fk_account_from, fk_account_to)
VALUES (10, 50, '22-03-2022 11:21:40 America/Los_Angeles', 3, 2);
INSERT INTO "Transaction"(tr_amount_from, tr_amount_to, tr_datetime, fk_account_from, fk_account_to)
VALUES (100, 23, '23-03-2022 11:21:40 America/Los_Angeles', 3, 4);
INSERT INTO "Transaction"(tr_amount_from, tr_amount_to, tr_datetime, fk_account_from, fk_account_to)
VALUES (1050, 123, '24-03-2022 11:21:40 America/Los_Angeles', 2, 4);



