import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json(
    {
      message: 'Dashboard API endpoint',
      status: 'success',
      timestamp: new Date().toISOString(),
    },
    { status: 200 },
  )
}

export async function POST(req: NextRequest) {
  const body = await req.json()

  return NextResponse.json(
    {
      message: 'Data received',
      data: body,
      status: 'success',
    },
    { status: 201 },
  )
}
