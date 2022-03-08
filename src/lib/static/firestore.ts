import { db } from '$lib/static/firebase';
import { collection, getDocs, getDoc, doc } from 'firebase/firestore';

export interface CommonOptions {
  gdprVersion: number
}

export interface ContactOptions {
  availableDate: string
}

export interface ServicesOptions {
  designPriceHour: string,
  designPricePerFeature: string,
  designPriceWithUI: string,
  devPrice: string,
  devPriceHigh: string
}

export interface Options {
  common: CommonOptions,
  contact: ContactOptions,
  services: ServicesOptions
}

export const defaultOptions: Options = {
  common: {
    gdprVersion: 0
  },
  services: {
    designPriceHour: '-',
    designPricePerFeature: '-',
    designPriceWithUI: '-',
    devPrice: '-',
    devPriceHigh: '-'
  },
  contact: {
    availableDate: '-'
  }
}

export const getLikes = async () => {
  const docRef = doc(db, 'posts', 'likes');
  const likesDoc = await getDoc(docRef);
  if (likesDoc.exists()) {
    return likesDoc.data();
  } else {
    return {}
  }
}

export const getOptions = async (): Promise<Options> => {
  const data = await getDocs(collection(db, 'options'))

  // Get prices
  const servicesData = data.docs.find((doc) => doc.id === 'services')?.data();
  const services: ServicesOptions = {
    designPriceHour: servicesData['designPriceHour'],
    designPricePerFeature: servicesData['designPricePerFeature'],
    designPriceWithUI: servicesData['designPriceWithUI'],
    devPrice: servicesData['devPrice'],
    devPriceHigh: servicesData['devPriceHigh']
  }

  // Get contact data
  const contactData = data.docs.find((doc) => doc.id === 'contact')?.data();
  const contact: ContactOptions = {
    availableDate: contactData['availableDate']
  }

  // GDPR document version number
  const commonData = data.docs.find((doc) => doc.id === 'common')?.data();
  const common: CommonOptions = {
    gdprVersion: commonData['gdprVersion']
  }

  return {
    common,
    contact,
    services
  };
}
