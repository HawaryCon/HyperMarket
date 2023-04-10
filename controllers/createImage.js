// const fetch = require('node-fetch');
// const fetch = (...args) =>
//     import('node-fetch').then(({ default: fetch }) => fetch(...args));

exports.createImage = async (req, res) => {
    const formData = new FormData()
    formData.append("access_token", "a3429c9ecd014629a1bf58d52f62bb0d");
    formData.append("model_id", "4zdwGOB");
    formData.append("prompt", "obama");
    formData.append("width", 512);
    formData.append("height", 512);
    formData.append("num_images", 4);

    try {
         const response = await fetch("https://sinkin.ai/api/inference", {
            method: "POST", // or 'PUT'
            body: FormData,
        });
        const result = await response.json();
        console.log("Success:", result);
        return res.status(420).json(result)
    } catch (error) {
        return res.status(420).json({ message: error })
    }
    }