import Newsletter from "@/app/components/news/newsletter";

export default function Page() {
    return (
        <div className="flex flex-col items-center w-full">
            <h2 className="text-xl md:text-3xl font-extrabold mb-3 md:mb-6 text-center">Latest News</h2>
            <div className="w-full mx-auto">
                <Newsletter/>
            </div>
        </div>
    )
}