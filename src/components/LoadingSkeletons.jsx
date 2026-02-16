import Skeleton from "@mui/material/Skeleton";

export function PriceGraphSkeleton() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8 mb-6">
      <div className="flex items-center gap-3 mb-6">
        <Skeleton variant="rounded" width={40} height={40} sx={{ borderRadius: "12px" }} />
        <div>
          <Skeleton variant="text" width={160} height={24} />
          <Skeleton variant="text" width={100} height={18} />
        </div>
      </div>
      <Skeleton variant="rounded" height={240} sx={{ borderRadius: "12px" }} />
    </div>
  );
}

export function FilterPanelSkeleton() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sticky top-24">
      <div className="flex items-center justify-between mb-5">
        <Skeleton variant="text" width={100} height={24} />
        <Skeleton variant="text" width={50} height={20} />
      </div>

      <Skeleton variant="text" width={80} height={16} className="mb-2" />
      <Skeleton variant="text" width={80} height={36} className="mb-2" />
      <Skeleton variant="rounded" height={6} sx={{ borderRadius: "99px" }} />
      <div className="flex justify-between mt-2">
        <Skeleton variant="text" width={20} />
        <Skeleton variant="text" width={40} />
      </div>

      <div className="mt-6">
        <Skeleton variant="text" width={50} height={16} className="mb-2" />
        <div className="space-y-2 mt-2">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} variant="text" height={28} />
          ))}
        </div>
      </div>

      <div className="mt-6">
        <Skeleton variant="text" width={60} height={16} className="mb-2" />
        <div className="space-y-2 mt-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <Skeleton key={i} variant="text" height={28} />
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
        <div key={idx} className="bg-white rounded-2xl border border-gray-100 p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <Skeleton variant="rounded" width={40} height={40} sx={{ borderRadius: "12px" }} />
                <div>
                  <Skeleton variant="text" width={140} height={22} />
                  <Skeleton variant="text" width={80} height={16} />
                </div>
              </div>
              <Skeleton variant="rounded" height={16} className="mb-3" />
              <div className="flex gap-2">
                <Skeleton variant="rounded" width={80} height={26} sx={{ borderRadius: "8px" }} />
                <Skeleton variant="rounded" width={80} height={26} sx={{ borderRadius: "8px" }} />
              </div>
            </div>
            <div className="w-28">
              <Skeleton variant="text" width={90} height={36} />
              <Skeleton variant="rounded" height={40} sx={{ borderRadius: "12px" }} className="mt-2" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
