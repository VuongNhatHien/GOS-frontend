import InputUserId from "@/components/app/input-userId";

export default function ScoresLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col gap-4 w-full p-4">
      <InputUserId />
      {children}
    </div>
  );
}
