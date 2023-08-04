// ---------------- IMPORTS: ----------------
// import { Sequelize, Model, DataTypes } from 'sequelize';
import mongoose, { Document, Schema } from "mongoose";



// ---------------- CODE: ----------------
interface AddressAttributes {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
}

interface UserAttributes {
    name: string;
    email: string;
    phone: string;
    picture?: string;
    admin: boolean;
    active: boolean;
    address?: AddressAttributes;
}

interface UserDocument extends Document, UserAttributes { }

const UserScheme = new Schema<UserAttributes>({
    name: {
        type: String,
        allowNull: false,
    },
    phone: {
        type: String,
        allowNull: false,
    },
    email: {
        type: String,
        allowNull: false,
        // validate: {
        //     isEmail: true
        // }
    },
    picture: {
        type: String,
        allowNull: true,
        defaultValue:
            'https://icon-library.com/images/no-profile-pic-icon/no-profile-pic-icon-24.jpg',
    },
    admin: {
        type: Boolean,
        defaultValue: false,
        allowNull: false,
    },
    active: {
        type: Boolean,
        defaultValue: false,
        allowNull: false,
    },
    address: {
        type: JSON,
    },
});

const User = mongoose.model<UserDocument>("User", UserScheme)



// ---------------- EXPORTS: ----------------
export default User;