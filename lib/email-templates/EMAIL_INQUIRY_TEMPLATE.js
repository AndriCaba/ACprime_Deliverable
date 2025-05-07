const EMAIL_INQUIRY_TEMPLATE = `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <!--[if gte mso 9]><xml>
            <o:OfficeDocumentSettings>
                <o:AllowPNG />
                <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml><![endif]-->
    <title>EMAIL INQUIRY</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no">
    <meta name="x-apple-disable-message-reformatting">
    <meta name="color-scheme" content="light dark">
    <meta name="supported-color-schemes" content="light dark">

    <style type="text/css">
        /* color-scheme and supported-color-schemes enables dark mode control via the dark mode media query */
        :root {
            color-scheme: light dark;
            supported-color-schemes: light dark;
        }

        /* By default we turn off hover effects on links, your design may have it differently */
        a:hover {
            text-decoration: none !important;
        }

        a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: none !important;
        }

        a[href^="tel"]:hover {
            text-decoration: none !important;
        }

        a img {
            border: none;
        }

        p {
            margin: 0;
            padding: 0;
            margin-bottom: 0;
        }


        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            margin: 0;
            padding: 0;
            margin-bottom: 0;
        }

        table td {
            mso-line-height-rule: exactly;
        }

        table {
            border-collapse: collapse;
        }

        #emailBody #emailWrapper [x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: inherit !important;
        }

        @font-face {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }

        @media only screen and (max-width:640px) {
            .wrapper {
                width: 100% !important;
                padding: 0 !important;
            }

            /* We use this if we need to hide elements on mobile */
            .hm {
                display: none !important;
                width: 0 !important;
                height: 0 !important;
                padding: 0 !important;
                font-size: 0 !important;
                line-height: 0 !important;
            }
        }
    </style>
</head>

<body id="emailBody" class="body" xml:lang="en"
    style="background:#fff; margin:0; padding:0; -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%;">
    <div role="article" aria-roledescription="email" aria-label="email name" lang="en" dir="ltr"
        style="font-size:medium; font-size:max(16px, 1rem)">
        <!-- Hidden Preheader Text.
        
        This is our preview text that displays in email clients, but we hide it so it doesn't effect our design. -->
        <div
            style="display:none;font-size:1px;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;mso-hide:all;font-family:sans-serif;">
        </div>

        <table border="0" cellpadding="0" cellspacing="0" width="100%" bgcolor="#fff" class="wrapper"
            role="presentation">
            <tr>
                <td align="center" valign="top" width="100%">
                    <table width="100%" style="max-width: 800px;" cellpadding="0" cellspacing="0" bgcolor="#e4eef8"
                        border="0" class="wrapper" role="presentation">
                        <tr>
                            <td width="100%" align="center" valign="top"
                                style="color:#333333; font-family: 'Inter', Arial, sans-serif;">
                                <img src="http://cdn.mcauto-images-production.sendgrid.net/00e75470fe6a4f8a/1df6e03f-5416-4e64-b039-4f5b53e6613e/600x200.png"
                                    border="0" style="border:0; display:block; max-width: 100%;" alt="Affinity Capital">

                            </td>
                        </tr>
                    </table>
                    <table width="100%" style="max-width: 800px;" cellpadding="0" cellspacing="0" bgcolor="#e4eef8"
                        border="0" class="wrapper" role="presentation">
                        <tr>
                            <td width="100%" align="center" valign="top"
                                style="color:#333333; font-family: 'Inter', Arial, sans-serif; font-size: 12px;">
                                <table width="100%" cellpadding="0" cellspacing="0" bgcolor="#e4eef8" border="0"
                                    class="wrapper" role="presentation">
                                    <tr>
                                        <td width="100%" align="center" valign="top"
                                            style="color:#333333; font-family: 'Inter', Arial, sans-serif; font-size: 16px; font-weight: 700; padding: 16px;">
                                            <p>
                                                Email Inquiry
                                            </p>
                                        </td>
                                    </tr>
                                </table>
                                <table width="100%" cellpadding="0" cellspacing="0" bgcolor="#e4eef8" border="0"
                                    class="wrapper" role="presentation">
                                    <tr>
                                        <td width="100%" align="center" valign="top"
                                            style="color:#333333; font-family: 'Inter', Arial, sans-serif; font-size: 12px; padding: 16px;">
                                            {{content}}
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>

                    <table width="100%" style="max-width: 800px;" cellpadding="0" cellspacing="0" bgcolor="#03254c"
                        border="0" class="wrapper" role="presentation">
                        <tr>
                            <td width="100%" align="center" valign="top"
                                style="color:#fff; font-family: 'Inter', Arial, sans-serif; font-size: 12px;">
                                <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation">
                                    <tr>
                                        <td align="left" valign="top">
                                            <p style="padding: 16px;">
                                                For any concerns, you may contact us from 8:00AM – 5:00PM (Philippine
                                                Standard
                                                Time), Mondays to Fridays excluding
                                                Holidays, through any of the following
                                            </p>
                                        </td>
                                    </tr>
                                </table>
                                <table width="100%" style="max-width: 400px;" cellpadding="0" cellspacing="0" border="0"
                                    role="presentation">
                                    <tr>
                                        <td align="left" valign="top" style="padding-left: 16px; padding-bottom: 16px;">
                                            <p style="padding-bottom: 8px;">Call/Viber/Whatsapp</p>
                                            <p>Email</p>
                                        </td>
                                        <td align=" left" valign="top"
                                            style="padding-right: 16px; padding-bottom: 16px;">
                                            <p style="padding-bottom: 8px;">
                                                : +63 917 710 7391
                                            </p>
                                            <p>
                                                : support@affinitycorp.net </p>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                    <table width="100%" style="max-width: 800px;" cellpadding="0" cellspacing="0" bgcolor="#fff"
                        border="0" class="wrapper" role="presentation">
                        <tbody>
                            <tr>
                                <td width="100%" align="center" valign="top"
                                    style="color:#333333; font-family: 'Inter', Arial, sans-serif; padding: 16px; padding-bottom: 0;">
                                    <img src="https://nvestmo-media.s3.ap-northeast-2.amazonaws.com/alfm-fami-logo.png"
                                        border="0" style="border:0; display:block; width: 75%; max-width: 400px;"
                                        alt="Affinity Capital">

                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table width="100%" style="max-width: 800px;" cellpadding="0" cellspacing="0" bgcolor="#fff"
                        border="0" class="wrapper" role="presentation">
                        <tr>
                            <td width="100%" align="left" valign="top"
                                style="color:#333333; font-family: 'Inter', Arial, sans-serif; font-size: 10px;">
                                <p style="padding: 16px; line-height: 2;">
                                    This
                                    email message, including attachments, if any, contains confidential
                                    information and may be privileged or otherwise protected from disclosure,
                                    and is intended solely for the use of the individual to whom it is
                                    addressed. If you are not the intended recipient of this email message or
                                    you have received this email in error, please notify the original sender and
                                    immediately delete this e-mail and any copies thereof. Be informed that any
                                    use, downloading, copying, review, retransmission, dissemination,
                                    distribution, reproduction, or any action taken in reliance upon this email
                                    message, without the consent of the original sender, is prohibited by
                                    law.
                                </p>
                            </td>
                        </tr>
                    </table>
                    <!--[if true]>
  </tr>
</table>
<![endif]-->
                </td>
            </tr>
        </table>
    </div>
</body>

</html>`;

const clientContent = (firstName, lastName) => ` 
      <p style="font-weight:400; font-size: 14px; padding-bottom: 24px; text-align: left; padding-left: 16px;">
          Thank you <span style="font-weight: 600">${firstName} ${lastName}</span> for reaching out to us. We
          will get back to you within the next 24 business hours.
      </p>
      <p style="font-weight:400; font-size: 14px; padding-bottom: 16px; text-align: left; padding-left: 16px;">
          From your Insurance Team
      </p>
    `;
const csrContent = (firstName, lastName, email, contactNo, message) => `
      <p style="font-weight:400; font-size: 14px; padding-bottom: 16px; margin-left: 16px; text-align:left;">
          Received an email inquiry, with some details below:
      </p>
      <table width="100%" style="font-weight:400; font-size: 14px; padding-left: 32px;">
          <tr>
              <td width="50%" style="font-weight: 600; padding-left: 32px">Name:</td>
              <td width="50%">${firstName} ${lastName}</td>
          </tr>
          <tr>
              <td width="50%" style="font-weight: 600; padding-left: 32px"> Email:</td>
              <td width="50%">${email}</td>
          </tr>
          <tr>
              <td width="50%" style="font-weight: 600; padding-left: 32px"> Phone:</td>
              <td width="50%">${contactNo}</td>
          </tr>
          <tr>
              <td width="50%" style="font-weight: 600; padding-left: 32px"> Message:</td>
              <td width="50%">${message}</td>
          </tr>
      </table>
    `;

export { EMAIL_INQUIRY_TEMPLATE, clientContent, csrContent };
