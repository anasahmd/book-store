import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema(
	{
		cat_title: { type: String },
	},
	{ timestamps: true }
);

export default mongoose.models.Category ||
	mongoose.model('Category', CategorySchema);
