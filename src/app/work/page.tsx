import Reveal from "@/components/ui/Reveal";
import styles from "./page.module.css";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Work | UnityScale",
  description: "Case studies and proven growth results.",
};

export default function WorkPage() {
  return (
    <main className={styles.main}>
      <section className={styles.headerSection}>
        <div className="container">
          <Reveal>
            <h1 className="h1-hero">Our <span className="text-gradient">Work</span></h1>
            <p className="subtitle" style={{marginTop: '1.5rem'}}>
              We don't just build websites. We build client acquisition systems.
              Here is how we've scaled businesses across different industries.
            </p>
          </Reveal>
        </div>
      </section>

      <section className={`section ${styles.casesSection}`}>
        <div className="container">
          
          {/* Case Study 1 */}
          <Reveal>
            <div className={`glass-panel ${styles.caseStudy}`}>
              <div className={styles.caseTop}>
                <h2>Classic Vision Technology</h2>
                <div className={styles.badge}>B2B Tech / SaaS</div>
              </div>
              
              <div className={styles.caseGrid}>
                <div className={styles.caseCol}>
                  <h3>The Problem</h3>
                  <p>Inconsistent branding and lack of a structured content strategy. Their online presence didn't match the quality of their technology solutions, resulting in low organic trust.</p>
                </div>
                <div className={styles.caseCol}>
                  <h3>The Solution</h3>
                  <p>Developed a rigorous structured content strategy, elevated their brand positioning to reflect premium authority, and created a consistent, high-converting content flow.</p>
                </div>
              </div>

              <div className={styles.resultsGrid}>
                <div className={styles.resultBox}>
                  <h4>+68%</h4>
                  <span>Engagement Increase</span>
                </div>
                <div className={styles.resultBox}>
                  <h4>Brand Authority</h4>
                  <span>Positioning Established</span>
                </div>
                <div className={styles.resultBox}>
                  <h4>Consistent</h4>
                  <span>Content Pipeline</span>
                </div>
              </div>

              <div className={styles.insight}>
                <strong>Key Insight:</strong> 
                <p>For B2B tech, trust is the currency. By focusing on high-quality, structured educational content rather than promotional spam, we built genuine authority.</p>
              </div>
            </div>
          </Reveal>

          {/* Case Study 2 */}
          <Reveal delay={0.1}>
            <div className={`glass-panel ${styles.caseStudy}`}>
              <div className={styles.caseTop}>
                <h2>Dubey Traders</h2>
                <div className={styles.badge}>Local Retail</div>
              </div>
              
              <div className={styles.caseGrid}>
                <div className={styles.caseCol}>
                  <h3>The Problem</h3>
                  <p>Complete lack of digital footprint. Relying entirely on foot traffic and word-of-mouth in a geographical area that was increasingly searching online before buying.</p>
                </div>
                <div className={styles.caseCol}>
                  <h3>The Solution</h3>
                  <p>Built a digital presence from absolute scratch. Created hyper-localized content aimed at their specific demographic, optimizing their visibility in local search and social.</p>
                </div>
              </div>

              <div className={styles.resultsGrid}>
                <div className={styles.resultBox}>
                  <h4>New Channel</h4>
                  <span>Online Identity Generated</span>
                </div>
                <div className={styles.resultBox}>
                  <h4>Domination</h4>
                  <span>Local SEO Awareness</span>
                </div>
                <div className={styles.resultBox}>
                  <h4>Foot Traffic</h4>
                  <span>Increased via Digital</span>
                </div>
              </div>

              <div className={styles.insight}>
                <strong>Key Insight:</strong> 
                <p>Local businesses often don't need complex funnels. They need extreme visibility where their local customers are looking. We built the bridge between local search and their front door.</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
             <div className={styles.contactPrompt}>
                <h2 className="h2-section">Ready to be our next case study?</h2>
                <Button href="/contact" variant="primary" showArrow>Start Your Growth</Button>
             </div>
          </Reveal>

        </div>
      </section>
    </main>
  );
}
