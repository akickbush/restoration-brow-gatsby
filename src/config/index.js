import React from 'react'

import {
  Heart,
  KissesWink,
  CalenderEdit,
  Question,
  Mobile,
  Instagram,
} from '../components/fa'

export const CLIENT_ID = `7c3266e648344016b037b3039b5aad94`
export const USER_ID = `3166039009`
export const CLIENT_SECRET = `ba06853244fb4fed918907e8c23c72e7`
export const ACCESS_TOKEN = `3166039009.7c3266e.f63e9f30813f4bb08d4bd72aab842774`

export const GOOGLE_API_KEY = `AIzaSyCCxzOgXgnjbRbFsdnqHlZCsuamiw5pwhg`
export const GOOGLE_LAT = 38.458641
export const GOOGLE_LNG = -122.72534

export const SIDE_NAV = [
  {
    text: 'About',
    link: '/about',
    icon: <Heart className="menu-icon" />,
  },
  {
    text: 'Gallery',
    link: '/gallery',
    icon: <KissesWink className="menu-icon" />,
  },
  {
    text: 'Services',
    link: '/services',
    icon: <CalenderEdit className="menu-icon" />,
  },
  {
    text: 'FAQs',
    link: '/faqs',
    icon: <Question className="menu-icon" />,
  },
  {
    text: 'Contact',
    link: '/contact',
    icon: <Mobile className="menu-icon" />,
  },
  {
    text: 'Instagram',
    a: 'https://www.instagram.com/restoration_brow',
    icon: <Instagram className="menu-icon" />,
  },
]

export const TOP_NAV = [
  {
    text: 'About',
    link: '/about',
    icon: <Heart className="menu-icon" />,
  },
  {
    text: 'Gallery',
    link: '/gallery',
    icon: <KissesWink className="menu-icon" />,
  },
  {
    text: 'Services',
    link: '/services',
    icon: <CalenderEdit className="menu-icon" />,
  },
  {
    text: 'FAQs',
    link: '/faqs',
    icon: <Question className="menu-icon" />,
  },
  {
    text: 'Contact',
    link: '/contact',
    icon: <Mobile className="menu-icon" />,
  },
  {
    text: <Instagram className="menu-icon white-icon" />,
    a: 'https://www.instagram.com/restoration_brow',
  },
]

export const FOOTER_NAV = [
  {
    text: 'About',
    link: '/about',
    icon: <Heart className="menu-icon" />,
  },
  {
    text: 'Gallery',
    link: '/gallery',
    icon: <KissesWink className="menu-icon" />,
  },
  {
    text: 'Services',
    link: '/services',
    icon: <CalenderEdit className="menu-icon" />,
  },
  {
    text: 'FAQs',
    link: '/faqs',
    icon: <Question className="menu-icon" />,
  },
  {
    text: 'Contact',
    link: '/contact',
    icon: <Mobile className="menu-icon" />,
  },
  {
    text: <Instagram className="menu-icon white-icon" />,
    a: 'https://www.instagram.com/restoration_brow',
  },
]

export const INTRO = [
  `My name is Alexis King. I am the owner of Restoration Brow located in Santa Rosa, California. I offer Permanent Eyebrows using Microblading and Powder Shading techniques designed and customized to fit each clients individuality! I love creating extraordinary brows for any skin type and skin color, this includes Brow Mapping with customized adjustments and customizing pigments also.`,
  `The artist in me loves the ability to create exactly what fits my clients desires and lifestyle!`,
  `I value my dedication, keen eye for detail and attachment when it comes to my work. It is very important to me that each client feels comfort with me and exuberance with their new brows.`,
  `My priority here is your brows because of course Happy brows are the best brows! `,
]

export const SERVICES = {
  MICROBLADING: {
    name: `Microblading Initial Session`,
    detail: `Mimicking real hairs, Microblading is a very pretty and natural looking Permanent makeup procedure. This is best for young, or normal/dry skin type and not best for oily, or thin/aging skin types. This is a two step process. Touch up is required and included in the initial price. Please book your touch up at the same time as booking your initial session. Anywhere between 4-10 weeks. Aftercare included at both sessions.`,
    time: `2 hours 30 minutes`,
    price: `$500.00`,
    link: `https://square.site/appointments/book/mfy94jph0n6o7o/B4D378VE2N7Z3/start?service_id=HJCANC5LBNRT34TO5VBLJOGI`,
  },
  OMBRE: {
    name: `Ombré Powder Initial Session`,
    detail: `For more fullness and filled in brows, an ombré powder brow is great for all skin types, including oily and aging/thin skin. This can be very soft and natural or bold and defined - whichever suits you! This is a two step process. A touch up is required and included in the price. Please book your touch up at the same time as booking your initial session. Anywhere between 4-10 weeks. Aftercare is included at both sessions`,
    time: `2 hours 30 minutes`,
    price: `$475.00`,
    link: `https://square.site/appointments/book/mfy94jph0n6o7o/B4D378VE2N7Z3/start?service_id=VBVZORAZPCLP4CM67OM627PH`,
  },
  COMBINATION: {
    name: `Combination Brow Initial Session`,
    detail: `Combining Microblading and Shading. A combination brow gives a nice filled in look with some fluff and or “natural-hairs” by adding Microblading. This can be done several different ways depending on skin type and preference. This is a two step process. A touch up is required and included in the price. Please book your touch up at the same time as booking your initial session. Anywhere between 4-10 weeks. Aftercare is included at both sessions.`,
    time: `3 hours`,
    price: `$600.00`,
    link: `https://square.site/appointments/book/mfy94jph0n6o7o/B4D378VE2N7Z3/start?service_id=5WL2JL3VNNH6HZVZ5IYLPIYG`,
  },
  ANNUAL: {
    name: `Annual Touch Ups`,
    detail: `Clients of mine only. Aftercare included.`,
    time: `2 hours`,
    price: `$175.00`,
    link: `https://square.site/appointments/book/mfy94jph0n6o7o/B4D378VE2N7Z3/start?service_id=EZSCBXEMIMYGVPAPX6SDVCJX`,
  },
  PERFECTING: {
    name: `Perfecting Appointments`,
    detail: `For clients that need an additional visit after their original touch up visit. Aftercare included.`,
    time: `1 hours`,
    price: `$75.00`,
    link: `https://square.site/appointments/book/mfy94jph0n6o7o/B4D378VE2N7Z3/start?service_id=O7HJAFARZG2IQRNPYHXY5NZM`,
  },
  TOUCHUP: {
    name: `Touch Up (Over Previous Cosmetic Tattoo by Another Artist)`,
    detail: `I mostly take all clients who come with previous permanent makeup. I need to see your brows prior to agreeing to the service and determine what service is suitable for you, if any. Please send me pictures (clear and in good lighting) to 707-494-6020. All new clients are booked at a new client price including the touch up as well. I currently do not charge extra for having previous work.`,
    time: `3 hours`,
    price: `Price Varies`,
    link: `https://square.site/appointments/book/mfy94jph0n6o7o/B4D378VE2N7Z3/start?service_id=R5C7IDWWGXUZ4EOSQLHSXHMG`,
  },
  BROWWAXSHAPE: {
    name: `Brow Wax & Shape`,
    detail: `Brow waxing provides shape to open the eye and define the brow area.`,
    time: `30 minutes`,
    price: `$20.00`,
    link: `https://square.site/appointments/book/mfy94jph0n6o7o/B4D378VE2N7Z3/start?service_id=T7MUMG5AOCTU5S6AX2WO47TL`,
  },
  BROWWAXTINT: {
    name: `Brow Wax & Tint`,
    detail: `Some clients who are not ready for permanent makeup might consider a wax for shape and a tint for color.`,
    time: `30 minutes`,
    price: `$35.00`,
    link: `https://square.site/appointments/book/mfy94jph0n6o7o/B4D378VE2N7Z3/start?service_id=27TXS3HK72G2ZXHMEOX5C5UX`,
  },
  BROWTOUCHUP: {
    name: `Required Brow Touch Up`,
    detail: `For clients who have had their initial session with me. Please book anywhere between 4-10 weeks from your Initial Session. This booking is reserved for included second session perfecting appointments only. Must be booked no longer than 10 weeks from the Initial Session date to avoid additional charges. Required 48 hours notice for cancellations or rescheduling to avoid a $50 charge. Aftercare included.`,
    time: `2 hours`,
    price: `FREE`,
    link: `https://square.site/appointments/book/mfy94jph0n6o7o/B4D378VE2N7Z3/start?service_id=7JD32P34GYQ3GZZREWY5VL3D`,
  },
  FRECKLES: {
    name: `Freckles`,
    detail: `Freckle tattoos are perfect for clients who want to look like they have been kissed by the sun. Freckles can be done very subtle or more dramatic. As with all cosmetic makeup, freckles also require a touch up appointment and are suggested to have annual color boosts. The touch up is included in the initial price. Please book your touch up at the same time as booking your initial session. Anywhere between 4-10 weeks. 1 1/2 hours $200 Deposit required for booking. Balance is due at Initial Session`,
    time: `1 hour 30 minutes`,
    price: `$75.00`,
    link: `https://square.site/appointments/book/mfy94jph0n6o7o/B4D378VE2N7Z3/start?service_id=XDEJY4PN5ODHJ3DJJYOOZJQY`,
  },
  FRECKLESTOUCHUP: {
    name: `Freckles Touch Up`,
    detail: `For clients who have had their initial freckles session with me. Please book anywhere between 4-10 weeks from your Initial Freckles Session. This booking is reserved for included second session perfecting appointments only. Must be booked no longer than 10 weeks from the Initial Session date to avoid additional charges. Required 48 hours notice for cancellations or rescheduling to avoid a $50 charge. Aftercare included.`,
    time: `45 minutes`,
    price: `FREE`,
    link: `https://square.site/appointments/book/mfy94jph0n6o7o/B4D378VE2N7Z3/start?service_id=DLONSFWD2ZJMTUIQM75TZHQM`,
  },
  FRECKLESANNUAL: {
    name: `Annual Freckle Refresh`,
    detail: `For my clients only. Annual freckle refresh appointment.`,
    time: `1 hour`,
    price: `$75.00`,
    link: `https://square.site/appointments/book/mfy94jph0n6o7o/B4D378VE2N7Z3/start?service_id=GD2XKRJMBDEBZJAFXJNRPKOO`,
  },
}
