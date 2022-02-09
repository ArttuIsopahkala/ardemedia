// Firebase Config
import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

// Sendgrid Config
import * as sgMail from "@sendgrid/mail";
import { MailDataRequired } from "@sendgrid/mail";
import { HttpsError } from "firebase-functions/v1/https";

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
        message: snap.get("message"),
        time: new Date().toISOString()
      }
    }

    return sgMail.send(msg);
  });

// Send email from contact form
export const sendContactEmail = functions.region(REGION).https.onCall(async data => {
  const msg: MailDataRequired = {
    to: "arttu.isopahkala@hotmail.com",
    from: "contact@ardemedia.fi",
    templateId: "d-38e22653363d4b198389f865d0162fc9",
    dynamicTemplateData: {
      name: data.name,
      email: data.email,
      message: data.message,
      time: new Date().toISOString()
    }
  }

  const response = await sgMail.send(msg)
  if(response[0].statusCode >= 400) {
    throw new HttpsError("aborted", 'Error with sendgrid service')
  }
  return { success: true }
})

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