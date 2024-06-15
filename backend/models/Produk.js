import { Sequelize } from "sequelize";
import db from "../config/Database";

const {DataTypes} = Sequelize;

const Produk = db.define('produk', {}, {
    namaBarang: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [2, 100],
        }
    },
    stok: {
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

export default Produk;