exports.allAccess = (req,res) => {
    res.status(200).send("Contenido publico.");

}

exports.userBoard = (req, res) => {
    res.status(200).send("Contenido del Usuario");
}