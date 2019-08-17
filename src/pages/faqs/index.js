import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Accordion from '../../components/accordion'
import AccordionItem from '../../components/accordion/item'

const Faqs = ({ data }) => {
  // Image(s) from GraphQL Queary
  const headerImg = data.header.edges[0].node.childImageSharp.fluid
  return (
    <Layout
      headerImg={headerImg}
      imgCaption="Restoration Brow - Plants"
      height={`500px`}
      mobileHeight={`250px`}
      opacity={`0.5`}
      className={`header--text`}
    >
      <SEO title="FAQs" />
      <div className="container-fluid">
        <Accordion>
          <AccordionItem
            title={`What is Microblading?`}
            content={[
              `Microblading is the process of infusing pigment into the skin to simulate the appearance of natural hair. It is considered a tattoo and permanent make up. Although it is considered permanent make up it does fade over time. Touchups are suggested once a year in order to keep the color fresh and shape precise.`,
              `Microblading is meant to be a subtle natural enhancement. Designed to create fuller more beautiful brows. It looks most natural on clients who already have semi full brow hair, and are wanting to perfect their shape. The more hair you have the more natural it will appear. Microblading heals best on young, healthy and dry/normal skin. Oily skin and aging/thin skin is not recommended for microblading. Results will not heal as well or look as natural. If you are in this category you would be a better candidate for the combination or ombré brow.`,
            ]}
          />
          <AccordionItem
            title={`What is a Combination Brow?`}
            content={[
              `A combination brow is the process of infusing pigment into the skin by using microblading and a powder brow technique. This can vary from mostly microblading and some shading to only microblading in the head of the brow and a powder brow throughout the rest. The clients desired preference in my professional opinion will help us choose.`,
            ]}
          />
          <AccordionItem
            title={`What is a Powder/Ombré Brow?`}
            content={[
              `A powder or ombré brow is the process of infusing pigment into the skin to simulate the appearance of filled in eyebrows. This is a beautiful and lasting look for every skin type, especially oily skin. Powder brows can be done more softly or more bold depending on the climbs desired result.`,
            ]}
          />
          <AccordionItem
            title={`How long will they last?`}
            content={[
              `Cosmetic tattooing is designed to fade over time. Factors such as skin type lifestyle age metabolism medications and pigment color affect the longevity of the tattoo. The sun and direct UV lighting (tanning beds) can affect the rate at which these pigments are broken down. To take care of your brows, follow the aftercare instructions and touch up your brows every 12 to 18 months as needed. Touchups are normal and expected on permanent cosmetics.`,
              `Final results vary and cannot be guaranteed due to the nature of the skin as it heals. A follow up appointment is highly recommended at 4 to 6 weeks where we can assess your pigment retention and make any changes necessary to complete your cosmetic tattoo.`,
              `You will want to use a sunscreen for your cosmetic tattoo.`,
            ]}
          />
          <AccordionItem
            title={`What factors will affect my cosmetic tattoo?`}
            content={[
              `Oily skin - increased oil production can cause the delicate hair strokes to blur and heal lighter and powdery.`,
              `Smoking - smokers may notice that their semi permanent cosmetics will fade faster.`,
              `Anemia and iron deficiency - your body will absorb these iron based pigments more quickly.`,
              `Sun exposure - increased exposure to the sun will cause premature fading.`,
              `Age and metabolism - the faster your metabolism the faster the pigment will fade.`,
              `Bleeding during the procedure - excessive bleeding during your procedure will greatly affect how your body retains pigment. While this is not entirely in our control, it is important that you follow before care instructions to help minimize bleeding. This includes avoiding blood medication alcohol and caffeine 24 hours before your appointment.`,
            ]}
          />
          <AccordionItem
            title={`How bad will it hurt?`}
            content={[
              `Topical 5% lidocaine is used to make you comfortable at the start of your cosmetic procedure. I also use a secondary numbing during your cosmetic procedure if needed. Ultimately pain tolerance varies from client to client. Having the procedure during your menstrual cycle may increase your sensitivity.`,
            ]}
          />
          <AccordionItem
            title={`You are not considered a candidate for a cosmetic tattoo if...`}
            content={[
              `Pregnant/breast-feeding`,
              `Currently using Accutane or have used Accutane within the past year.`,
              `If you have a freshly sunburned face.`,
              `On blood thinning medications or antibiotics.`,
              `Have rosacea.`,
              `Are currently undergoing cancer treatment (must be off chemo or radiation for six months).`,
            ]}
          />
          <AccordionItem
            title={`How do I prepare for my procedure.?`}
            content={[
              `If you have reference pictures please feel free to bring these to your appointment. Along with the pencil or powder you are currently using.`,
              `If you tint your brows you will want to do so 72 hours before your appointment.`,
              `You must not use Retin-A near the brow area two weeks before or two weeks after the procedure.`,
              `You will need to avoid water for 7 to 10 days after. This includes excessive sweating, pool, lakes, salt water, and extreme sun exposure, so plan your vacations accordingly.`,
              `No Botox, fillers, Microdermabrasion, chemical peels or anything of the like for at least two weeks prior to your procedure, and also two weeks after.`,
            ]}
          />
          <AccordionItem
            title={`Avoid doing these before your procedure:`}
            content={[
              `Doing any of the following prior to your appointment could alter the outcome of your cosmetic tattoo:`,
              `Do you not work out the day of your appointment.`,
              `You should not take any medication that may thin your blood (i.e. aspirin, ibuprofen, etc) 72 hours before or immediately after your procedure.`,
              `Do not drink alcohol within 24 hours of your procedure.`,
              `Avoid caffeine for 12 hours before your procedure, caffeine increases blood flow in will affect your healed result.`,
            ]}
          />
          <AccordionItem
            title={`How long does my appointment take?`}
            content={[
              `Your appointment can take up to three hours. This allows plenty of time to discuss your procedure and draw your eyebrows on with satisfaction and symmetry.`,
              `This allows me as much time as I need to prefect your eyebrows and discuss aftercare with you.`,
            ]}
          />
          <AccordionItem
            title={`What can I expect after my procedure?`}
            content={[
              `Within the hours following your procedure your brows will appear much darker and bolder than it will heal due to oxidation in the surface layer of your skin. Your brows could also appear warmer in color. You may experience some redness or swelling around the treated area, this typically disappears within 48 hours.`,
              `In several days you may notice some flaking or light scabbing on the treated area, DO NOT PICK AT IT, doing so can result in loss of pigment in those areas. Brows may appear spotty or patchy until the entire brow has finished healing. You may notice that some areas may appear very light or even to have lost pigment entirely after they have peeled, the epidermis will be thicker causing muting, hiding or diffusing of pigment underneath. The epidermis will normalize over the next 4-6 weeks and softened pigment should appear more clearly on surface of the skin.`,
              `At 4-6 weeks your brows will be fully healed. Whatever pigment that does not return will be addressed at your touch up appointment or if you’d prefer darker, bolder brows we can always add more color or dimension during that appointment!`,
            ]}
          />
          <AccordionItem
            title={`Do I need a touch up/follow up appointment?`}
            content={[
              `Yes! All permanent cosmetic procedures require 2 sessions.`,
              `During your 4-8 week follow-up we can assess your pigment retention and make any adjustments needed.`,
              `This follow-up also increases the longevity of your Cosmetic tattoo.`,
            ]}
          />
          <AccordionItem
            title={`What if I need to cancel or reschedule?`}
            content={[
              `A 48 hour notice is required to cancel or reschedule a brow appointment.`,
              `If unable to do so the deposit will be non-refundable and/or non-transferable.`,
            ]}
          />
          <AccordionItem
            title={`What is the aftercare regime?`}
            content={[
              `Wash morning and night for 7 days with gentle cleanser! Wash within 4 hours of getting brows done. (Make sure to wash OUTSIDE shower. Look in the mirror while washing so you can make sure to be EXTRA gentle. Only wipe gently in the direction of hair growth, no circles or hard rubbing. Wash will warm or cool water, and pat dry with clean paper towel.)`,
              `Keep dry (besides washing) until completely healed. Aka no scabbing or flaking left! Usually 10 days.`,
              `Clients still need to keep dry in the shower... steamy hot showers will cause the pores to open and scabs soften, so to be cautious, no extra steamy hot showers!! Avoid the water ESPECIALLY shampoo and conditioner running down.. that’ll cause color discoloration!`,
              `No excessive sweating`,
              `No sauna, hot tub, pool, ocean, etc.`,
              `Do not pick, rub, or scratch scabs! Avoid sleeping on face.`,
              `Avoid direct sun exposure for 2 weeks`,
              `No anti aging or acne products on them ever!! Will cause fading very quickly. This is anything with chemical exfolliants such as Retinol, Glycolic Acid,Salisylic Acid, etc.`,
              `Balm 3 times daily with Q-Tip! If client is oily, 2 times daily. Use the balm until it’s gone, usually takes about 10 days or more!`,
            ]}
          />
        </Accordion>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query faqQuery {
    header: allFile(filter: { name: { eq: "faqHeader_1250x704" } }) {
      edges {
        node {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1250) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          id
        }
      }
    }
  }
`

export default Faqs
