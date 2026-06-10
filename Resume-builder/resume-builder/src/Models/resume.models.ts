import { IResume } from "@/types/resume.types";
import mongoose from "mongoose";
import { start } from "node:repl";

const resumeSchema = new mongoose.Schema<IResume>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: {
      type: String,
      default: "",
    },

    summary: {
      type: String,
      default: "",
    },
    personalInfo:{
      type:{
        fullname:String,
        email:String,
        mobile:String,
        location:String,
        github:String,
        portfolio:String
      }
    },
    education:{
      type:[{
        institute:String,
        degree:String,
        startDate:Date,
        endDate:Date

      }
      ],
      default: [],
    },

    workExperience: {
      type: [
        {
          company: String,
          position: String,
          startDate: String,
          endDate: String,
          description: String,
        },
      ],
      default: [],
    },

    projects: {
      type: [
        {
          title: String,
          description: String,
          techStack: [String],
          githubUrl: String,
          liveUrl: String,
        },
      ],
      default: [],
    },

    skills: {
      type: [String],
      default: [],
    },

    certifications: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Resume =
  mongoose.models.Resume ||
  mongoose.model<IResume>("Resume", resumeSchema);

export default Resume;