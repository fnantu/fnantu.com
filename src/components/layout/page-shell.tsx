import { SiteHeader } from "./site-header";
import { Footer } from "./footer";
import { ScrollTop } from "../scroll-top";
export function PageShell({ children }: { children: React.ReactNode }) { return <><SiteHeader/><main>{children}</main><Footer/><ScrollTop/></> }
