import { SiteHeader } from "@/components/site-header";
import { Footer } from "@/components/footer";
import { ScrollTop } from "@/components/scroll-top";
export function PageShell({ children }: { children: React.ReactNode }) { return <><SiteHeader/><main>{children}</main><Footer/><ScrollTop/></> }
