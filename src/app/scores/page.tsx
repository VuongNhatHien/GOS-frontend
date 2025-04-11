"use client";
import { Button } from "@/components/ui/button";
import Form from "next/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Scores() {
  const router = useRouter();
  const [input, setInput] = useState("");
  return (
    <div className="flex flex-col gap-4 w-full p-4">
      <div className="border shadow-md rounded-md p-4 flex flex-col">
        <p className="font-bold text-lg">User Registration</p>
        <p className="mt-2">Registration Number</p>
        <form
          onSubmit={() => router.push(`/scores/${input}`)}
          className="mt-1 space-y-2"
        >
          <Input
            type="number"
            className="w-58"
            placeholder="Enter Registration Number"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            required
          />
          <Button type="submit">Submit</Button>
        </form>
      </div>

      <div className="border shadow-md rounded-md p-4 flex flex-col">
        <p className="font-bold text-lg">Detail Scores</p>
        <p className="mt-2">Enter registration number to view scores</p>
      </div>
    </div>
  );
}
