import { Schema, models, model, Document } from "mongoose";

export interface IUser extends Document {
    clerkId: string;
    name: string;
    username: string;
    email: string;
    password?: string;
    bio?: string;
    picture: string;
    location?: string;
    portfolioWebsite?: string;
    reputation?: number;
    saved: Schema.Types.ObjectId[];
    joinedAt: Date;
}

const UserSchema = new Schema<IUser>({
    clerkId: { type: String, required: true },
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String }, // Exclude password by default
    bio: { type: String, default: '' },
    picture: { type: String, required: true },
    location: { type: String, default: '' },
    portfolioWebsite: { type: String, default: '' },
    reputation: { type: Number, default: 0 },
    saved: [{ type: Schema.Types.ObjectId, ref: 'Question' }], // Adjust ref to your model
    joinedAt: { type: Date, default: Date.now }
});


const User = models.User || model('User', UserSchema);

export default User