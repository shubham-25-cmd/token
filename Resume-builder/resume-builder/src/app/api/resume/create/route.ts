import { connectDB } from "@/lib/mongodb";
import { getCurrentUser } from "@/lib/getCurrrentUser";
import ResumeModel from "@/models/resume.models";
import { ApiResponse } from "@/types/api.types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const userId = await getCurrentUser();

    const newResume = await ResumeModel.create({
      user_id: userId,
      title: "",
      summary: "",
      personalInfo: {
        fullname: "",
        email: "",
        mobile: "",
        location: "",
        github: "",
        linkedin: "",
        portfolio: "",
      },
      workExperience: [],
      projects: [],
      education: [],
      certifications: [],
      skills: [],
    });

    return NextResponse.json<ApiResponse>(
      {
        success: true,
        message: "Resume created successfully",
        data: newResume,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in create resume API:", error);

    return NextResponse.json<ApiResponse>(
      {
        success: false,
        message: "Something went wrong",
      },
      { status: 500 }
    );
  }
}