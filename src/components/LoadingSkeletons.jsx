import Skeleton from "@mui/material/Skeleton";

export function PriceGraphSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <Skeleton variant="text" width={260} height={28} />
      <Skeleton variant="rounded" height={250} className="mt-4" />
    </div>
  );
}

export function FilterPanelSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
      <div className="flex items-center justify-between mb-4">
        <Skeleton variant="text" width={120} height={28} />
        <Skeleton variant="text" width={70} height={22} />
      </div>

      <Skeleton variant="text" width={150} height={22} />
      <Skeleton variant="rounded" height={14} className="mt-2" />
      <div className="flex justify-between mt-2">
        <Skeleton variant="text" width={30} />
        <Skeleton variant="text" width={50} />
      </div>

      <div className="mt-6">
        <Skeleton variant="text" width={80} height={22} />
        <div className="space-y-2 mt-2">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} variant="text" height={24} />
          ))}
        </div>
      </div>

      <div className="mt-6">
        <Skeleton variant="text" width={90} height={22} />
        <div className="space-y-2 mt-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <Skeleton key={i} variant="text" height={24} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function FlightListSkeleton({ count = 5 }) {
  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, idx) => (
        <div key={idx} className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <Skeleton variant="text" width={220} height={26} />
              <Skeleton variant="text" width={140} height={20} />
              <div className="mt-4">
                <Skeleton variant="rounded" height={16} />
              </div>
              <div className="mt-3 flex gap-2">
                <Skeleton variant="rounded" width={90} height={26} />
                <Skeleton variant="rounded" width={90} height={26} />
              </div>
            </div>
            <div className="w-32">
              <Skeleton variant="text" width={100} height={34} />
              <Skeleton variant="rounded" height={36} className="mt-2" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
