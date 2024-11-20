export default function TotalsListCard() {
  return (
    <div className="card border border-neutral bg-base-100 shadow-md">
      <div className="card-body">
        <div className="card-title flex justify-between">
          <div>Expenses vs Income</div>
          <div className="cursor-grab">:</div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded bg-red-200 p-2">
            <div className="stat-title text-red-800">Total Expenses</div>
            <div className="stat-value text-red-800">$6,000</div>
          </div>

          <div className="rounded bg-green-200 p-2">
            <div className="stat-title text-green-800">Total Income</div>
            <div className="stat-value text-green-800">$4,200</div>
          </div>

          <div className="col-span-2 rounded bg-base-200 p-2 text-center">
            <div className="stat-title">Leftover</div>
            <div className="stat-value">$1,200</div>
          </div>
        </div>
      </div>
    </div>
    // <div className="stats stats-vertical bg-primary text-primary-content shadow">
    //   <div className="stat">
    //     <div className="stat-title">Total Expenses</div>
    //     <div className="stat-value">$6,000</div>
    //     {/* <div className="stat-desc">Jan 1st - Feb 1st</div> */}
    //   </div>

    //   <div className="stat">
    //     <div className="stat-title">Total Income</div>
    //     <div className="stat-value">$4,200</div>
    //     {/* <div className="stat-desc">↗︎ 400 (22%)</div> */}
    //   </div>

    //   <div className="stat">
    //     <div className="stat-title">Leftover</div>
    //     <div className="stat-value">$1,200</div>
    //     {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
    //   </div>
    // </div>
  );
}
