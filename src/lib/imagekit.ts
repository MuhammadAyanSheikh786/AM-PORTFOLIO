import { ImageKit } from "@imagekit/nodejs";

export const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
});

export const IK_URL_ENDPOINT = process.env.IMAGEKIT_URL_ENDPOINT!;
