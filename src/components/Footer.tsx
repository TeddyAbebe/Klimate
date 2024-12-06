import { Globe } from "lucide-react";
import type { FC } from "react";
import { Link } from "react-router-dom";

const Footer: FC = () => {
  return (
    <footer className="border-t backdrop-blur py-12 supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 text-center text-gray-400">
        <div className="mb-4">
          <div className="flex justify-center space-x-8">
            {/* GitHub */}
            <Link
              to="https://github.com/TeddyAbebe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.467-1.332-5.467-5.93 0-1.31.469-2.382 1.236-3.222-.124-.303-.536-1.524.116-3.176 0 0 1.008-.322 3.3 1.23a11.478 11.478 0 013-.405c1.02.005 2.042.138 3 .405 2.292-1.553 3.3-1.23 3.3-1.23.652 1.653.24 2.874.117 3.176.768.84 1.236 1.912 1.236 3.222 0 4.61-2.807 5.625-5.479 5.92.429.368.823 1.096.823 2.21v3.281c0 .321.218.694.825.576 4.765-1.585 8.199-6.083 8.199-11.385 0-6.627-5.373-12-12-12z" />
              </svg>
            </Link>

            {/* LinkedIn */}
            <Link
              to="https://www.linkedin.com/in/teddyabebe/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.74V1.72C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9.04h3.56v11.41zM5.34 7.59a2.05 2.05 0 110-4.1 2.05 2.05 0 010 4.1zm15.11 12.86h-3.57v-5.57c0-1.33-.03-3.05-1.86-3.05-1.87 0-2.16 1.46-2.16 2.96v5.66h-3.56V9.04h3.42v1.56h.05c.48-.91 1.64-1.87 3.37-1.87 3.61 0 4.28 2.38 4.28 5.47v6.25z" />
              </svg>
            </Link>

            {/* Portfolio */}
            <Link
              to="https://tewodros.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Globe />
            </Link>
          </div>
        </div>

        <p className="tracking-widest">Made in Ethiopia</p>
      </div>
    </footer>
  );
};

export default Footer;
