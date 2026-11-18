import type { ShopId } from "@/data/locations";

export type DayHours = { open: number; close: number; label: string };
export type HourRow = { days: string; time: string; match: number[] };

const weekday: Record<string, number> = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
};

export const fairhavenWeek: DayHours[] = [
  { open: 480, close: 840, label: "8 AM – 2 PM" },
  { open: 0, close: 0, label: "Closed" },
  { open: 0, close: 0, label: "Closed" },
  { open: 0, close: 0, label: "Closed" },
  { open: 480, close: 840, label: "8 AM – 2 PM" },
  { open: 360, close: 840, label: "6 AM – 2 PM" },
  { open: 360, close: 840, label: "6 AM – 2 PM" },
];

export const fairhavenRows: HourRow[] = [
  { days: "Monday – Wednesday", time: "Closed", match: [1, 2, 3] },
  { days: "Thursday", time: "8 AM – 2 PM", match: [4] },
  { days: "Friday – Saturday", time: "6 AM – 2 PM", match: [5, 6] },
  { days: "Sunday", time: "8 AM – 2 PM", match: [0] },
];

const plymouthOpens = { year: 2026, month: 11, day: 1 };

export const plymouthWeek: DayHours[] = [
  { open: 360, close: 720, label: "6 AM – 12 PM" },
  { open: 360, close: 720, label: "6 AM – 12 PM" },
  { open: 0, close: 0, label: "Closed" },
  { open: 360, close: 720, label: "6 AM – 12 PM" },
  { open: 360, close: 720, label: "6 AM – 12 PM" },
  { open: 360, close: 720, label: "6 AM – 12 PM" },
  { open: 360, close: 720, label: "6 AM – 12 PM" },
];

export const plymouthRows: HourRow[] = [
  { days: "Monday", time: "6 AM – 12 PM", match: [1] },
  { days: "Tuesday", time: "Closed", match: [2] },
  { days: "Wednesday – Sunday", time: "6 AM – 12 PM", match: [0, 3, 4, 5, 6] },
];

export type OpenStatus = { open: boolean; day: number; todayLabel: string; beforeOpen: boolean };

function parts(date: Date, options: Intl.DateTimeFormatOptions) {
  const list = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    ...options,
  }).formatToParts(date);
  const out: Record<string, string> = {};
  for (const part of list) {
    if (part.type !== "literal") out[part.type] = part.value;
  }
  return out;
}

function beforeOpen(date: Date) {
  const p = parts(date, { year: "numeric", month: "2-digit", day: "2-digit" });
  const stamp = Number(p.year) * 10000 + Number(p.month) * 100 + Number(p.day);
  return stamp < plymouthOpens.year * 10000 + plymouthOpens.month * 100 + plymouthOpens.day;
}

function statusFor(week: DayHours[], date: Date): OpenStatus {
  const p = parts(date, {
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  });
  const day = weekday[p.weekday ?? "Sun"] ?? 0;
  const minutes = Number(p.hour) * 60 + Number(p.minute);
  const today = week[day]!;
  return {
    open: minutes >= today.open && minutes < today.close && today.close > today.open,
    day,
    todayLabel: today.label,
    beforeOpen: false,
  };
}

export function shopStatus(shop: ShopId, date = new Date()): OpenStatus {
  if (shop === "plymouth") {
    const base = statusFor(plymouthWeek, date);
    const early = beforeOpen(date);
    return { ...base, open: !early && base.open, beforeOpen: early };
  }
  return statusFor(fairhavenWeek, date);
}

export function shopRows(shop: ShopId) {
  return shop === "plymouth" ? plymouthRows : fairhavenRows;
}
