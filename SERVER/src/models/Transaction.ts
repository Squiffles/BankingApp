// ---------------- IMPORTS: ----------------
import mongoose, { Document, Schema } from 'mongoose';



// ---------------- CODE: ----------------
interface TransactionAttributes {
    sender: number,
    receiver: number,
    sentAmount: number,
    receivedAmount: number,
    date: string
}

interface TransactionDocument extends Document, TransactionAttributes {}

const transactionScheme = new Schema<TransactionAttributes>({
    sender: {
        type: Number,
        allowNull: false
    },
    receiver: {
        type: Number,
        allowNull: false
    },
    sentAmount: {
        type: Number,
        allowNull: false
    },
    receivedAmount: {
        type: Number,
        allowNull: false
    },
    date: {
        type: String,
        allowNull: false
    }
})

const Transaction = mongoose.model<TransactionDocument>('Transaction', transactionScheme);



// ---------------- EXPORTS: ----------------
export default Transaction;