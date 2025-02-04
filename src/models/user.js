import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Name is required'],
		},
		email: {
			type: String,
			required: [true, 'Email is required'],
			unique: true,
		},
		password: {
			type: String,
			required: [true, 'Password is required'],
		},
		bio: {
			type: String,
		},
		groups: {
			type: [String],
			default: [],
		},
		permissions: {
			type: [String],
			default: [],
		},
		dateJoined: {
			type: String,
		},
		lastLogin: {
			type: String,
		},
		dateOfBirth: {
			type: String,
		},
		gender: {
			type: String,
			enum: ['Male', 'Female', 'Other'],
		},
		age: {
			type: Number,
		},
		address: {
			type: String,
		},
		phone: {
			type: String,
		},
		website: {
			type: String,
		},
		profilePicture: {
			type: String,
			default: '',
		},
		coverPicture: {
			type: String,
			default: '',
		},
		socialLinks: {
			type: [String],
			default: [],
		},
		languages: {
			type: [String],
			default: [],
		},
		interests: {
			type: [String],
			default: [],
		},
		followers: {
			type: Number,
			default: 0,
		},
		following: {
			type: Number,
			default: 0,
		},
		tokensEarned: {
			type: Number,
			default: 0,
		},
		totalNotesCreated: {
			type: Number,
			default: 0,
		},
		totalSlateBoardsCreated: {
			type: Number,
			default: 0,
		},
		isAdmin: {
			type: Boolean,
			default: false,
		},
		isVerified: {
			type: Boolean,
			default: false,
		},
		isDeleted: {
			type: Boolean,
			default: false,
		},
        forgotPasswordToken: String,
        forgotPasswordTokenExpiry: Date,
        verifyToken: String,
        VerifyTokenExpiry: Date
	},
	{
		timestamps: true,
	}
)

const User = mongoose.models.User || mongoose.model('User', userSchema)

export default User
