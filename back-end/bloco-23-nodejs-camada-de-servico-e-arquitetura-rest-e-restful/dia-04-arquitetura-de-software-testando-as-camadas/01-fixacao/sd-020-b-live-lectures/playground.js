


const res = {};

res.status = (code) => {
  console.log(code)

  return res
}

res.json = (json) => {
  console.log(json);

  return res;
}


// res.status(200)
// res.json({ nome: 'Andre '})

res.status(404).json({ nome: 'Gui'}).status(300).json({ name: 'Baeta'})

// console.log(res)