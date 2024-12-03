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
  100: string;
};

export const neutral: NeutralColor = {
  900: "#030712",
  850: "#111827",
  800: "#1F2937",
  750: "#374151",
  700: "#4B5563",
  650: "#6B7280",
  600: "#808080",
  550: "#B3B3B3",
  500: "#B6BCC6",
  450: "#DDE0D1",
  400: "#D1D5DB",
  350: "#E8EAE1",
  300: "#E5E7EB",
  250: "#F5F5F0",
  200: "#F9FAFB",
  100: "#FBFBF9",
} as const;
