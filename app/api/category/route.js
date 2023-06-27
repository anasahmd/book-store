import Connect from '@/app/db/Connect';
import Category from '@/app/models/Category';
import { NextResponse } from 'next/server';

export const GET = async () => {
	await Connect();
	let data,
		code = 200;
	try {
		data = await Category.find({});
	} catch (e) {
		code = 501;
		data = 'Something went wrong!';
	}
	return NextResponse.json({ data }, { status: code });
};

export const POST = async (req) => {
	await Connect();

	let data,
		newRecord,
		code = 200;

	data = await req.json();

	newRecord = new Category(data);

	try {
		await newRecord.save();
	} catch (e) {
		newRecord = 'Insertion Failed';
		code = 500;
	}
	return NextResponse.json({ newRecord }, { status: code });
};
