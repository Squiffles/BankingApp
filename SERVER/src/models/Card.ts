// ---------------- IMPORTS: ----------------
import mongoose, { Document, Schema } from "mongoose";



// ---------------- CODE: ----------------
type CardNumber = `${number}-${number}-${number}-${number}`;
function isValidCardNumber(str: string): boolean {
    const cardNumber = str.split("-");
    return cardNumber.every((group) => /^\d{4}$/.test(group));
}

interface CardAttributes {
    account_number: CardNumber;
    expirationDate: string;
    cardType: string;
    cvv: string;
}

const cardScheme = new Schema<CardAttributes>({
    account_number: {
        type: String,
        required: true,
        validate: {
            validator: isValidCardNumber,
            message: (props) => `Invalid card number: ${props.value}`,
        },
    },
    expirationDate: {
        type: String,
        required: true,
    },
    cardType: {
        type: String,
        required: true,
    },
    cvv: {
        type: String,
        required: true,
    },
});

interface CardDocument extends Document, CardAttributes { }

const CardModel = mongoose.model<CardDocument>("Card", cardScheme);



// ---------------- EXPORTS: ----------------
export { CardModel, CardAttributes };