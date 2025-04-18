import { NextRequest, NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  try {
    const conn = await mysql.createConnection({
      host: 'srv1465.hstgr.io',
      user: 'u827570709_balioceane',
      password: '2Fd$HV&PmWc+',
      database: 'u827570709_balioceaneDB',
    });

    await conn.execute(
      'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)',
      [name, email, message]
    );

    return NextResponse.json({ message: 'Pesan berhasil dikirim!' });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: 'Gagal menyimpan data' }, { status: 500 });
  }
}
