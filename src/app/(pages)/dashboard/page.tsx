import {
  Thermometer,
  Droplets,
  Eye,
  Camera,
  Activity,
  Battery,
  MapPin,
  Wifi,
} from "lucide-react";
import { ChartLineDots } from "@/components/chartLine";
import { ChartBarMultiple } from "@/components/chartBar";
import { Container } from "@/components/container";

export default function Dashboard() {
  return (
    <Container>
      <div className="p-10">
        {/* Seção das informações gerais */}
        <section className="py-5">
          <h3 className="font-bold text-3xl py-2">
            Dashboard de Monitoramento
          </h3>
          <p className="text-black/70 mb-7">Dados em tempo real do robô CID</p>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7 my-4">
            <div
              className="flex justify-between bg-cinza/10 p-5 rounded-lg 
          shadow-md items-center"
            >
              <div className="flex flex-col gap-2">
                <p className="font-semibold text-black/80 text-sm">
                  Temperatura Atual
                </p>
                <h2 className="font-extrabold text-xl">
                  28{" "}
                  <span
                    className="
              font-normal"
                  >
                    °C
                  </span>
                </h2>
                <p className="text-verde text-sm">+2°C desde ontem</p>
              </div>
              <div
                className="w-16 h-16 rounded-full bg-vermelho flex
            justify-center items-center"
              >
                <Thermometer color="white" />
              </div>
            </div>
            <div
              className="flex justify-between bg-cinza/10 p-5 rounded-lg 
          shadow-md items-center"
            >
              <div className="flex flex-col gap-2">
                <p className="font-semibold text-black/80 text-sm">
                  Umidade do Solo
                </p>
                <h2 className="font-extrabold text-xl">
                  65{" "}
                  <span
                    className="
              font-normal"
                  >
                    %
                  </span>
                </h2>
                <p className="text-verde text-sm">Ideal para cultivo</p>
              </div>
              <div
                className="w-16 h-16 rounded-full bg-azul flex
            justify-center items-center"
              >
                <Droplets color="white" />
              </div>
            </div>
            <div
              className="flex justify-between bg-cinza/10 p-5 rounded-lg 
          shadow-md items-center"
            >
              <div className="flex flex-col gap-2">
                <p className="font-semibold text-black/80 text-sm">
                  Umidade do Ar
                </p>
                <h2 className="font-extrabold text-xl">
                  72{" "}
                  <span
                    className="
              font-normal"
                  >
                    %
                  </span>
                </h2>
                <p className="text-verde text-sm">Condições favoráveis</p>
              </div>
              <div
                className="w-16 h-16 rounded-full bg-verde flex
            justify-center items-center"
              >
                <Eye color="white" />
              </div>
            </div>
            <div
              className="flex justify-between bg-cinza/10 p-5 rounded-lg 
          shadow-md items-center"
            >
              <div className="flex flex-col gap-2">
                <p className="font-semibold text-black/80 text-sm">
                  Fotos Coletadas
                </p>
                <h2 className="font-extrabold text-xl">156 </h2>
                <p className="text-verde text-sm">+12 Hoje</p>
              </div>
              <div
                className="w-16 h-16 rounded-full bg-amarelo-terc flex
            justify-center items-center"
              >
                <Camera color="white" />
              </div>
            </div>
          </section>
        </section>

        {/* ################################################ */}
        {/* Gráfico de temperatura ao longo do dia  */}

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-4">
          <div className="">
            <ChartLineDots />
          </div>

          {/* ################################################ */}
          {/* Seção do gráfico de umidade por setor  */}

          <section>
            <div className="mb-7 max-w-[700px]">
              <ChartBarMultiple />
            </div>
          </section>
        </section>

        {/* ################################################ */}
        {/* Seção de status do robô  */}

        <section id="status-cid">
          <div className="flex flex-col p-5 rounded-lg shadow-lg gap-4 my-4 lg:px-32 lg:py-16">
            <h3 className="font-semibold text-xl my-5">Status do Robô CID</h3>
            <section className="flex flex-col gap-3">
              <div className="flex justify-between px-2">
                <p className="flex gap-2 text-black/70">
                  <span className="text-verde">
                    <Activity width={20} />
                  </span>
                  Status
                </p>
                <span className="bg-verde/10 text-sm px-2 py-1 text-verde rounded-lg">
                  Ativo
                </span>
              </div>
              <div className="flex justify-between px-2">
                <p className="flex gap-2 text-black/70">
                  <span className="text-amarelo-terc">
                    <Battery width={20} />
                  </span>
                  Bateria
                </p>
                <p className="font-semibold">
                  78 <span>%</span>
                </p>
              </div>
              <div className="flex justify-between px-2">
                <p className="flex gap-2 text-black/70">
                  <span className="text-azul">
                    <MapPin width={20} />
                  </span>
                  Localização
                </p>
                <p className="font-semibold">
                  Setor <span>A-3</span>
                </p>
              </div>
              <div className="flex justify-between px-2">
                <p className="flex gap-2 text-black/70">
                  <span className="text-roxo">
                    <Wifi width={20} />
                  </span>
                  Conexão
                </p>

                <span className="font-semibold">Forte</span>
              </div>
            </section>
          </div>
        </section>
      </div>
    </Container>
  );
}
