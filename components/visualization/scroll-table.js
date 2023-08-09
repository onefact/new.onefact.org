import * as vg from "@uwdata/vgplot";

await vg.coordinator().exec(
  vg.loadParquet("flights", "https://uwdata.github.io/mosaic/data/flights-200k.parquet")
);

export default vg.table({ from: "flights", height: 300 });