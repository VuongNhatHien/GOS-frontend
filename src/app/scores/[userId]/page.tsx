import { ResponseType } from "@/types/common.type";
import { ScoreType } from "@/types/schema.type";

export default async function Page({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = await params;
  const fetchData = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/scores/${userId}`
  );
  const res: ResponseType<ScoreType> = await fetchData.json();

  if (!res.data) {
    if (res.code === "USER_NOT_FOUND") {
      return (
        <div className="border shadow-md rounded-md p-4 flex flex-col">
          <p className="font-bold text-lg">Detail Scores</p>
          <p className="mt-2">Invalid Registration Number</p>
        </div>
      );
    } else {
      return (
        <div className="border shadow-md rounded-md p-4 flex flex-col">
          <p className="font-bold text-lg">Detail Scores</p>
          <p className="mt-2">Something went wrong, please try again</p>
        </div>
      );
    }
  }

  const {
    id,
    toan,
    nguVan,
    ngoaiNgu,
    vatLi,
    hoaHoc,
    sinhHoc,
    lichSu,
    diaLi,
    gdcd,
    maNgoaiNgu,
  } = res.data;

  const scoreFields = [
    { key: "toan", label: "Math", value: toan },
    { key: "nguVan", label: "Literature", value: nguVan },
    { key: "ngoaiNgu", label: "Foreign Language", value: ngoaiNgu },
    { key: "vatLi", label: "Physics", value: vatLi },
    { key: "hoaHoc", label: "Chemistry", value: hoaHoc },
    { key: "sinhHoc", label: "Biology", value: sinhHoc },
    { key: "lichSu", label: "History", value: lichSu },
    { key: "diaLi", label: "Geography", value: diaLi },
    { key: "gdcd", label: "Civic Education", value: gdcd },
  ];

  return (
    <div className="border shadow-md rounded-md p-4 flex flex-col">
      <p className="font-bold text-lg">Detail Scores</p>
      <div className="mt-4">
        <p>
          <span className="font-semibold">Registration Number:</span> {id}
        </p>
        <p>
          <span className="font-semibold">Foreign Language Code:</span>{" "}
          {maNgoaiNgu || "N/A"}
        </p>
        <div className="mt-2">
          <p className="font-semibold">Scores:</p>
          <ul className="list-disc pl-5">
            {scoreFields.map(({ key, label, value }) => (
              <li key={key}>
                {label}: {value !== null ? value : "N/A"}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
