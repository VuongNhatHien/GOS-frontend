export default async function Page({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = await params;
  return (
    <div className="border shadow-md rounded-md p-4 flex flex-col">
      <p className="font-bold text-lg">Detail Scores</p>
      <p className="mt-2">{userId}</p>
    </div>
  );
}
