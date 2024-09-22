// https://www.mongodb.com/docs/manual/reference/operator/projection/slice/
db.produtos.find({ ingredientes: { $elemMatch: { $eq: "picles" } } },
{ _id: 0, nome: 1, ingredientes: 1, valoresNutricionais: { $slice: 3 } });
