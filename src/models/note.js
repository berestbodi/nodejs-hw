import { Schema, model } from 'mongoose';
import { TAGS } from '../constants/tags.js';

const noteSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    tag: { type: String, enum: TAGS, required: true },
  },
  { timestamps: true },
);

noteSchema.index({ title: 'text', content: 'text' });

export const Note = model('note', noteSchema);
