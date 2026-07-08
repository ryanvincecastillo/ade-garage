import { Suspense } from "react";
import ShopContent from "./ShopContent";

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#fafafa] pt-16" />}>
      <ShopContent />
    </Suspense>
  );
}
