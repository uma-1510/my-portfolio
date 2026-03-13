import type { Metadata } from 'next'
import styles from './about.module.css'
import PageHeader from '../../components/Pageheader'

export const metadata: Metadata = { title: 'About' }

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <PageHeader />

        <h1 className={styles.title}>A very brief introduction of me</h1>
        {/* ---- Quick facts strip ---- */}
        <div className={styles.facts}>
          <span className={styles.fact}>📍 Boston, open to relocate anywhere in the U.S.</span>
          <span className={styles.fact}>🎓 Dean Scholar, Clark University</span>
          <span className={styles.fact}>🌍 Open Source Contributor</span>
        </div>

        <h2 className={styles.sectionTitle}>Who am I?</h2>
        <p >
          My name is Uma Maheswari Chinnam. Most people call me Uma - short,
          sweet, easy to remember.
        </p>
        <p>
          I am a CS master&apos;s student. I spend most of my time building things on the internet 
          usually AI tools, full-stack apps, and systems that solve real problems. 
          I love turning ideas into working products, whether that’s through hackathons, side projects, or open-source collaboratios where i get to explore new Technologies.
          I enjoy documenting the process, sharing what I learn, and building alongside other curious developers.
        </p>

        <h2 className={styles.sectionTitle}>What I&apos;m doing right now?</h2>
        <p>
          I am in my final semester, finishing my capstone
          and actively trying to land my full-time role in tech. In
          between, I am networking(looking for more human connections in the world of AI), attending events, struggling to narrow down
          ideas for more projects.
        </p>
        <p>
          It is not always easy. But I am persistent, and I actually put in the
          effort, so hopeful of whatever comes next.
        </p>

        <h2 className={styles.sectionTitle}>Where I&apos;m from?</h2>
        <p>
          I grew up in Hyderabad, India. Right now, I call Boston home. I am open to relocating
          anywhere in the U.S. I think being young is the best time to move
          somewhere new, figure out a city, and see how you grow in it.
        </p>

        <h2 className={styles.sectionTitle}>My Education</h2>
        <p>
          I am doing my Master&apos;s in Computer Science at Clark University,
          where I am a Dean Scholar. I also work as a research
          assistant where I spent time analyzing deep fake detection models
          alongside Professor Rand Alfaris, benchmarking their performance and exploring ways to improve them.
          Before that I did my undergrad in Computer Science at R.V.R & J.C College in India, where I was a university rank holder.
        </p>

        <h2 className={styles.sectionTitle}>Why tech?</h2>
        <p>
          I was a math kid. Genuinely nerdy about it.I wasn’t particularly great at most extracurriculars(arts/ sports) though. 
          When I hit undergrad, I
          started exploring code slowly at first, then all at once.
        </p>
        <p>
          By second year, Java had me hooked. Not just the syntax I wanted
          to understand why everything worked the way it did. I took a
          certification exam and placed in the top 5% out of roughly 60,000
          participants. 
        </p>
        <p>
          From there: more projects, STEM events, networking. That led to my
          first role at Quinbay Technologies, a fast-growing startup in India,
          and then a full-time position at HCL Software.
        </p>

        <h2 className={styles.sectionTitle}>Outside of code</h2>
        <p>
          I love music very much, and I occasionally sing too not very well though.
          I love hiking and camping in the woods. There is something about being in the
          mountains that resets everything.
        </p>
        <p>
          Also somewhere
          between leaving home and landing in the U.S., I discovered I
          actually enjoy cooking. Did not see that one coming.
        </p>

        <h2 className={styles.sectionTitle}>Life right now</h2>
        <p>
          Pretty good, honestly. Busy in the way that feels productive.
          Building, learning, job hunting, figuring things out which is
          exactly where I want to be. The uncertainty is real, but so is the
          momentum. I will take that.
        </p>

      </div>
    </div>
  )
}