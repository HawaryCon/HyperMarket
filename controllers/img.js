
const { config } = require('dotenv');
config();
const fs = require('fs');
const ImageKit = require("imagekit")
const imageKit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
})
exports.uploadFile = (req, res)=> {
    if (req.file) {
        const data = fs.readFileSync(req.file.path);
        imageKit.upload({
            file: data,
            fileName: req.file.originalname,
            folder: 'images'
        }, function (err, response) {
            if (err) {
                return res.status(500).json({
                    status: "failed",
                    message: "An error occured during file upload. Please try again."
                })
            }

            res.json({ status: "success", url: response, message: "Successfully uploaded files" });
        })
    }
}
