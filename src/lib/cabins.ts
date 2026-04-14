import cabinLake from '../assets/cabin-lake.png';
import cabinMountain from '../assets/cabin-mountain.png';
import cabinForest from '../assets/hero-bg.png';
import cabinLakeInt from '../assets/cabin-lake-int.png';
import cabinMountainInt from '../assets/cabin-mountain-int.png';
import cabinForestInt from '../assets/cabin-forest-int.png';

export interface Cabin {
  id: string;
  name: string;
  location: string;
  image: string;
  images: string[];
  description: string;
  specs: {
    area: string;
    beds: number;
    guests: number;
  };
  price: string;
  rating: number;
  amenities: string[];
}

export const cabins: Cabin[] = [
  {
    id: 'refugio-do-lago',
    name: 'Refúgio do Lago',
    location: 'Borda da Mata, MG',
    image: cabinLake,
    images: [cabinLake, cabinLakeInt],
    description: 'Uma cabana minimalista debruçada sobre as águas calmas, onde o reflexo das estrelas é o seu único vizinho. Perfeita para casais que buscam um refúgio romântico e privativo com o som suave do lago.',
    specs: { area: '85m²', beds: 2, guests: 4 },
    price: 'R$ 850',
    rating: 4.9,
    amenities: ['Cozinha Completa', 'Deck Privativo', 'Lareira', 'Wi-fi Giga', 'Hidromassagem', 'Café da manhã artesanal'],
  },
  {
    id: 'mirante-do-sol',
    name: 'Mirante do Sol',
    location: 'Santo Antônio do Pinhal, SP',
    image: cabinMountain,
    images: [cabinMountain, cabinMountainInt],
    description: 'Localizada no ponto mais alto da propriedade, esta cabana oferece uma vista 360º de tirar o fôlego para o Vale da Mantiqueira. Desfrute do pôr do sol mais espetacular da região do seu deck privativo.',
    specs: { area: '120m²', beds: 3, guests: 6 },
    price: 'R$ 1.200',
    rating: 5.0,
    amenities: ['Piscina Infinita', 'Sauna Seca', 'Área Gourmet', 'Telescópio Professional', 'Ar Condicionado Quente/Frio', 'Adega de Vinhos'],
  },
  {
    id: 'cabana-da-neblina',
    name: 'Cabana da Neblina',
    location: 'Gonçalves, MG',
    image: cabinForest,
    images: [cabinForest, cabinForestInt],
    description: 'Aninhada no coração da mata nativa, esta cabana é o convite perfeito para o silêncio e o aconchego em dias de fog. Sinta o cheiro da terra molhada e o canto dos pássaros logo ao acordar.',
    specs: { area: '65m²', beds: 1, guests: 2 },
    price: 'R$ 650',
    rating: 4.8,
    amenities: ['Fogo de Chão', 'Biblioteca Particular', 'Cesta de Café incluso', 'Chuveiro Externo Aquecido', 'Banheira Vitoriana', 'Redário no Deck'],
  },
];
