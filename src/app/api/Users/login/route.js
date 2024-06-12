import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import User from "@/app/models/UserModel";
import { NextResponse } from "next/server";

export async function POST(Request) {
  try {
    const { email, password } = await Request.json();

    // Validate the JSON structure or required fields here if needed

    // Find user by email
    const user = await User.findOne({ email });

    // Check if user exists
    if (!user) {
      return NextResponse.json({
        error: "Invalid credentials",
        status: 401,
      });
    }

    // Validate password
    const isPasswordValid = await bcryptjs.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({
        error: "Invalid credentials",
        status: 401,
      });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h", // Token expires in 1 hour
    });

    return NextResponse.json({
      token,
      message: "Login successful",
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal server error", status: 500 });
  }
}
