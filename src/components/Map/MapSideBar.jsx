import React from "react";
import MapListItem from "./MapListItem";
import ToggleButton from "./ToggleButton";

function MapSidebar() {
  const test = [{}];
  return (
    <aside
      id="list"
      className="flex flex-col justify-center items-center h-full bg-gray-300 border border-slate-300 rounded-lg basis-1/4"
    >
      <div className="flex justify-center items-center mb-8">
        <ToggleButton text="숙소 보기" />
        <ToggleButton text="식당 보기" />
      </div>
      <ol className="space-y-8">
        <MapListItem item="Test" />
        <MapListItem item="Test" />
        <MapListItem item="Test" />
        <MapListItem item="Test" />
        <MapListItem item="Test" />
      </ol>
    </aside>
  );
}

export default MapSidebar;
