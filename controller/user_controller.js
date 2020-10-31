const db = require('../models');
const sequelize = require('sequelize');
const OP = sequelize.Op;


module.exports = {
    async addUser(req, res) {
        try {
            let userdata = await db.User_master.create(req.body);

            if (userdata)
                return res.status(200).send({ res: '1', message: "Data Inserted", data: userdata });


        } catch (error) {
            return res.status(200).send({ res: '0', message: "Error : ", data: error.message });
        }
    },
    async findAllUser(req, res) {
        try {
            const UserData = await db.User_master.findAll({ where: { is_deleted: 0 } });
            if (UserData)
                //     // res.status(200).send(UserData);

                //     res.status(200).send({ res: '1', message: "User Details", data: UserData });
                // const { count, rows } = await db.User_master.findAndCountAll({
                //     where: { is_deleted: 0 },
                //     offset: 0,
                //     limit: 10
                // });
                // console.log(count);
                // console.log(rows);

                res.status(200).send({ res: '1', message: "All User Details : ", data: UserData });
            // console.log(rows);
        } catch (error) {
            console.log("********************************* ", error.message);
            res.status(200).send({ res: '0', message: error.message, data: null });
        }
    },
    async findAllUserById(req, res) {
        try {
            const UserData = await db.User_master.findOne({ where: { id: req.params.id } });
            if (UserData)
                res.status(200).send({ res: '1', message: "User Details", data: UserData });
        } catch (error) {
            res.send(error.message);
        }
    },
    async updateUser(req, res) {
        const gen = 0;
        try {
            const UserData = await db.User_master.update(req.body, { where: { id: req.body.id } });
            if (UserData)
                res.status(200).send({ res: '1', message: "Details Updated!", data: UserData });
        } catch (error) {
            res.send(error.message);
        }
    },
    // async deleteUser(req, res) {
    //     try {
    //         const UserData = await db.User_master.destroy({ where: { id: req.body.id } });
    //         if (UserData)
    //             res.status(200).send({ res: '1', message: "Details Deleted!", data: UserData });
    //     } catch (error) {
    //         res.send(error.message);
    //     }
    // },
    async deleteUser(req, res) {
        try {
            const UserData = await db.User_master.update({ is_deleted: 1 }, { where: { id: req.body.id } });
            if (UserData)
                res.status(200).send({ res: '1', message: "Details Deleted!", data: UserData });
        } catch (error) {
            res.send(error.message);
        }
    }

}