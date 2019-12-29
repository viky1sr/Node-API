//@desc Get all products
//@router GET /api/v1/products
//access Public
exports.getProducts = (req,res,next) => {
        res
            .status(200)
            .json({success: true, msg: 'Show all database'})
    };

//@desc Get all product
//@router GET /api/v1/product
//access Public
exports.getProduct = (req,res,next) => {
    res
        .status(200)
        .json({success: true, msg: 'Show all database'})
};

//@desc Create product
//@router POST /api/v1/product:id
//access Public
exports.createProduct = (req,res,next) => {
    res
        .status(200)
        .json({success: true, msg: 'Show all database'})
};

//@desc Update product
//@router PUT /api/v1/product:id
//access Public
exports.updateProduct = (req,res,next) => {
    res
        .status(200)
        .json({success: true, msg: `Update data bases on id ${req.params.id}`})
};

//@desc Delete product
//@router DELETE /api/v1/product/:id
//access Public
exports.deleteProduct = (req,res,next) => {
    res
        .status(200)
        .json({success: true, msg: `Delete data bases on id ${req.params.id}`})
};

