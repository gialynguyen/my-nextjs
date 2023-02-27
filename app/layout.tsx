import './globals.css';
import { Navigation } from '~/components/navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head />
      <body>
        <div className='px-4 py-2'>
          <span className='italic'>Logo</span>
        </div>
        <div className='py-2 text-sm'>
          <Navigation
            segmentsTab={[
              {
                title: 'Home',
                segment: '',
              },
              {
                title: 'Snippets',
                segment: 'snippets',
              },
            ]}
          />
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}
