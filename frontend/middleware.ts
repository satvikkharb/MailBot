export { auth as default } from "@/lib/auth";

export const config = {
  matcher: ["/inbox/:path*", "/compose/:path*", "/settings/:path*"],
};
