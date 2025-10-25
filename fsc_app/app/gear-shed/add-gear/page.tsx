import create_gear from "../create_gear";

export default function AddGearForm() {
  return (
    // background
    <div className="">
      <div className="fixed inset-0 -z-1 bg-fixed bg-cover bg-center bg-[url(/mountain-landscape.jpg)]" />
      <div className="flex flex-col items-start backdrop-blur-md m-5 p-3 bg-tan-50/50 rounded-xl">
        <h1 className="font-markazi text-5xl self-center">Add Gear</h1>
      </div>
    </div>
  );
}
