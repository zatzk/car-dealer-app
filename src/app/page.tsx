import CarForm from "./components/carForm";

interface Car {
  MakeId: number;
  MakeName: string;
  VehicleTypeId: number;
  VehicleTypeName: string;
}

export default async function Home() {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/GetMakesForVehicleType/car?format=json`);
  const fetchedData = await data.json();

  const maker = fetchedData.Results.map((car: Car) => ({
    MakeId: car.MakeId,
    MakeName: car.MakeName,
  }));
  const rangeYear = Array.from(Array(new Date().getFullYear() - 2015 + 1), (_, i) => (i + 2015).toString())

  console.log(rangeYear);

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex rounded w-[400px] h-[500px] items-center justify-center border">
        <CarForm maker={maker} rangeYear={rangeYear}/>
      </div>
    </div>
  );
}
