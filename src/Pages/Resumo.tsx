import GraficoVendas from "../Components/GraficoVendas"
import { useData } from "../Context/DataContext"

const Resumo = () => {
  const { data } = useData()

  if (data === null) return null
  return (
    <section>
      <div className="resumo flex mb">
        <div className="box">
          <h2>Sales</h2>
          <span>
            {data
              .filter((i) => i.status !== "falha")
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
          </span>
        </div>
        <div className="box">
          <h2>Received</h2>
          <span>
            {data
              .filter((i) => i.status === "pago")
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
          </span>
        </div>
        <div className="box">
          <h2>Processing</h2>
          <span>
            {data
              .filter((i) => i.status === "processando")
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
          </span>
        </div>
      </div>
      <div className="box mb">
        <GraficoVendas data={data} />
      </div>
    </section>
  )
}

export default Resumo
