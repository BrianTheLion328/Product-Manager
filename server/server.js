const express = require('express');
const app = express();
const cors = require('cors');
PORT = 8000;

app.use(cors() );

app.use(express.json() );

app.use(express.urlencoded( { extended: true } ) );

require("./config/mongoose.config");

const ProductRoutes = require("./routes/product.routes")
ProductRoutes(app)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}.`);
});
