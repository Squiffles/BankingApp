import { Sequelize, Model, DataTypes } from 'sequelize';

interface AddressAttributes {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
}

interface UserAttributes {
    id: number;
    name: string;
    email: string;
    phone: string;
    picture?: string;
    admin: boolean;
    active: boolean;
    address?: AddressAttributes;
}


class UserClass extends Model<UserAttributes> implements UserAttributes {
    public id!: number;
    public name!: string;
    public email!: string;
    public phone!: string;
    public picture?: string;
    public admin!: boolean;
    public active!: boolean;
    public address?: AddressAttributes;
}

export default (sequelize: Sequelize) => {
    UserClass.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            phone: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    isEmail: true
                }
            },
            picture: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue:
                    'https://icon-library.com/images/no-profile-pic-icon/no-profile-pic-icon-24.jpg',
            },
            admin: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
                allowNull: false,
            },
            active: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
                allowNull: false,
            },
            address: {
                type: DataTypes.JSON,
            },
        },
        {
            sequelize,
            modelName: 'User',
            timestamps: false,
            freezeTableName: true,
        }
    );
};