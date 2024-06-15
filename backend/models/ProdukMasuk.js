import { Sequelize } from "sequelize";
import db from "../config/Database";

import Produk from "./Produk";

const {DataTypes} = Sequelize;

const ProdukMasuk = db.define('produk_masuk', {}, {
    id_produkMasuk: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    kode: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [2, 100],
        }
    },
    tglMasuk: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [1, 225],
        }
    },
    jumlahBarang: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [1, 225],
        }
    },
    satuanBarang: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [1, 225],
        }
    },
    hargaSatuan: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [1, 225],
        }
    },
    totalHarga: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [1, 225],
        }
    },
    catatan: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [1, 225],
        }
    }
}, {
    freezeTableName: true
});

Produk.hasMany(ProdukMasuk);
ProdukMasuk.belongsTo(Produk, {foreignKey: 'id_produkMasuk'})

export default ProdukMasuk;