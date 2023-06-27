import Connect from '@/app/db/Connect';
import Book from '@/app/models/Book';
import { NextResponse } from 'next/server';

export const GET = async () => {
	await Connect();
	let data,
		code = 200;
	try {
		data = await Book.find({});
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

	newBook = new Book(data);

	try {
		await newRecord.save();
	} catch (e) {
		newRecord = 'Insertion Failed';
		code = 500;
	}
	return NextResponse.json({ newBook }, { status: code });
};
