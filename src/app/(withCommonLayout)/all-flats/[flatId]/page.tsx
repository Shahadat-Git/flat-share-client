import FlatDetails from "@/components/ui/FlatDetails/FlatDetails";
import { Box } from "@mui/material";

type TParams = {
  flatId: string;
};

const FlatDetailPage = async ({ params }: { params: TParams }) => {
  const flatId = params.flatId;
  const res = await fetch(`https://next-flat-share-server.vercel.app/api/flat/${flatId}`);
  const { data: flat } = await res.json();

  return (
    <Box>
      <FlatDetails flat={flat} />
    </Box>
  );
};

export default FlatDetailPage;