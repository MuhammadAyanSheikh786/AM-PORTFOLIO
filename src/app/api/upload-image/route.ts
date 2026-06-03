import { NextRequest, NextResponse } from "next/server";
import { imagekit } from "@/lib/imagekit";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    const pasteData = formData.get("pasteData") as string | null;
    const fileName = (formData.get("fileName") as string) || "project-image";

    let uploadResult;

    if (file && file.size > 0) {
      const buffer = Buffer.from(await file.arrayBuffer());
      const base64File = buffer.toString("base64");
      uploadResult = await imagekit.files.upload({
        file: base64File,
        fileName,
        folder: "/projects",
        useUniqueFileName: true,
      });
    } else if (pasteData) {
      const base64 = pasteData.replace(/^data:image\/\w+;base64,/, "");
      uploadResult = await imagekit.files.upload({
        file: base64,
        fileName,
        folder: "/projects",
        useUniqueFileName: true,
      });
    } else {
      return NextResponse.json({ error: "No file or paste data provided" }, { status: 400 });
    }

    return NextResponse.json({
      url: uploadResult.url,
      fileId: uploadResult.fileId,
      thumbnailUrl: uploadResult.thumbnailUrl,
    });
  } catch (err) {
    console.error("ImageKit upload error:", err);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
