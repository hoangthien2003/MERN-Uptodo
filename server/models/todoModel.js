import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    priority: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const TodoModel = mongoose.model("Todo", todoSchema);
