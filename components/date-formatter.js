import { parseISO, format } from "date-fns";
import { pl } from "date-fns/locale";

export default function DateFormatter({ dateString }) {
  const formatted = format(parseISO(dateString), "dd MMMM yyyy", {
    locale: pl,
  });
  return <time dateTime={dateString}>{formatted}</time>;
}
