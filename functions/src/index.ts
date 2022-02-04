// Firebase Config
import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

// Sendgrid Config
import * as sgMail from "@sendgrid/mail";
import { MailDataRequired } from "@sendgrid/mail";

const REGION = "europe-central2"

admin.initializeApp();

sgMail.setApiKey(functions.config().sendgrid.key || '');

// Send email from contact form
export const sendContactEmailFirestore = functions.region(REGION).firestore
  .document('contacts/{contactId}')
  .onCreate(snap => {
    const msg: MailDataRequired = {
      to: "arttu.isopahkala@hotmail.com",
      from: "contact@ardemedia.fi",
      templateId: "d-38e22653363d4b198389f865d0162fc9",
      dynamicTemplateData: {
        name: snap.get("name"),
        email: snap.get("email"),
        message: snap.get("message")
      }
    }

    return sgMail.send(msg);
  });

// FOR FUTURE (cannot use from localhost) 
// Send email from contact form
/* export const sendContactEmail = functions.region(REGION).https.onCall(async data => {
  const msg: MailDataRequired = {
    to: "arttu.isopahkala@hotmail.com",
    from: "contact@ardemedia.fi",
    templateId: "d-38e22653363d4b198389f865d0162fc9",
    dynamicTemplateData: {
      email: data.get("email"),
      phone: data.get("phone"),
      message: data.get("message")
    }
  }

  await sgMail.send(msg);

  return { success: true }
}) */

// Send email from blog post
/* exports.sendContactEmail = functions.region('europe-central2').firestore.document("contacts").onCreate((snap, context) => {
  const value = snap.data()
  const msg: MailDataRequired = {
    to: "arttu.isopahkala@hotmail.com",
    from: "contact@ardemedia.fi",
    templateId: TEMPLATE_ID,
    dynamicTemplateData: {
      email: value.email,
      phone: value.phone,
      message: value.message
    }
  }

  return sgMail.send(msg);
}) */