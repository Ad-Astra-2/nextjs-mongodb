import { Schema, model, Document, models } from "mongoose";

export interface IEntry {
  title: string;
  content: string;
  date: Date;
  mood: string;
}
export interface IEntryDocument extends IEntry, Document {}

const EntrySchema = new Schema<IEntryDocument>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: Date, required: true, default: Date.now },
  mood: { type: String, required: true },
});

export default models.Entry || model<IEntry>("Entry", EntrySchema);
