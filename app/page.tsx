import Pricing from 'components/Pricing';
import { getActiveProductsWithPrices } from 'utils/supabase-client';

export const revalidate = 60;

export default async function PricingPage() {
  const products = await getActiveProductsWithPrices();

  return <Pricing products={products} />;
}
