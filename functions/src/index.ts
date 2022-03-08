// Firebase Config
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

// Sendgrid Config
import * as sgMail from '@sendgrid/mail';
import { MailDataRequired } from '@sendgrid/mail';
import { HttpsError } from 'firebase-functions/v1/https';

const REGION = 'europe-central2';

admin.initializeApp();

sgMail.setApiKey(functions.config().sendgrid.key || '');

let ssrServerServer: any;
export const ssrServer = functions
  .region('us-central1')
  .https.onRequest(async (request, response) => {
    if (!ssrServerServer) {
      functions.logger.info('Initialising SvelteKit SSR entry');
      ssrServerServer = require('./ssrServer/index').default;
      functions.logger.info('SvelteKit SSR entry initialised!');
    }
    functions.logger.info('Requested resource: ' + request.originalUrl);
    return ssrServerServer(request, response);
  });

// Send email from contact form
export const sendContactEmail = functions.region(REGION).https.onCall(async (data) => {
  const msg: MailDataRequired = {
    to: 'arttu.isopahkala@hotmail.com',
    from: 'contact@ardemedia.fi',
    templateId: 'd-38e22653363d4b198389f865d0162fc9',
    dynamicTemplateData: {
      name: data.name,
      email: data.email,
      message: data.message,
      time: new Date().toISOString()
    }
  };

  const response = await sgMail.send(msg);
  if (response[0].statusCode >= 400) {
    throw new HttpsError('aborted', 'Error with sendgrid service');
  }
  return { success: true };
});

export const addLike = functions.region(REGION).https.onCall(async (slug) => {

  const likesRef = admin.firestore().collection('posts').doc('likes');

  likesRef.get().then((doc) => {
    let newLikes = 1;
    if(doc.exists) {
      // Update
      const currentLikes = doc.get(slug);
      if(currentLikes) {
        newLikes = currentLikes + 1;
      }
      likesRef.update({[slug]: newLikes}).then(() => {
        return { success: true };
      })
      .catch(err => {
        functions.logger.error(err, 'Error in updating like to database!');
        throw new HttpsError('aborted', 'Error in updating like!');
      })
    } else {
      // Create
      likesRef.create({[slug]: newLikes}).then(() => {
        return { success: true };
      })
      .catch(err => {
        functions.logger.error(err, 'Error in creating like to database!');
        throw new HttpsError('aborted', 'Error in creating like!');
      })
    }
  })
  .catch(err => {
    functions.logger.error(err, 'Error in getting likes reference!');
    throw new HttpsError('aborted', 'Error in setting like!');
  });
});