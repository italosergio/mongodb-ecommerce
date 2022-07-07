db.produtos.find({
  $where: function ingredientsSize() {
    return this.ingredientes.length === 4;
  },
}).count();