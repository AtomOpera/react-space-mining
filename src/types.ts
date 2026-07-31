export interface Card {
  id: number;
  card: string;
  description: string;
  action: 'attack' | 'deffence' | 'mana';
  quantity: number;
  type: string;
  color: string;
}

export interface AsteroidCard {
  id: number;
  card: string;
  description: string;
  actions: Action[];
  type: string;
  quantity: number;
  harm_disturbance?: number;
  ore_goal?: number;
  color: string;
}

export interface Action {
  key: number;
  type: string;
  quantity: number;
}
