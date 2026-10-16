import { redirect } from "next/navigation";

// Contact details and the enquiry form live together on /book.
export default function ContactPage() {
  redirect("/book");
}
