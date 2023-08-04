// ---------------- IMPORTS: ----------------
import mongoose, { Document, Schema } from 'mongoose';



// ---------------- CODE: ----------------
interface CurrencyAttributes {
    name: string;
    code: string;
    symbol: string;
    exchangeRate: number;
}

const currencyScheme = new Schema<CurrencyAttributes>({
    name: {
        type: String,
        required: true,
        maxlength: 10,
    },
    code: {
        type: String,
        required: true,
        maxlength: 3,
    },
    symbol: {
        type: String,
        required: true,
        maxlength: 1,
    },
    exchangeRate: {
        type: Number,
        required: true,
    },
});

interface CurrencyDocument extends Document, CurrencyAttributes {}

const CurrencyModel = mongoose.model<CurrencyDocument>('Currency', currencyScheme);



// ---------------- EXPORTS: ----------------
export { CurrencyModel, CurrencyAttributes };