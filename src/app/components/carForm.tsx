'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Maker {
  MakeId: number;
  MakeName: string;
}

export default function CarForm({ maker, rangeYear }: { maker: Maker[]; rangeYear: string[] }) {
  const [selectedMaker, setSelectedMaker] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<string>('');

  const isFormValid = selectedMaker && selectedYear;

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      const selectedMakerObject = maker.find(m => m.MakeName === selectedMaker);
      if (selectedMakerObject) {
        router.push(`/result/${selectedMakerObject.MakeId}/${selectedYear}`);
      }
    }
  };

  return (
    <form className="" onSubmit={handleSubmit}>
      <div className="flex flex-col w-[300px] justify-center gap-2 mb-3">
        <select
          className="p-2 border rounded bg-black"
          name="makers"
          value={selectedMaker}
          onChange={(e) => setSelectedMaker(e.target.value)}
        >
          <option value="">Select Maker</option>
          {maker.map((make: Maker) => (
            <option key={make.MakeId} value={make.MakeName}>
              {make.MakeName}
            </option>
          ))}
        </select>

        <select
          className="p-2 border rounded bg-black"
          name="year"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option value="">Select Year</option>
          {rangeYear.map((year: string) => (
            <option className="bg-transparent" key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <button
        className={`p-2 rounded border ${isFormValid ? 'hover:bg-gray-700' : ''} text-white`}
        type="submit"
        disabled={!isFormValid}
      >
        Next
      </button>
    </form>
  );
}