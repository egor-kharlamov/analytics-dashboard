export const CardsSkeleton = () => {
    return (
        <div
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 pl-10 pr-10 hover:shadow-md transition-shadow duration-200">
            <div className="flex animate-pulse space-x-4">
                <div className="size-5 rounded-full bg-gray-200"></div>
                <div className="flex-1 space-y-6 py-1">
                    <div className="h-2 rounded bg-gray-200"></div>
                    <div className="space-y-3">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="col-span-2 h-2 rounded bg-gray-200"></div>
                            <div className="col-span-1 h-2 rounded bg-gray-200"></div>
                        </div>
                        <div className="h-2 rounded bg-gray-200"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
