export const rockHornsPixelMap = [
  "0000000000##0",
  "0##0000000##0",
  "0##0000000##0",
  "0##0000000##0",
  "0##0000000##0",
  "0##0##0##0##0",
  "0##0##0##0##0",
  "0#00##0##00#0",
  "0##0#00000##0",
  "0###00####0#0",
  "0#####0####00",
  "0#######00##0",
  "0########0##0",
  "00#####0###00",
  "000#######000"
] as const;

export const rockHornsPixels = rockHornsPixelMap.reduce<ReadonlyArray<readonly [number, number]>>((result, row, y) => {
  const filledCells = Array.from(row).reduce<ReadonlyArray<readonly [number, number]>>((cells, cell, x) => {
    return cell === "#" ? [...cells, [x, y]] : cells;
  }, []);

  return [...result, ...filledCells];
}, []);
