import { existsSync } from "fs";
import { readFile } from "fs/promises";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "TranHoangDat-CV.pdf");
  const fileName = "TranHoangDat-CV.pdf";

  if (!existsSync(filePath)) {
    return new Response("File not found", {
      status: 404,
    });
  }

  const buffer = await readFile(filePath);

  const headers = new Headers();
  headers.set("Content-Disposition", `attachment; filename="${fileName}"`);
  headers.set("Content-Type", "application/pdf");
  headers.set("Content-Length", `${buffer.byteLength}`);

  return new Response(buffer, {
    headers,
  });
}
