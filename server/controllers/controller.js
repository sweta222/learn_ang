let bookSchema = require('../models/model');
const postsController = (req,res) => {
    let {title,author,published_year,publisher} = req.body;
    //console.log(req.body)
        const data = new bookSchema({title:title,author:author,published_year:published_year,publisher:publisher});
        data.save().then((response) => {
            res.status(200).send(response)
          })
          .catch((err) => {
            res.status(500).json({ errors: [{ error: err }] });
          });
};
module.exports = postsController;