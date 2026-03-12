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

        <h2 className={styles.sectionTitle}>Who am I?</h2>
        <p >
          My name is Uma Maheswari Chinnam. Most people call me Uma — short,
          sweet, easy to remember.
        </p>
        <p>
          I am a CS master&apos;s student, a builder, and someone who cannot
          stop thinking about problems worth solving. I write code, contribute
          to open source, build side projects, and occasionally go down rabbit
          holes I did not plan for. That is just how it goes.
        </p>

        <h2 className={styles.sectionTitle}>What I&apos;m doing right now</h2>
        <p>
          I am in my final semester at Clark University, finishing my capstone
          and actively trying to land my first full-time role in tech. In
          between, I am networking, attending events, struggling to narrow down
          ideas for new projects, and genuinely missing the kind of human
          connection that gets lost in a world running on AI.
        </p>
        <p>
          It is not always easy. But I am persistent, and I actually put in the
          effort, so I am not worried.
        </p>

        <h2 className={styles.sectionTitle}>Where I&apos;m from</h2>
        <p>
          I grew up in Hyderabad, India. Right now, I call Boston home. I am open to relocating
          anywhere in the U.S. I think being young is the best time to move
          somewhere new, figure out a city, and see how you grow in it.
        </p>

        <h2 className={styles.sectionTitle}>Education</h2>
        <p>
          I am doing my Master&apos;s in Computer Science at Clark University,
          where I am a Dean Scholar. I also work as a research
          assistant where I spent time analyzing deep fake detection models
          alongside Professor Rand Alfaris, which pushed me in ways a classroom
          alone never could have.
        </p>

        <h2 className={styles.sectionTitle}>Why tech?</h2>
        <p>
          I was a math kid. Genuinely nerdy about it. When I hit undergrad, I
          started exploring code — slowly at first, then all at once.
        </p>
        <p>
          By second year, Java had me hooked. Not just the syntax — I wanted
          to understand why everything worked the way it did. I took a
          certification exam and placed in the top 5% out of roughly 60,000
          participants. That moment told me this was real.
        </p>
        <p>
          From there: more projects, STEM events, networking. That led to my
          first role at Quinbay Technologies, a fast-growing startup in India,
          and then a full-time position at HCL Software. Tech was not a plan.
          It became the thing I kept choosing.
        </p>

        <h2 className={styles.sectionTitle}>Outside of code</h2>
        <p>
          I love music deeply, and I occasionally sing too — not very well,
          but that has never stopped me. Every summer I go on at least two or
          three hikes and camping trips. There is something about being in the
          mountains that resets everything. I am a mountain person through and
          through, though I would not say no to a beach either.
        </p>
        <p>
          I also love movies in every genre, every language — subtitles are
          not a barrier, they are just part of the experience. And somewhere
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

        {/* ---- Quick facts strip ---- */}
        <div className={styles.facts}>
          <span className={styles.fact}>📍 Boston, open to relocate anywhere in the U.S.</span>
          <span className={styles.fact}>🎓 Clark University, MS Computer Science</span>
          <span className={styles.fact}>💼 Actively open to work</span>
        </div>

      </div>
    </div>
  )
}