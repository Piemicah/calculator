import { Redirect } from "expo-router";

export default function Index() {
  // Redirect root route `/` to `/main`
  return <Redirect href={"/main" as any} />;
}
