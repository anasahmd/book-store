import mongoose from 'mongoose';

const BookSchema = new mongoose.Schema(
	{
		title: { type: String },
		author: { type: String },
		nop: { type: Number },
		description: { type: String },
		category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
		isbn: { type: String, unique: true },
	},
	{ timestamps: true }
);

//nop : no of page

export default mongoose.models.Book || mongoose.model('Book', BookSchema);
