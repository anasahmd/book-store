import Connect from '@/app/db/Connect';
import Book from '@/app/models/Book';
import { NextResponse } from 'next/server';

export const GET = async (req, { params }) => {
	let { bookid } = params;
	await Connect();
	let data,
		code = 200;

	try {
		data = await Book.findById(bookid);
	} catch (e) {
		data = 'Something went wrong';
		code = 500;
	}
	return NextResponse.json({ data }, { status: code });
};

export const PUT = async (req, { params }) => {
	await Connect();
	let { bookid } = params;
	let data = await req.json();
	let updateData,
		code = 200;
	try {
		updateData = await Book.findByIdAndUpdate(bookid, data);
	} catch (e) {
		code = 501;
		updateData = 'Something went wrong';
	}
	return NextResponse.json({ updateData }, { status: code });
};

export const DELETE = async (req, { params }) => {
	await Connect();
	let { bookid } = params;
	let data,
		code = 200;
	try {
		data = await Book.findByIdAndDelete(bookid);
	} catch (e) {
		code = 501;
		updateData = 'Something went wrong';
	}
	return NextResponse.json({ data }, { status: code });
};
