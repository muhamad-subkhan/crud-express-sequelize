var express = require('express');
var router = express.Router();
const Daftar = require('../models/index');
const { where } = require('sequelize');


router.post('/create', function (req, res, next) {
  (async () => {
    try {
      const pendaftarBaru = await Daftar.create({
        nama: req.body.nama,
        nim: req.body.nim,
        jurusan: req.body.jurusan,
        fakultas: req.body.fakultas,
        totalsks: req.body.totalsks,
        ipk: req.body.ipk
      });
      res.send({ code: 200, message: pendaftarBaru });
    } catch (error) {
      res.send({ code: 500, message: "Data tidak berhasil dibuat!!!", error })
    }
  })()
});


router.get('/readAll', function (req, res, next) {
  (async () => {
    try {
      const allData = await Daftar.findAll();
      res.send({ code: 200, message: allData });
    } catch (error) {
      res.send({ code: 500, message: 'Data tidak ditemukan!!!', error })
    }
  })()
});

router.delete('/delete', function (req, res, next) {
  (async () => {
    try {
      const hapusData = await Daftar.destroy({
        where: {
          id: req.body.id
        }
      });
      res.send({ code: 200, message: "Hapus data berhasil!!!" });
    } catch (error) {
      res.send({ code: 500, message: "Penghapusan gagal !!!", error })
    }
  })()
});

router.put('/update', function (req, res, next) {
  (async () => {
    try {
      const updateData = await Daftar.update({
        nama: req.body.nama,
        nim: req.body.nim,
        jurusan: req.body.jurusan,
        fakultas: req.body.fakultas,
        totalsks: req.body.totalsks,
        ipk: req.body.ipk
      }, {
        where: {
          ID: req.body.id
        }
      });
      res.send({code: 200, message: updateData});
    } catch (error) {
      res.send({code: 500, message: "Gagal Update!!!", error});
    }
  })()
});


router.get('/findOne', function(req, res, next){
  (async()=>{
    try {
      const byName = await Daftar.findOne({
        where: {
          nama: req.body.nama
        }
      })
      res.send({code: 200, message: byName})
    } catch (error) {
      res.send({code: 500, message: error});
    }
  })()
});


module.exports = router;
