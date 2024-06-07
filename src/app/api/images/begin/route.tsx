import { NextResponse } from "next/server";
import { ImageResponse } from "next/og";
import { join } from "path";
import * as fs from "fs";

const interRegPath = join(process.cwd(), "public/Inter-Regular.ttf");
let interReg = fs.readFileSync(interRegPath);

const interBoldPath = join(process.cwd(), "public/Inter-Bold.ttf");
let interBold = fs.readFileSync(interBoldPath);

export async function GET() {
  return new ImageResponse(
    (
<div
        style={{
          display: "flex", 
          flexDirection: "row", 
          alignItems: "stretch", 
          width: "100%",
          height: "100vh",
          backgroundColor: "white",
        }}
      >
        <img
          style={{
            height: "100%", 
            objectFit: "cover", 
            width: "35%", 
          }}
          src="https://th.bing.com/th/id/OIG2.W6b_3sqcY3F349j66Kfb?w=1024&h=1024&rs=1&pid=ImgDetMain"
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            paddingLeft: 24,
            paddingRight: 24,
            lineHeight: 1.2,
            fontSize: 36,
            color: "black",
            flex: 1,
            overflow: "hidden",
            marginTop: 24,
          }}
        >
          <div
            style={{
              color: "#0a588c",
              fontSize: 72,
              marginBottom: 12,
              display: "flex"
            }}
          >
            <strong>AI Story Frames</strong>
          </div>
          <div
            style={{
              display: "flex",
              overflow: "hidden",
            }}
          >
            Type some creative one liner in the text input below and we will generate an image.
          </div>
        </div>
      </div>
    ),
    {
      width: 1528,
      height: 800,
      fonts: [
        {
          name: "Inter",
          data: interReg,
          weight: 400,
          style: "normal",
        },
        {
          name: "Inter",
          data: interBold,
          weight: 800,
          style: "normal",
        },
      ],
    }
  );
}