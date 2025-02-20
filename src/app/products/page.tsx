import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ProductsPage = () => {
  return (
    <div className="rounded-xl border border-red-500 p-7">
      <h1 className="p-3 text-red-500">ProductsPage</h1>
      <Button>Fim</Button>
      <Input placeholder="Bora fechar esse projeto!" />
    </div>
  );
};

export default ProductsPage;
