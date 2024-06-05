"use client";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useGetAllFlatsQuery } from "@/redux/api/flatApi";

const FlatSearchResultPage = () => {
  const router = useRouter();
  const [params, setParams] = useState({});

  useEffect(() => {
    const { searchTerm, totalBedrooms, minPrice, maxPrice } = router.query;

    setParams({
      searchTerm,
      totalBedrooms: totalBedrooms ? Number(totalBedrooms) : undefined,
      minPrice: minPrice ? Number(minPrice) : undefined,
      maxPrice: maxPrice ? Number(maxPrice) : undefined,
    });
  }, [router.query]);

  const { data, isLoading } = useGetAllFlatsQuery(params);
  console.log(data);
  return <div>Flat search result page</div>;
};

export default FlatSearchResultPage;