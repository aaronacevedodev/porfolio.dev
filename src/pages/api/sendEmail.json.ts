import type { APIRoute } from "astro"
import { Resend } from "resend"

const resend = new Resend(import.meta.env.RESEND_APY_KEY)

// export const GET: APIRoute = async ({params, request}) => {

//     const send = await resend. emails. send({
//         from: "aaronacevedo94@gmail.com",
//         to: "aaronacevedo94@gmail.com",
//         subject: "Sample Subject",
//         html: "<p>Hi</p>",
//         text: "Hi"
//     });

//     if (send.data) {
//         return new Response(
//             JSON. stringify({
//                 message: send. data,
//             }),
//             {
//                 status: 200,
//                 statusText: "ОК",
//             }
//         );
//     } else {
//         return new Response(
//             JSON. stringify({
//                 message: send. error,
//             }),
//             {
//                 status: 500,
//                 statusText: "Internal Server Error",
//             }
//         );
//     }


//     return new Response(
//       JSON.stringify({
//          url: 'https://astro.build/'
//       })
//     )
//   }