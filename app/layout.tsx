import './globals.css';
import { Metadata } from 'next';
import { primary, secondary } from '@/fonts';
import { AOSInit } from '@/src/utils/aos';
import { ScrollToTopButton } from '@/src/components/scroll-to-top';
import { cn } from '@/src/utils/shadcn';
import { Toaster } from 'sonner';
import { ModeToggle } from '@/src/components/mode-toggle';

interface Props {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'SDIH | Sistemas Detección de Incendios',
  description: 'SDIH | Sistemas Detección de Incendios',
};

export default async function RootLayout({ children }: Props) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        'dark',
        primary.variable,
        secondary.variable,
        'text-base leading-[1.875] text-accent-800 [&.dark]:text-body'
      )}
    >
      <AOSInit />
      <body>
          <div
            className={cn(
              'bg-white text-accent-800 dark:bg-accent-900 dark:text-body'
            )}
          >
            <main>{children}</main>
          </div>
        <Toaster
          richColors
          position="top-right"
          closeButton
          visibleToasts={9}
        />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
