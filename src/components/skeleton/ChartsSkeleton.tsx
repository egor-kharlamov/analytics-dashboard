export const ChartsSkeleton = () => {
    return (
        <div className="w-full max-w-[700px] border-gray-200 rounded-md border p-4 max-h-[70vh] aspect-[1.618]">
                <span className="relative flex size-5">
                  <span
                      className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3B82F6] opacity-75"></span>
                  <span className="relative inline-flex size-5 rounded-full bg-[#3B82F6]"></span>
                </span>
        </div>
    )
}