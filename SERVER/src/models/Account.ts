// ---------------- IMPORTS: ----------------
import mongoose, { Document, Schema } from "mongoose";


// ---------------- CODE: ----------------
type accountNumber = `${number}-${number}-${number}-${number}`;

const isValidAccountNumber = (str: string): boolean => {
    const accountNumber = str.split("-");
    return accountNumber.every((group) => /^\d{4}$/.test(group));
}

interface AccountAttributes {
    accountNumber: accountNumber;
    accountType: string;
    accountBalances: number;
    accountStatus: boolean;
}

// Definimos el esquema de Mongoose
const accountScheme = new Schema<AccountAttributes>({
    accountNumber: {
        type: String,
        required: true,
        validate: {
            validator: isValidAccountNumber,
            message: (props) => `Invalid account number: ${props.value}`,
        },
    },
    accountType: {
        type: String,
        enum: ["SAVING", "CURRENT", "SALARY"],
        required: true,
    },
    accountBalances: {
        type: Number,
        required: true,
    },
    accountStatus: {
        type: Boolean,
        required: true,
    },
});

// Definimos un método personalizado en el esquema para validar el número de cuenta
accountScheme.methods.validateAccountNumber = function (): boolean {
    return isValidAccountNumber(this.accountNumber);
};

// Definimos la interfaz del documento (esta corrección es importante)
interface AccountDocument extends Document, AccountAttributes {
    validateAccountNumber(): boolean;
}

// Creamos el modelo de Mongoose
const AccountModel = mongoose.model<AccountDocument>("Account", accountScheme);


// ---------------- EXPORTS: ----------------
export default AccountModel;