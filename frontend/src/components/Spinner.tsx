export const Spinner = () => {
  return (
    <div>
      <div className="flex justify-center animate-pulse">
        <div className="grid grid-cols-12 px-10 w-full pt-200 max-h-screen-xl pt-10">
          <div className="col-span-8">
            {/* Title Skeleton */}
            <div className="h-10 bg-gray-300 rounded w-3/4 mb-4"></div>
            {/* Date Skeleton */}
            <div className="h-4 bg-gray-200 rounded w-1/4 mb-6"></div>
            {/* Content Skeleton */}
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
            </div>
          </div>
          <div className="col-span-4">
            <div className="text-slate-600 text-lg mb-4">Author</div>
            <div className="flex pt-4">
              <div className="pr-4 flex justify-center">
                {/* Avatar Skeleton */}
                <div className="h-16 w-16 bg-gray-300 rounded-full"></div>
              </div>
              <div>
                {/* Author Name Skeleton */}
                <div className="h-6 bg-gray-300 rounded w-1/2 mb-2"></div>
                {/* Author Description Skeleton */}
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
