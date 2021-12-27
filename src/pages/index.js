import React from "react";
import Layout from "../components/layout";
import Card from "../components/card";
// import SEO from "../components/seo";

function IndexPage() {
  return (
    <Layout>
      {/* <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      /> */}

      <section>
        <Card
          category="JavaScript"
          heading="What is React?"
          date="10/12/2021"
          excerpt="This is the excerpt for this post"
        />
      </section>
    </Layout>
  );
}

export default IndexPage;
