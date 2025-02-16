import dbConnect from "@/lib/dbConnect";
import { createEntry } from "./actions";
import Entry, { IEntryDocument } from "@/models/Entry";
import { EntryRow } from "@/components/EntryRow";

const getEntries = async () => {
  try {
    await dbConnect();
    const entries: IEntryDocument[] = await Entry.find();
    return entries;
  } catch (error) {
    console.error("Failed to fetch entries:", error);
    throw new Error("Failed to fetch entries");
  }
};

export default async function Home() {
  const entries = await getEntries();

  return (
    <div className="w-screen h-screen p-8 bg-indigo-300">
      <main className="flex w-full h-full gap-8 ">
        <form
          className="w-1/2 flex flex-col gap-4 bg-white p-4 h-fit rounded-xl shadow-xl"
          action={createEntry}
        >
          <div className="flex flex-col gap-1">
            <label>Title</label>
            <input
              className="outline-none border-b border-black p-1"
              name="title"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Content</label>
            <textarea
              className="outline-none border-b border-black p-1"
              name="content"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Date</label>
            <input
              className="outline-none border-b border-black p-1"
              type="date"
              name="date"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Mood</label>
            <input
              className="outline-none border-b border-black p-1"
              type="text"
              name="mood"
            />
          </div>
          <button className="bg-slate-800 text-white w-fit self-center px-4 py-1 rounded-lg hover:bg-transparent border-slate-800 border hover:text-slate-800 transition">
            Submit
          </button>
        </form>
        <div className="h-full overflow-y-auto bg-white w-1/2 flex flex-col gap-4 p-4 rounded-xl shadow-xl">
          <table className="table-auto w-full h-fit">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">Title</th>
                <th className="px-4 py-2">Content</th>
                <th className="px-4 py-2">Mood</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry) => (
                <EntryRow
                  key={entry._id.toString()}
                  title={entry.title}
                  content={entry.content}
                  mood={entry.mood}
                  date={entry.date}
                  _id={entry._id.toString()}
                />
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
