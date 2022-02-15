import React from 'react'

import Layout from '../components/layout'
// import SEO from "../components/seo";

function AboutPage() {
  return (
    <Layout>
      {/* <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      /> */}

      <section className="flex flex-col items-center md:flex-row">
        <div className="md:mr-8 md:w-2/3">
          <blockquote className="border-l-4 border-gray-900 pl-4 text-justify font-serif leading-loose">
            The point is... to live one&apos;s life in the full complexity of
            what one is, which is something much darker, more contradictory,
            more of a maelstrom of impulses and passions, of cruelty, ecstacy,
            and madness, than is apparent to the civilized being who glides on
            the surface and fits smoothly into the world.
          </blockquote>

          <cite className="mt-4 block text-right text-xs font-bold uppercase">
            – Thomas Nagel
          </cite>
        </div>

        <figure className="w-2/3 md:w-1/3">
          {/* <img alt="A dog relaxing" src={dogIllustration} /> */}
        </figure>
      </section>
    </Layout>
  )
}

export default AboutPage
