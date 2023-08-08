import CardOs from "@/components/CardOs";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-full mt-2">
      <CardOs />

      <a className="hover:underline mt-8" href="/os">
        clique aqui para visualizar as ordens de serviços
      </a>
    </div>
  );
}
