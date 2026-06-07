import "./globals.css";

export const metadata = {
  title: "Nextjs App",
  description: "This is my first nextjs app",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <div className="flex gap-6">
         
        </div>

        {children}
      </body>
    </html>
  );
}