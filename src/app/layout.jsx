// COMPONENTS
import Footer from "@/components/Footer";

// STYLES
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen">
        {children}

        {/* Footer */}

        <Footer />
      </body>
    </html>
  );
}
