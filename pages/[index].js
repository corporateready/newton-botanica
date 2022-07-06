import React from "react";

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/items/");
  const data = await res.json();

  const paths = data.map((item) => {
    return {
      params: { id: item.id },
    };
  });
  return {
    paths,
  };
};

export default function details() {
  return <div>details</div>;
}
