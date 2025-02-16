"use client";
import { deleteEntry } from "@/app/actions";
import React from "react";

type Props = {
  title: string;
  content: string;
  mood: string;
  date: Date;
  _id: string;
};

export function EntryRow({ title, content, mood, date, _id }: Props) {
  return (
    <tr className="border-t">
      <td className="px-4 py-2 text-left">{title}</td>
      <td className="px-4 py-2 text-center">{content}</td>
      <td className="px-4 py-2 text-center">{mood}</td>
      <td className="px-4 py-2">{date.toDateString()}</td>
      <td className="px-4 py-2 text-right">
        <button onClick={async () => await deleteEntry(_id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            className="hover:fill-red-500 transition"
            viewBox="0 0 16 16"
          >
            <path d="M2.037 3.225A.7.7 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2a.7.7 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671zm9.89-.69C10.966 2.214 9.578 2 8 2c-1.58 0-2.968.215-3.926.534-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466-.18-.14-.498-.307-.975-.466z" />
          </svg>
        </button>
      </td>
    </tr>
  );
}
