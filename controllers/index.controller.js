// GET('/')
exports.getIndexPage = async (req, res) => {
  const message = "Page d'accueil" 
  
  const produits = await querySQL( 'SELECT * FROM produit')
  // const categories = await query( 'SELECT * FROM category');

  // console.log(produits);
  try { // Gestion des exceptions 
    res.render('index', {
     message,
     produits
    // categories
    });
  } catch (e) {
    res.send(e)
  }
};

// GET('/ajouterProduit')
exports.getAddProduct = async (req, res) => {

  // console.log(produits);
  try { // Gestion des exceptions 
    res.render('ajoutProduit');
  } catch (e) {
    res.send(e)
  }
};

// POST('/ajouterProduit')
exports.postAddProduct = async (req, res) => {
  console.log(req.body);
  console.log(req.file);
  const image = `${req.file.filename}.${req.file.mimetype}`;
  console.log(image);
  const newProduit = await querySQL(`INSERT INTO produit (nom_produit, url_image_produit, alt_image) VALUES ('${req.body.nom}', '${image}', '${req.body.alt}');`);
  // console.log(produits);
  try { // Gestion des exceptions 
    res.redirect("/");
  } catch (e) {
    res.send(e)
  }
};