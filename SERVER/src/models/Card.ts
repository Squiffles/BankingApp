import { DataTypes, Model, Sequelize } from "sequelize";



type cardNumber = `${number}-${number}-${number}-${number}`;
function isValidCardNumber(str: string): boolean {
    const cardNumber = str.split("-");
    return cardNumber.every((group) => /^\d{4}$/.test(group));
}


interface CardAttributes {
    id: number,
    account_number: cardNumber,
    expirationDate: string,
    cardType: string,
    cvv: string
}

class CardClass extends Model<CardAttributes> implements CardAttributes {
    public id!: number;
    public account_number!: cardNumber;
    public expirationDate!: string;
    public cardType!: string;
    public cvv!: string
}

export default (sequelize: Sequelize) => {
    CardClass.init(
        {
            id: {
                primaryKey: true,
                type: DataTypes.NUMBER,
                autoIncrement: true,
            },
            account_number: {
                type: DataTypes.STRING,
                allowNull: false
            },
            expirationDate: {
                type: DataTypes.STRING,
                allowNull: false
            },
            cardType: {
                type: DataTypes.STRING,
                allowNull: false
            },
            cvv: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            sequelize,
            modelName: "Card",
            timestamps: false,
            freezeTableName: true
        }
    )
}