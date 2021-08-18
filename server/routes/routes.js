const postsController = require('../controllers/controller');
const routes = (app) => {
    app.post("/populatedata",postsController);
};
module.exports = routes;