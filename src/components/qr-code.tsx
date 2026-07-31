"use client";

import { QRCodeSVG } from "qrcode.react";

export function QrCode({ url, size = 60 }: { url: string; size?: number }) {
  return (
    <QRCodeSVG
      value={url}
      size={size}
      bgColor="#FFFFFF"
      fgColor="#14111F"
      level="M"
    />
  );
}
