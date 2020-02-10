const db = require('../connection/index')

module.exports = {
    // ===============
    //      MOVIE
    // ===============
    addMovie: (req, res) => {
        let datamovie = req.body
        let sql = `INSERT INTO movies SET ?`
        db.query(sql, datamovie, (err, result) => {
            if (err) res.status(500).send(err)
            // res.status(200).send(result)
            sql = `SELECT * FROM movies`
            db.query(sql, (err, result1) => {
                if (err) res.status(500).send(err)
                res.status(200).send(result1)
            })
        })
    },

    getMovie: (req, res) => {
        let sql = `SELECT * FROM movies`
        db.query(sql, (err, result) => {
            if (err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },

    updateMovie: (req, res) => {
        let editmovie = req.body
        let sql = `UPDATE movies SET ? WHERE idmovie = ${req.params.idmovie};`
        console.log(editmovie);
        db.query(sql, editmovie, (err, result) => {
            if (err) return res.status(500).send(err)
            sql = `SELECT * FROM movies WHERE idmovie = ${req.params.idmovie}`
            db.query(sql, (err, result1) => {
                if (err) res.status(500).send(err)
                res.status(200).send(result1)
            })
        })
    },

    deleteMovie: (req, res) => {
        let sql = `DELETE FROM movies WHERE idmovie = ${req.params.idmovie};`
        db.query(sql, (err, result) => {
            if (err) return res.status(500).send(err)
            sql = `SELECT * FROM movies`
            db.query(sql, (err, result1) => {
                if (err) res.status(500).send(err)
                res.status(200).send(result1)
            })
        })
    },



    // ==================
    //      CATEGORY
    // ==================
    addCategory: (req, res) => {
        let datacategory = req.body
        let sql = `INSERT INTO categories SET ?`
        db.query(sql, datacategory, (err, result) => {
            if (err) res.status(500).send(err)
            // res.status(200).send(result)
            sql = `SELECT * FROM categories`
            db.query(sql, (err, result1) => {
                if (err) res.status(500).send(err)
                res.status(200).send(result1)
            })
        })
    },

    getCategory: (req, res) => {
        let sql = `SELECT * FROM categories`
        db.query(sql, (err, result) => {
            if (err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },

    updateCategory: (req, res) => {
        let editcategory = req.body
        let sql = `UPDATE categories SET ? WHERE idcategory = ${req.params.idcategory};`
        console.log(editcategory);
        db.query(sql, editcategory, (err, result) => {
            if (err) return res.status(500).send(err)
            sql = `SELECT * FROM categories WHERE idcategory = ${req.params.idcategory}`
            db.query(sql, (err, result1) => {
                if (err) res.status(500).send(err)
                res.status(200).send(result1)
            })
        })
    },

    deleteCategory: (req, res) => {
        let sql = `DELETE FROM categories WHERE idcategory = ${req.params.idcategory};`
        db.query(sql, (err, result) => {
            if (err) return res.status(500).send(err)
            sql = `SELECT * FROM categories`
            db.query(sql, (err, result1) => {
                if (err) res.status(500).send(err)
                res.status(200).send(result1)
            })
        })
    },



    // ========================
    //      MOVIE CATEGORY 
    // ========================
    addMovCat: (req, res) => {
        let datamovcat = req.body
        let sql = `INSERT INTO movcat SET ?;`
        db.query(sql, datamovcat, (err, result) => {
            if (err) return res.status(500).send(err)
            sql = `SELECT m.nama AS movie, c.nama AS category FROM movcat mc JOIN movies m ON mc.idmovie = m.idmovie JOIN categories c ON mc.idcategory = c.idcategory`
            db.query(sql, (err, result) => {
                if (err) res.status(500).send(err)
                res.status(200).send(result)
            })
        })
    },

    getMovCat: (req, res) => {
        let sql = `SELECT m.nama AS movie, c.nama AS category FROM movcat mc JOIN movies m ON mc.idmovie = m.idmovie JOIN categories c ON mc.idcategory = c.idcategory`
        db.query(sql, (err, result) => {
            if (err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },

    deleteMovCat: (req, res) => {
        const { idcategory, idmovie } = req.body
        let sql = `DELETE FROM movcat WHERE idmovie=${idmovie} AND idcategory=${idcategory};`
        db.query(sql, (err, results) => {
            if (err) return res.status(500).send(err)
            res.status(200).send(results)
        })
    },
}
