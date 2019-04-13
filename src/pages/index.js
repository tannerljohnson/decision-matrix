import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import DecisionTable from "../components/decisionTable"
import OptionTable from "../components/optionTable"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>How it works</h1>
    <p>You have to make an important decision. You have several <b>options</b>.
        To decide, you'll need to narrow down your decision criteria. Let's call those <b>decision factors</b>.</p>
    <ul>
      <li><em>Step 1</em>: Add all your <b>decision factors</b> (e.g., "Salary").</li>
      <li><em>Step 2</em>: Provide a weight for all your <b>decision factors</b> (e.g., 1.0). They must add up to 1.</li>
      <li><em>Step 3</em>: Add all your <b>options</b> (e.g., "Job Offer #1").</li>
      <li><em>Step 4</em>: Score all your <b>options</b> on a scale of 1 - 4.</li>
      <li><em>Step 5</em>: Your highest ranked <b>option</b> is at the top of the list! :)</li>
    </ul>

    <h2>Add a decision factor</h2>
    <DecisionTable/>

    <h2>Add an option</h2>
    <OptionTable/>

  </Layout>
)

export default IndexPage
