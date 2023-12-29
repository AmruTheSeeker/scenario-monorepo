import { NextResponse } from "next/server";
import { prisma } from '@scenario-monorepo/db'

export async function GET(request: Request) {
  const notes = await prisma.note.findMany()

  return NextResponse.json(notes);
}