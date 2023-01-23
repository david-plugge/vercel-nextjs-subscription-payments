import '../styles/main.css';

import SupabaseListener from '../components/SupabaseListener';
import SupabaseProvider from '../components/SupabaseProvider';

import { createServerClient } from '../utils/supabase-server';
import { MyUserContextProvider } from '../utils/useUser';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerClient();

  const {
    data: { session }
  } = await supabase.auth.getSession();

  return (
    <html>
      <head />
      <body>
        <SupabaseProvider session={session}>
          <SupabaseListener
            serverAccessToken={session?.access_token}
          ></SupabaseListener>

          <MyUserContextProvider>
            <Navbar />
            <main id="skip">{children}</main>
            <Footer />
          </MyUserContextProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
