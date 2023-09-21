import Clube from "./Clube";
import QuadraFutebol from "./QuadraFutebol";

const clube = new Clube();
const quadraFutebol = new QuadraFutebol();

clube.adicionarQuadra(quadraFutebol);

const reserverQuadra = clube
  .buscarQuadra<QuadraFutebol>(0)
  .reservar(new Date("2023-12-25"));

console.log(reserverQuadra);
