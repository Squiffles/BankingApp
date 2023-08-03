import { Sequelize, Model, DataTypes } from 'sequelize';

interface CurrencyAttributes {
    id: number,
    name: string,
    code: string,
    symbol: string,
    exchangeRate: number
}


class CurrencyClass extends Model <CurrencyAttributes> implements CurrencyAttributes {
    id!: number;
    name!: string;
    code!: string;
    symbol!: string;
    exchangeRate!: number;
}

export default (sequelize: Sequelize) => {
    CurrencyClass.init(
        {
            id: {
                primaryKey: true,
                type: DataTypes.NUMBER,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING(10),
                allowNull: false
            },
            code: {
                type: DataTypes.STRING(3),
                allowNull: false
            },
            symbol: {
                type: DataTypes.STRING(1),
                allowNull: false
            },
            exchangeRate: {
                type: DataTypes.FLOAT,
                allowNull: false
            }
        },
        {
            sequelize,
            modelName: "Currency",
            timestamps: false,
            freezeTableName: true
        }
    )
}