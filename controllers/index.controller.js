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