import * as vg from "@uwdata/vgplot";

await vg.coordinator().exec(
  vg.loadParquet("aapl", "https://uwdata.github.io/mosaic/data/stocks.parquet", { where: "Symbol = 'AAPL'" })
);

export default vg.plot(
  vg.line(
    vg.from("aapl"),
    { x: "Date", y: "Close" }
  ),
  vg.width(680),
  vg.height(200)
);