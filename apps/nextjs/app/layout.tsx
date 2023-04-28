import Link from 'next/link';
import './globals.css';

export const metadata = {
  charset: 'UTF-8',
}

const RootLayout = ({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <html lang="en">
      <body className="h-screen flex flex-col">
        <nav className="flex items-center justify-between flex-wrap bg-white p-6 shadow">
          <div className="flex items-center justify-between container mx-auto">
            <Link href="/" className="flex items-center flex-shrink-0 mr-6">
              <img className="h-14 mr-3" src="https://cdn.cdnlogo.com/logos/n/80/next-js.svg" />
              <img className="h-14 mr-3" src="https://trpc.io/img/logo.svg" />

              <span className="text-xl font-bold">Next.js TRPC demo</span>
            </Link>
          </div>
        </nav>

        <div className="container mx-auto py-6">
          {children}
        </div>

        <footer className="text-center mt-auto py-4">
          Made with 🧠 by <a href="https://github.com/simoneldevig" className="font-medium text-blue-600 dark:text-blue-500 hover:underline" target='_blank'>Simon Eldevig</a>
        </footer>
      </body>
    </html>
  );
}
export default RootLayout;
