const path =require("path");

const clientError =(req, res) => {
    res
      .status(404)
      .sendFile(path.join(__dirname, '..', '..', '..','pub lic', 'html', '404.html'));
  }
const serverError =(err, req, res, next) => {
    res
      .status(500)
      .sendFile(path.join(__dirname, '..', '..', '..','public', 'html', '500.html'));
  }
module.exports = {clientError,serverError }