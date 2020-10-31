'use strict';
module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define("User_master", {
        FullName: { type: DataTypes.STRING(20), allowNull: false },
        MobileNumber: { type: DataTypes.STRING(10), allowNull: false },
        Gender: {
            type: DataTypes.STRING(6), allowNull: false,
            get() {
                var gen = this.getDataValue('Gender');
                if (gen == 1) {
                    return "Male";
                }
                if (gen == 0) {
                    return "Female";
                }
            },
            set(value) {
                // const GenValue = value;
                if (value == "Male") {
                    this.setDataValue('Gender', 1);
                }
                if (value == "Female") {
                    this.setDataValue('Gender', 0);
                }
            }
        },
        City: { type: DataTypes.STRING(20), allowNull: false },
        State: { type: DataTypes.STRING(20), allowNull: false },
        DOB: { type: DataTypes.STRING(20), allowNull: false },
        username: { type: DataTypes.STRING(50), allowNull: false },
        password: { type: DataTypes.STRING(20), allowNull: false },
        is_deleted: { type: DataTypes.TINYINT(1), allowNull: false, defaultValue: 0, comment: "0 No,1 Yes" }
    }, { freezeTableName: true });

    return user;
};