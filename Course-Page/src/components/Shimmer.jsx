import React from 'react'

const Shimmer = () => {
  return (
    <div className="grid gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 9 }).map((_, idx) => (
        <div key={idx} className="space-y-4 rounded-3xl border border-slate-700 bg-slate-900 p-5 shadow-xl animate-pulse">
          <div className="h-52 rounded-3xl bg-slate-700" />
          <div className="space-y-3">
            <div className="h-6 w-3/4 rounded-full bg-slate-700" />
            <div className="h-6 w-1/2 rounded-full bg-slate-700" />
          </div>
          <div className="space-y-2">
            <div className="h-4 w-full rounded-full bg-slate-700" />
            <div className="h-4 w-5/6 rounded-full bg-slate-700" />
          </div>
        </div> 
      ))}
    </div>
  )
}

export default Shimmer