import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import multer from "multer";
import path from "path";
import User from "@/app/models/UserModel";
import { connect } from "@/app/config/db.js";
import { NextResponse } from "next/server";

export async function POST(Request) {
  try {
    const givingdata = await Request.json();
    const { username, email, password, confirmpassword } = givingdata;

    // Validate the JSON structure or required fields here if needed

    await connect();
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({
        error: "User already exists",
        status: 400,
      });
    }
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    const Post_Message = new User({
      username,
      email,
      password: hashedPassword,
      confirmpassword,
    });

    const Save_Message = await Post_Message.save();
    if (!Save_Message) {
      return NextResponse.json({ message: "Message Not added" });
    } else {
      return NextResponse.json({
        message: "User created successfully",
        success: true,
        status: 200,
      });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message, status: 500 });
  }
}
