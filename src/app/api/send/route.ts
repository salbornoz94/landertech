import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Verificar que la API key esté configurada
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: 'RESEND_API_KEY no está configurada' },
        { status: 500 }
      );
    }

    const { name, email, phone, message } = await request.json();

    console.log('Datos recibidos:', { name, email, phone, message });

    const { data, error } = await resend.emails.send({
      from: 'Nuevo mensaje <onboarding@resend.dev>',
      to: ['santi.albornoz156@gmail.com'],
      subject: `Nuevo mensaje desde LanderTech - ${name}`,
      replyTo: email,
      text: `
        Nombre: ${name}
        Email: ${email}
        Teléfono: ${phone || 'No proporcionado'}
        Mensaje: ${message}
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json(
      { error: 'Error sending email' },
      { status: 500 }
    );
  }
}

// Exportar otros métodos para evitar 405
export async function GET() {
  return NextResponse.json({ message: 'Use POST method' }, { status: 405 });
} 