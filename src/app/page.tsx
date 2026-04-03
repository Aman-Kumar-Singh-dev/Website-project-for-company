import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import styles from "./page.module.css";
import { ArrowRight, BarChart, Users, Target, Shield } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* 1. HERO SECTION */}
      <section className={styles.hero}>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className={styles.heroVideo}
        >
          <source src="/video/dna_animation.mp4" type="video/mp4" />
        </video>
        <div className={styles.heroOverlay}></div>
        
        <div className={`container ${styles.heroContent}`}>
          <Reveal delay={0.2}>
            <div className={styles.badge}>Systematic Growth Agency</div>
          </Reveal>
          <Reveal delay={0.3}>
            <h1 className="h1-hero">
              Turn Content Into <br />
              <span className="text-gradient">Measurable Growth.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="subtitle">
              We don't just grow brands. We build intelligent, Apple-inspired 
              client acquisition systems that scale your revenue and visibility unpredictably.
            </p>
          </Reveal>
          <Reveal delay={0.5}>
            <div className={styles.heroCtas}>
              <Button href="/contact" variant="primary" showArrow>Start Your Growth</Button>
              <Button href="/work" variant="outline">View Case Studies</Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. PROBLEM SECTION */}
      <section className={`section ${styles.problemSection}`}>
        <div className="container">
          <Reveal>
            <div className={styles.twoCol}>
              <h2 className="h2-section">Beautiful design means nothing if it doesn't convert.</h2>
              <div className={styles.problemText}>
                <p>Most businesses treat their digital presence like a brochure. They post randomly, hope for the best, and wonder why their traffic isn't turning into revenue.</p>
                <p>If your website isn't working as your hardest-working salesperson, you're losing money every single day.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. SOLUTION SECTION */}
      <section className={`section ${styles.solutionSection}`}>
        <div className="container">
          <Reveal>
            <div className={styles.glassCardWrapper}>
              <div className={`glass-panel ${styles.solutionCard}`}>
                <h2 className="h2-section">We build systems, not just websites.</h2>
                <p className="subtitle">
                  Our approach combines conversion-focused psychology with premium 
                  Silicon-Valley aesthetics to create a seamless pipeline from attention to client.
                </p>
                <div className={styles.statsRow}>
                  <div className={styles.statBox}>
                    <h3 className="text-gradient">100%</h3>
                    <span>Outcome Focused</span>
                  </div>
                  <div className={styles.statBox}>
                    <h3 className="text-gradient">3x</h3>
                    <span>Average Conversion</span>
                  </div>
                  <div className={styles.statBox}>
                    <h3 className="text-gradient">24/7</h3>
                    <span>Systematic Scaling</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. SERVICES SECTION */}
      <section className={`section ${styles.servicesSection}`} id="services">
        <div className="container">
          <Reveal>
            <div className={styles.sectionHeader}>
              <h2 className="h2-section">Outcome-Based Services</h2>
              <p className="subtitle">Everything we do is tied directly to your bottom line.</p>
            </div>
          </Reveal>

          <div className={styles.servicesGrid}>
            <Reveal delay={0.1}>
              <div className={styles.serviceBox}>
                <BarChart className={styles.serviceIcon} />
                <h3>Content Strategy</h3>
                <p>We build structured content systems designed to attract and convert highly-targeted traffic.</p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className={styles.serviceBox}>
                <Users className={styles.serviceIcon} />
                <h3>Social Media Growth</h3>
                <p>From zero presence to consistent engagement—grow a brand people recognize and trust.</p>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className={styles.serviceBox}>
                <Target className={styles.serviceIcon} />
                <h3>Lead Generation</h3>
                <p>Turn attention into opportunity. We build reliable funnels that bring real inquiries.</p>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className={styles.serviceBox}>
                <Shield className={styles.serviceIcon} />
                <h3>Brand Positioning</h3>
                <p>Stand out in a crowded market with a clear, undeniable, and premium identity.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. CASE STUDY PREVIEW */}
      <section className={`section ${styles.workSection}`}>
         <div className="container">
            <Reveal width="100%">
              <div className={styles.workHeader}>
                <h2 className="h2-section">Proven Results</h2>
                <Button href="/work" variant="secondary" showArrow>Explore All Work</Button>
              </div>
            </Reveal>
            
            <div className={styles.workGrid}>
              <Reveal delay={0.1}>
                <div className={styles.workCard}>
                   <div className={styles.workImagePlaceholder}>
                      <h3>Classic Vision Technology</h3>
                      <span>B2B Tech / SaaS</span>
                   </div>
                   <div className={styles.workCardContent}>
                      <h4>+68% Engagement</h4>
                      <p>Developed structured content strategy, improved brand positioning, and created consistent content flow.</p>
                   </div>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className={styles.workCard}>
                   <div className={styles.workImagePlaceholder}>
                      <h3>Dubey Traders</h3>
                      <span>Local Retail</span>
                   </div>
                   <div className={styles.workCardContent}>
                      <h4>Online Identity Domination</h4>
                      <p>Built digital presence from scratch, dominating local market visibility.</p>
                   </div>
                </div>
              </Reveal>
            </div>
         </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className={`section ${styles.testimonialSection}`}>
        <div className={`container ${styles.testimonialContainer}`}>
          <Reveal>
            <h2 className="h2-section text-center">Trusted by Growing Businesses</h2>
          </Reveal>
          <div className={styles.testimonialGrid}>
            <Reveal delay={0.1}>
              <div className={`glass-panel ${styles.testimonialCard}`}>
                <p>"UnityScale helped us establish a professional online presence from scratch. The consistency and strategy made a real difference."</p>
                <div className={styles.author}>
                  <span>- Local Retail Client</span>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className={`glass-panel ${styles.testimonialCard}`}>
                <p>"We saw noticeable improvement in engagement and brand visibility within weeks. Highly recommended."</p>
                <div className={styles.author}>
                  <span>- Fitness Industry Leader</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 7. PROCESS SECTION */}
      <section className={`section ${styles.processSection}`}>
         <div className="container">
           <Reveal>
             <h2 className="h2-section text-center" style={{marginBottom: '4rem'}}>How We Scale You</h2>
           </Reveal>
           <div className={styles.processSteps}>
              <Reveal delay={0.1}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>01</div>
                  <h3>Audit & Architecture</h3>
                  <p>We analyze your existing presence and map out the exact system needed to capture your market.</p>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>02</div>
                  <h3>Strategic Execution</h3>
                  <p>We design the funnels, build the assets, and deploy the high-converting content.</p>
                </div>
              </Reveal>
              <Reveal delay={0.3}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>03</div>
                  <h3>Scale & Optimize</h3>
                  <p>We measure the outcomes, refine the messaging, and crank up the volume to drive unpredictable revenue.</p>
                </div>
              </Reveal>
           </div>
         </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
          <Reveal>
            <div className={`glass-panel ${styles.ctaCard}`}>
              <h2 className="h1-hero">Ready to Dominate?</h2>
              <p className="subtitle" style={{margin: '1.5rem auto 3rem'}}>
                Stop playing small. Let's build a client acquisition system that puts your brand in a league of its own.
              </p>
              <Button href="/contact" variant="primary" showArrow>Book a Strategy Call</Button>
            </div>
          </Reveal>
        </div>
      </section>

    </main>
  );
}
