const Picture = require("../models/Picture");

const fs = require("fs");

exports.create = async (req, res) => {
  

  try {
    const { name } = req.body;

    const file = req.file;

    const picture = new Picture({
      name,
      src: file.path,
    });

    await picture.save();

    res.json({ picture, msg: "Imagem salva com sucesso!!" });
  } catch (err) {
    res.status(500).json({ message: "Erro ao salvar" });
  }
};

exports.findAll = async (req, res) => {
    try {
        const pictures = await Picture.find();
 
        res.json(pictures)
    } catch (err) {
        res.status(500).json({ message: "Erro ao buscar!"});
    }
};