// import NextAuth from "next-auth"
// import CredentialsProvider from "next-auth/providers/credentials"
// import { getUser } from "@/controllers/users"

// export const authOptions = {
//     providers: [
//         CredentialsProvider({
//             name: "Credentials",
//             credentials: {
//                 email: { label: "Email", type: "email" },
//                 password: { label: "Password", type: "password" },
//             },
//             async authorize(credentials) {
//                 console.log('12=>',credentials)
//                 const user = await getUser(credentials)
//                 console.log('16=>',user)
//                 if (!user) {
//                     return null
//                 }
//                 return {
//                     id: user.id || user._id,  // Ensure one of these exists
//                     email: user.email,
//                     ...user
//                 }
//             }
//         })
//     ],
//     secret: process.env.NEXTAUTH_SECRET,
//     session: {
//         strategy: "jwt"
//     },
//     jwt: {
//         secret: process.env.JWT_SECRET,
//         algorithm: "HS256",
//         maxAge: 60 * 60 * 24,
//         updateAge: 60 * 60,
//     },
//     callbacks: {
//         async session({ session, token }) {  // Changed from user to token
//             console.log("Session callback:", { session, token })
//             session.user = token.user  // Use token instead of user
//             return session
//         },
//         async jwt({ token, user }) {
//             console.log("JWT callback:", { token, user })
//             if (user) {
//                 token.user = user
//             }
//             return token
//         },
//     },
//     pages: {
//         signIn: "/login",
//         // newUser: "/api/auth/register",
//     },
//     debug: true
// }

// export const handler = NextAuth(authOptions)

// export { handler as GET, handler as POST, handler as PUT, handler as DELETE }


