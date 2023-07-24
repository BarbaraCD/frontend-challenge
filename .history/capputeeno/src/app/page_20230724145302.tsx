"use cliente"

import Image from 'next/image'
import styles from './page.module.css'
import { FilterBar } from '@/components/FilterBar'
import { ProductsList } from '@/components/ProductsList'
import { QueryClientProvider } from '@tanstack/react-query'

export default function Home() {
  return (
    <QueryClientProvider>
      <main className={styles.main}>
        <FilterBar />
        <ProductsList/>
      </main>
    </QueryClientProvider>
    

  )
}
