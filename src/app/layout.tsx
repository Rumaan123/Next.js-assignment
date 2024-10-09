
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
            <header>
              <h1>WELCOME TO MY WEBSITE</h1>
            </header>
        {children}
      </body>
    </html>
  );
}
