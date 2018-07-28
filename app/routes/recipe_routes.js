module.exports = function(app, db) {
  app.post("/recipe", (req, res) => {
    // You'll create your note here.
    const recipe = req.body;
    db.collection("recipes").insert(recipe, (err, result) => {
      if (err) {
        res.send({ error: "An error has occurred",err });
      } else {
        res.send(result.ops[0]);
      }
    });
  });
};
