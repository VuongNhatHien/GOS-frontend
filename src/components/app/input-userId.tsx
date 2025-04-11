"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function InputUserId() {
  const router = useRouter();
  const [input, setInput] = useState("");
  return (
    <div className="border shadow-md rounded-md p-4 flex flex-col">
      <p className="font-bold text-lg">User Registration</p>
      <p className="mt-2">Registration Number</p>
      <form
        onSubmit={() => router.push(`/scores/${input}`)}
        className="mt-1 space-y-2"
      >
        <Input
          className="w-52"
          placeholder="Enter Registration Number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          required
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
