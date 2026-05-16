export const ExportType: Record<string, number> = {
  Simple: 0,
  User: 1,
};

export const ExportTypeName: Record<number, string> = Object.fromEntries(
  Object.entries(ExportType).map(([key, value]) => [value, key]),
);
