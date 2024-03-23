import "./globals.css";
import { UserProvider } from "../components/providers/userProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative font-poppins h-dvh">
        <UserProvider>
          {children}
        </UserProvider>
      </body>
    </html>
  )
}
