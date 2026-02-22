import { ImageSourcePropType } from 'react-native';

export interface ProductProps {
  id: string;
  name: string;
  categoryId: string;
  image: ImageSourcePropType;
}

export const PRODUCTS: ProductProps[] = [
    { id: '1', name: 'Ração Golden', categoryId: '1', image: require("@/assets/media/logo.png")},
    { id: '2', name: 'Ração Gran Plus', categoryId: '1', image: require("@/assets/media/logo.png")},
    { id: '3', name: 'Bolinha Nó', categoryId: '2', image: require("@/assets/media/logo.png")},
    { id: '4', name: 'Arranhador', categoryId: '3', image: require("@/assets/media/logo.png")},
    { id: '5', name: 'Ração Golden', categoryId: '1', image: require("@/assets/media/logo.png")},
    { id: '6', name: 'Ração Gran Plus', categoryId: '1', image: require("@/assets/media/logo.png")},
    { id: '7', name: 'Bolinha Nó', categoryId: '2', image: require("@/assets/media/logo.png")},
    { id: '8', name: 'Arranhador', categoryId: '3', image: require("@/assets/media/logo.png")},
    { id: '9', name: 'Ração Golden', categoryId: '1', image: require("@/assets/media/logo.png")},
    { id: '10', name: 'Ração Gran Plus', categoryId: '1', image: require("@/assets/media/logo.png")},
    { id: '11', name: 'Bolinha Nó', categoryId: '2', image: require("@/assets/media/logo.png")},
    { id: '12', name: 'Arranhador', categoryId: '3', image: require("@/assets/media/logo.png")},
    { id: '13', name: 'Ração Golden', categoryId: '1', image: require("@/assets/media/logo.png")},
    { id: '14', name: 'Ração Gran Plus', categoryId: '1', image: require("@/assets/media/logo.png")},
    { id: '15', name: 'Bolinha Nó', categoryId: '2', image: require("@/assets/media/logo.png")},
    { id: '16', name: 'Arranhador', categoryId: '3', image: require("@/assets/media/logo.png")},
    { id: '17', name: 'Ração Golden', categoryId: '1', image: require("@/assets/media/logo.png")},
    { id: '18', name: 'Ração Gran Plus', categoryId: '1', image: require("@/assets/media/logo.png")},
    { id: '19', name: 'Bolinha Nó', categoryId: '2', image: require("@/assets/media/logo.png")},
    { id: '20', name: 'Arranhador', categoryId: '3', image: require("@/assets/media/logo.png")},
    { id: '21', name: 'Ração Golden', categoryId: '1', image: require("@/assets/media/logo.png")},
    { id: '22', name: 'Ração Gran Plus', categoryId: '1', image: require("@/assets/media/logo.png")},
    { id: '23', name: 'Bolinha Nó', categoryId: '2', image: require("@/assets/media/logo.png")},
    { id: '24', name: 'Arranhador', categoryId: '3', image: require("@/assets/media/logo.png")},
    { id: '25', name: 'Ração Golden', categoryId: '1', image: require("@/assets/media/logo.png")},
    { id: '26', name: 'Ração Gran Plus', categoryId: '1', image: require("@/assets/media/logo.png")},
    { id: '27', name: 'Bolinha Nó', categoryId: '2', image: require("@/assets/media/logo.png")},
    { id: '28', name: 'Arranhador', categoryId: '3', image: require("@/assets/media/logo.png")},
    { id: '29', name: 'Ração Golden', categoryId: '1', image: require("@/assets/media/logo.png")},
    { id: '30', name: 'Ração Gran Plus', categoryId: '1', image: require("@/assets/media/logo.png")},
    { id: '31', name: 'Bolinha Nó', categoryId: '3', image: require("@/assets/media/logo.png")},
    { id: '32', name: 'Arranhador', categoryId: '3', image: require("@/assets/media/logo.png")},
]