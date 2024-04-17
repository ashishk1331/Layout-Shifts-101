import Header from "@/components/dashboard/Header.tsx";
import Widgets from "@/components/dashboard/Widgets.tsx";

export default function Page() {
  return (
    <div className="w-full h-screen flex flex-col items-center pb-4 bg-gray-100">
      <Header />
      <Widgets />
    </div>
  );
}