import Newsletter from "@/app/ui/news/newsletter";

export default function Page() {
    return (
        <div className="flex flex-col items-center w-full">
            <h2 className="text-3xl font-extrabold mb-6 text-center">Latest News</h2>
            <div className="w-full max-w-4xl mx-auto">
                <Newsletter/>
            </div>
        </div>
    )
}