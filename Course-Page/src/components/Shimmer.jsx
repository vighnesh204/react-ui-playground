import React from 'react'

const Shimmer = () => {
  return (
    <div className="w-11/12 max-w-[1200px] mx-auto grid gap-6 py-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 9 }).map((_, idx) => (
        <div key={idx} className="space-y-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm animate-pulse">
          <div className="h-52 rounded-xl bg-gray-200" />
          <div className="space-y-3">
            <div className="h-5 w-3/4 rounded-full bg-gray-200" />
            <div className="h-5 w-1/2 rounded-full bg-gray-200" />
          </div>
          <div className="space-y-2">
            <div className="h-3.5 w-full rounded-full bg-gray-100" />
            <div className="h-3.5 w-5/6 rounded-full bg-gray-100" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Shimmer