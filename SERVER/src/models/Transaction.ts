import { DataTypes, Model, Sequelize } from "sequelize";


interface TransactionAttributes {
    id: number,
    sender: number,
    receiver: number,
    sentAmount: number,
    receivedAmount: number,
    date: string
}

class TransactionClass extends Model <TransactionAttributes> implements TransactionAttributes {
    public id!: number;
    public sender!: number;
    public receiver!: number;
    public sentAmount!: number;
    public receivedAmount!: number;
    public date!: string;
}

export default (sequelize: Sequelize) => {
    TransactionClass.init (
        {
            id: {
                primaryKey: true,
                type: DataTypes.NUMBER,
                autoIncrement: true
            },
            sender: {
                type: DataTypes.NUMBER,
                allowNull: false
            },
            receiver: {
                type: DataTypes.NUMBER,
                allowNull: false
            },
            sentAmount: {
                type: DataTypes.NUMBER,
                allowNull: false
            },
            receivedAmount: {
                type: DataTypes.NUMBER,
                allowNull: false
            },
            date: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            sequelize,
            modelName: "Transaction",
            timestamps: false,
            freezeTableName: true
        }
    )
}