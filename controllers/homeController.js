exports.respondwithimage = (req,res) => {
let paramsImage =req.params.ayeshaImage
res.render("images", { image: paramsImage})
};
exports.respondwithimage = (req,res) => {
    let image = req.params.image;
    res.render(image);
};