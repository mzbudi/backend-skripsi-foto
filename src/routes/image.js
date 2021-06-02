const express = require("express");
const Route = express.Router();
const fileUpload = require("../helper/fileUpload");
const upload = fileUpload.single("image");
const helper = require("../helper");
const multer = require("multer");

const uploadFilter = (req, res) => {
  upload(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      console.log(err);
      return helper.response(res, 400, {
        message: "Gagal",
      });
    } else if (err) {
      return helper.response(res, 400, { message: "File Tidak Cocok" });
    }
    return helper.response(res, 200, { message: "Gambar berhasil diupload" });
  });
};

Route.get("/", (req, res) => {
  return helper.response(res, 200, { message: "wadidaw" });
}).post("/", uploadFilter);
module.exports = Route;
