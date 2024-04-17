import Header from "@/components/dashboard/Header";
import Widgets from "@/components/dashboard/Widgets";

export default function Page() {
  return (
    <div className="w-full h-screen flex flex-col items-center pb-4 bg-gray-100">
      <Header />
      <Widgets />
    </div>
  );
}