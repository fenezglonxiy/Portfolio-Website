export const black = "#000000";

export const white = "#FFFFFF";

export type NeutralColor = {
  900: string;
  850: string;
  800: string;
  750: string;
  700: string;
  650: string;
  600: string;
  550: string;
  500: string;
  450: string;
  400: string;
  350: string;
  300: string;
  250: string;
  200: string;
  150: string;
  100: string;
};

export const neutral: NeutralColor = {
  900: "#030712",
  850: "#111827",
  800: "#111111",
  750: "#1F2937",
  700: "#374151",
  650: "#4B5563",
  600: "#6B7280",
  550: "#808080",
  500: "#B3B3B3",
  450: "#B6BCC6",
  400: "#DDE0D1",
  350: "#D1D5DB",
  300: "#E8EAE1",
  250: "#E5E7EB",
  200: "#F5F5F0",
  150: "#F9FAFB",
  100: "#FBFBF9",
} as const;
