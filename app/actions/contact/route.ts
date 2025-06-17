// import nodemailer from 'nodemailer'
// import { NextResponse } from 'next/server'

// export async function POST(req: Request) {
//   const body = await req.json()

//     console.log("Request body:", body)


//   const transporter = nodemailer.createTransport({
//     host: "smtp.hostinger.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: "mozeff@mmcloseprotection.com",
//       pass: "MM0937468!g",
//     },
//   })


//   try {
//     await transporter.sendMail({
//       from: `${body.fullName} <${body.email}>`,
//       to: "rabshasiddiqui@gmail.com",
//       subject: `Service Inquiry: ${body.serviceType}`,
//       html: `
//         <h3>New Inquiry</h3>
//         <p><b>Name:</b> ${body.fullName}</p>
//         <p><b>Email:</b> ${body.email}</p>
//         <p><b>Phone:</b> ${body.phone}</p>
//         <p><b>Company:</b> ${body.company || "N/A"}</p>
//         <p><b>Location:</b> ${body.location}</p>
//         <p><b>Urgency:</b> ${body.urgency}</p>
//         <p><b>Message:</b><br/>${body.message}</p>
//       `,
//     })
    

//     return NextResponse.json({ success: true })
//   } catch (error) {
//     console.error("Email send error:", error)
//     return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 })
//   }
// }