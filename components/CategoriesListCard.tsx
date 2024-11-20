import { useState } from "react";

export default function CategoriesListCard() {
  const [drag, setDrag] = useState(false);

  return (
    <div
      className="card border border-neutral bg-base-100 shadow-md"
      draggable={true}
      onDragStart={(e) => setDrag(true)}
      onDragEnd={(e) => setDrag(false)}
    >
      <div className="card-body">
        <div className="card-title flex justify-between">
          <div>Categories</div>
          <div className={!drag ? "cursor-grab" : "cursor-grabbing"}>:</div>
        </div>
        <ul className="categoryList">
          <li className="flex justify-between py-1">
            <div>
              <span className="me-3 inline-block size-2 bg-amber-600"></span>
              <span>category name</span>
            </div>
            <div>
              <span className="me-4">$999</span> <span>{">"}</span>
            </div>
          </li>
          <li className="flex justify-between py-1">
            <div>
              <span className="me-3 inline-block size-2 bg-orange-700"></span>
              <span>category name</span>
            </div>
            <div>
              <span className="me-4">$999</span> <span>{">"}</span>
            </div>
          </li>
          <li className="flex justify-between py-1">
            <div>
              <span className="me-3 inline-block size-2 bg-teal-600"></span>
              <span>category name</span>
            </div>
            <div>
              <span className="me-4">$999</span> <span>{">"}</span>
            </div>
          </li>
          <li className="flex justify-between py-1">
            <div>
              <span className="me-3 inline-block size-2 bg-yellow-600"></span>
              <span>category name</span>
            </div>
            <div>
              <span className="me-4">$999</span> <span>{">"}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
