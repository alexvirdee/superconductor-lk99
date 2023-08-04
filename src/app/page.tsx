import Image from 'next/image'
import Superconductor from '@/components/SuperConductor/Superconductor'
import SpinningRing from '@/components/SpinningRing/SpinningRing'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>LK99 IS REAL</h1>
      <Superconductor />
      <SpinningRing />
    </main>
  )
}
