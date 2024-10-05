/* eslint-disable @typescript-eslint/no-explicit-any */
import { Suspense } from 'react';

async function GetModelsForMakeIdYear(makeId: string, year: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    return data.Results;
  } catch (error) {
    console.error("Error fetching vehicle models:", error);
    return [];
  }
}

export default async function ResultPage({
  params,
}: {
  params: { makeId: string; year: string };
}) {
  const { makeId, year } = params;

  const vehicleData = await GetModelsForMakeIdYear(makeId, year);

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-2xl font-bold mb-4">
        Vehicle Models for Make ID: {makeId}, Year: {year}
      </h1>

      {vehicleData.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {vehicleData.map((vehicle: any) => (
            <li
              key={vehicle.Model_ID}
              className="p-4 border rounded-lg"
            >
              <h2 className="text-xl font-semibold">{vehicle.Model_Name}</h2>
              <p className="text-white">Make: {vehicle.Make_Name}</p>
              <p className="text-white">Model ID: {vehicle.Model_ID}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-center text-gray-500 mt-10">
          No vehicle models found for this combination.
        </div>
      )}
    </div>
  );
}

export function ResultPageWrapper({
  params,
}: {
  params: { makeId: string; year: string };
}) {
  return (
    <Suspense fallback={<div className="text-center">Loading models...</div>}>
      <ResultPage params={params} />
    </Suspense>
  );
}
