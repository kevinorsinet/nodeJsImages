CREATE TABLE produit (
ID_produit Int auto_increment primary key,
nom_produit Varchar(50),
url_image_produit Varchar(50),
alt_image Varchar(50)
);

INSERT INTO produit (nom_produit, url_image_produit, alt_image) VALUES ('Nintendo switch', 'switch.jpg', 'switch');
SELECT * from produit;
