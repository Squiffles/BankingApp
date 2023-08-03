import { DataTypes, Model, Sequelize } from 'sequelize';


type accountNumber = `${number}-${number}-${number}-${number}`
function isValidAccountNumber(str: string): boolean {
    const accountNumber = str.split('-');
    return accountNumber.every((group) => /^\d{4}$/.test(group));
}

interface AccountAttributes {
    accountNumber: accountNumber;
    accountType: string;
    accountBalances: number;
    accountStatus: boolean;
}
class Account extends Model<AccountAttributes> implements AccountAttributes {
    public accountNumber!: accountNumber;
    public accountType!: string;
    public accountBalances!: number;
    public accountStatus!: boolean;
    public validateAccountNumber(): boolean {
        return isValidAccountNumber(this.accountNumber);
    }
}

export default (sequelize: Sequelize) => {
    Account.init(
        {
            accountNumber: {
                primaryKey: true,
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    isValidAccountNumber(value: string) {
                        if (!isValidAccountNumber(value)) {
                            throw new Error(`Invalid account number: %{value}`);
                        }
                    }
                }
            },
            accountType: {
                type: DataTypes.ENUM("SAVING", "CURRENT", "SALARY"),
                allowNull: false
            },
            accountBalances: {
                type: DataTypes.DECIMAL(16, 4),
                allowNull: false
            },
            accountStatus: {
                type: DataTypes.BOOLEAN,
                allowNull: false
            }
        },
        {
            sequelize,
            modelName: "Account",
            timestamps: false,
            freezeTableName: true
        }
    )
}