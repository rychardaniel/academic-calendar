import { Calendar } from "./calendar";

export function Body() {
    return (
        <main className="bg-zinc-300 dark:bg-zinc-950 h-[calc(100vh-68px)] flex justify-center">
            <div className="bg-zinc-200 dark:bg-zinc-900 rounded-3xl w-full p-4 m-4 sm:m-6 overflow-hidden relative">
                <Calendar />
            </div>
        </main>
    );
}
