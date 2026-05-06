import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';

export default function Home() {
  return (
    <>
      <Head>
        <title>LUXE design studio & store - Премиальная мебель</title>
        <meta name="description" content="Премиальная мебель ручной работы - LUXE design studio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <CustomCursor />
      <Header />
      <Hero />
      <ProductGrid />
      <Footer />
    </>
  );
}