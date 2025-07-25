// Components
import Card from "./Card";

export default function Widgets() {
    return (
        <main className="flex-1 grid grid-cols-4 grid-rows-5 gap-4 max-w-7xl flex basis-full items-center w-full mx-auto p-4 sm:p-6 lg:p-8">
            <Card id="1" className="" />
            <Card id="3" className="row-span-2" />
            <Card id="4" className="row-span-2 col-span-2" />
            <Card id="2" className="" />
            <Card id="5" className="row-span-3" />
            <Card id="6" className="row-span-3" />
            <Card id="7" className="row-span-2" />
            <Card id="8" className="row-span-2" />
            <Card id="9" className="col-span-2" />
        </main>
    );
}
