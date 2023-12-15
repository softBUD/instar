import { addUser } from '@/service/user';
import NextAuth, { NextAuthOptions } from 'next-auth';

import GoogleProvider from 'next-auth/providers/google';

const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_ID || '',
      clientSecret: process.env.GOOGLE_OAUTH_SECRET || '',
    }),
  ],
  callbacks: {
    async signIn({ user: { id, name, image, email } }) {
      if (!email) {
        return false;
      }
      addUser({
        id: id,
        name: name || '',
        image,
        email,
        username: email?.split('@')[0] || '',
      });
      return true;
    },
    async session({ session }) {
      // Send properties to the client, like an access_token and user id from a provider.
      const user = session?.user;

      if (user) {
        session.user = {
          ...user,
          username: user.email?.split('@')[0] || '',
        };
      }
      return session;
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
};

const handler = NextAuth(authOptions);

export { authOptions, handler as GET, handler as POST };
